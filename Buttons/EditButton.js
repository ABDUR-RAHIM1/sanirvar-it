import { Button } from '@/components/ui/button'
import { Edit } from 'lucide-react'
import React from 'react'

export default function EditButton() {
    return (
        <Button
            size="sm"
            variant="outline"
        // onClick={() => handleEdit(student.id)}
        >
            <Edit size={16} />
        </Button>
    )
}
