import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function TextareaField({
    label, name, value, handleChange, placeholder, required = true
}) {


    return (
        <div className='w-full'>
            <Label
                htmlFor={name}
                className={"texts-sm mb-2 flex items-center gap-2"}
            >{label}
                {required &&
                    <span className=' text-red-500 font-bold'>
                        *
                    </span>}
            </Label>
            <Textarea
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                required={required}
                className={"text-sm h-[150px]"}
            />
        </div>
    )
}
