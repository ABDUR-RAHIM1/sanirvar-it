"use client"
import { Button } from '@/components/ui/button' 
import { EyeIcon } from 'lucide-react';
import React from 'react'

export default function MoreButton({ studentData }) {

    const handleMore = () => {
        const student = studentData;
        alert(`
Name: ${student.studentName}
Father: ${student.fatherName}
Mother: ${student.motherName}
DOB: ${student.dob}
Gender: ${student.gender}
Phone: ${student.mobileNo}
Guardian: ${student.guardianMobileNo}
Email: ${student.email}
Village: ${student.vill}
Upozila: ${student.upozila}
    `);
    };


    return (
        <Button
            size="sm"
            variant="outline"
            onClick={handleMore}
        >
            <EyeIcon size={16} />
        </Button>
    )
}
