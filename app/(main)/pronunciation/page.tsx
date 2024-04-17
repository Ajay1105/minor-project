'use client'
import { FeedWrapper } from '@/components/feed-wrapper';
import { Promo } from '@/components/promo';
import { Quests } from '@/components/quests';
import { StickyWrapper } from '@/components/sticky-wrapper';
import { vowels, consonants } from '@/constants';
import React from 'react'
import { Header } from '../learn/header';
import { UserProgress, UserSubscription } from './actions';

const Pronunciation = async () => {

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

  const handleClick = (word: string) => {
    const audio = new Audio(`/sounds/${word}.mp3`);
    audio.play();
  }

  return (
    <div>Pronunciation
      <div className='flex justify-between'>
        
          <FeedWrapper>
            <Header title={"Pronunciations"} />
            <p className=' text-4xl text-black dark:text-white font-extrabold text-center mt-16 mb-3'>Let's learn Hindi</p>
            <p className=' text-2xl text-black dark:text-white font-normal text-center mt-4 mb-3'>Get to know the characters and the sounds</p>
              <p className=' text-4xl text-black dark:text-white font-semibold italic text-center mt-16 mb-3'>स्वर</p>
            <div className='flex flex-wrap justify-center md:ml-12 md:mr-20'>
              {vowels.map((word, index) => (
                <button className='w-20 h-16 text-2xl border-black dark:border-white border-2 m-2 bg-transparent text-black dark:text-white dark:shadow-xl dark:hover:shadow-gray-700 font-bold rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110' key={`soundbtn/${index}`} onClick={()=>handleClick(word)}>
                  {word}
                </button>
              ))}
            </div>
              <p className=' text-4xl text-black dark:text-white font-semibold italic text-center mt-16 mb-3'>व्यंजन</p>
            <div className='flex flex-wrap justify-center md:ml-12 md:mr-20'>
              {consonants.map((word, index) => (
                <button className='w-20 h-16 text-2xl border-black dark:border-white border-2 m-2 bg-transparent text-black dark:text-white dark:shadow-xl dark:hover:shadow-gray-700 font-semibold hover:font-bold rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110' key={`soundbtn/${index}`} onClick={()=>handleClick(word)}>
                  {word}
                </button>
              ))}
            </div>
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

export default Pronunciation