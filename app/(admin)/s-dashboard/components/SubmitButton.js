'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function SubmitButton({ text = "সাবমিট করুন", loading = false }) {
    return (
        <Button type={"submit"} className={" my-4 w-full cursor-pointer rounded-full text-sm bg-blue-500 text-white hover:bg-blue-600"}>
            {
                loading ? "...." : text
            }
        </Button>
    )
}
