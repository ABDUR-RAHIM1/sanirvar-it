"use client"
import { Button } from '@/components/ui/button'
import { globalContext } from '@/ContextApi/ContextApi'
import { Edit } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

export default function EditButton({ data, route }) {

    const { setEditData } = useContext(globalContext);

    const router = useRouter();

    const handleNaviagte = () => {

        setEditData(data);
        router.push(route)

    }


    return (
        <Button
            type={"button"}
            size="sm"
            variant="outline"
            onClick={handleNaviagte}
        >
            <Edit size={16} />
        </Button>
    )
}
