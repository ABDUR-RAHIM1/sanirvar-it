import { Loader2 } from 'lucide-react'
import React from 'react'

export default function PageLoading() {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center'>
            <div className='text-center flex flex-col items-center gap-2'>
                <Loader2 className="h-8 w-8 animate-spin text-gray-600" />
                <p className="text-sm text-gray-500">Loading...</p>
            </div>
        </div>
    )
}
