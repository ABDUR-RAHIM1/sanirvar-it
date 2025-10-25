import React from 'react'

export default function NotFound({ text }) {
    return (
        <div className='w-full h-screen p-10'>
            {
                text || "Not found!"
            }
        </div>
    )
}
