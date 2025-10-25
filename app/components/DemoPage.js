import React from 'react'

export default function DemoPage({ text }) {
    return (
        <div className='w-full h-screen text-2xl p-10'>
            {
                text || "কাজ চলতেছে "
            }
        </div>
    )
}
