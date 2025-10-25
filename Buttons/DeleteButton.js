"use client"
import { deleteAction } from '@/actions/deleteAction';
import { Button } from '@/components/ui/button'
import { globalContext } from '@/ContextApi/ContextApi';
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'

export default function DeleteButton({ deleteRoute }) {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)
    const { showToast } = useContext(globalContext)

    const handleDelete = async () => {

        const access = confirm("আপনি কি ডিলিট করতে চান?");
        if (!access) {
            return
        }

        setIsLoading(true)
        try {
            const { status, data } = await deleteAction(deleteRoute);
            console.log(data)
            showToast(status, data)
            router.refresh()

        } catch (error) {
            console.log(error)
            showToast(500, "Failed To Delete!")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Button
            size="sm"
            variant="destructive"
            onClick={handleDelete}
        >
            {
                isLoading ? ".." : <Trash2 size={16} />
            }
        </Button>
    )
}
