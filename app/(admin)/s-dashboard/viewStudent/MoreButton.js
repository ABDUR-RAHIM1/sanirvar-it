"use client"
import { Button } from '@/components/ui/button'
import { demoStudents } from '@/localDatabase/dummyStudents';
import { MoreHorizontal } from 'lucide-react';
import React from 'react'

export default function MoreButton({studentId}) {

    const handleMore = (id) => {
        const student = demoStudents.find((s) => s.id === studentId);
        alert(`
Name: ${student.name}
Father: ${student.fathersName}
Mother: ${student.mothersName}
DOB: ${student.dateOfBirth}
Gender: ${student.gender}
Phone: ${student.phone}
Guardian: ${student.guardianPhone}
Email: ${student.email}
Address: ${student.address}
Payment: ${student.paymentStatus}
    `);
    };


    return (
        <Button
            size="sm"
            variant="outline"
            onClick={handleMore}
        >
            <MoreHorizontal size={16} />
        </Button>
    )
}
