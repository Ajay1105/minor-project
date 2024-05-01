"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

interface Props {
    handleSubmit: (e: any) => void
}

const Form = (props: Props) => {
    const [text, setText] = useState("")
    return (
        <form className='flex flex-col p-5 items-center' onSubmit={(e) => {
            e.preventDefault();
            props.handleSubmit(text)
        }}>
            <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} className="w-3/4 p-2 mb-5 border-2 border-gray-300 rounded-lg text-black" placeholder='Enter text' />
            <Button size="lg" variant="secondary" className="w-[50%]" type='submit'>
                Pronunce
            </Button>
        </form>
    )
}

export default Form