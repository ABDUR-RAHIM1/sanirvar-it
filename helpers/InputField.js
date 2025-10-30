import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function InputField({
    label, type = "text", name, value, handleChange, placeholder, required = true
}) {


    return (
        <div className='w-full'>
            <Label
                htmlFor={name}
                className={"texts-sm mb-2"}
            >{label}</Label>
            <Input
                type={type}
                id={name}
                name={name}
                value={value || ""}
                onChange={handleChange}
                placeholder={placeholder}
                required={required}
                className={"text-sm"}
            />
        </div>
    )
}
