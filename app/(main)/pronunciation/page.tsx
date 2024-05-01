"use client"
import { FeedWrapper } from '@/components/feed-wrapper';
import { Promo } from '@/components/promo';
import { StickyWrapper } from '@/components/sticky-wrapper';
import React, { useState } from 'react'
import { Header } from '../learn/header';
import { UserProgress, UserSubscription } from './action';
import { Quests } from '@/components/quests';
import Form from './Form';


const Pronunciation = async () => {

    const [loaoding, setLoaoding] = useState(false);

    const userProgressData = UserProgress;
    const userSubscriptionData = UserSubscription;

    const [
        userProgress,
        userSubscription,
    ] = await Promise.all([
        userProgressData,
        userSubscriptionData,
    ]);

    const isPro = !!userSubscription?.isActive;

    const handleSubmit = async(text: string) => {
        setLoaoding(true);
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        const a = new Audio(data[0].phonetics[0].audio);
        a.play();
    }

    return (
        <div>
            <div className='flex justify-between'>

                <FeedWrapper>
                    <Header title={"Pronunciation"} />

                    <Form handleSubmit={handleSubmit} />

                </FeedWrapper>
                <StickyWrapper>
                    {!isPro && <Promo />}
                    {/* @ts-ignore */}
                    <Quests points={userProgress.points} />
                </StickyWrapper>
            </div>
        </div>
    )
}

export default Pronunciation;