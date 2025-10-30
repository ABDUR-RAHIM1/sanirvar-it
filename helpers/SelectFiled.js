import React from 'react'

export default function SelectFiled({
    label, name, options = [], defaultOption, value, handleChange
}) {
    return (
        <div className=' w-full text-sm'>
            <label htmlFor={name}>{label}</label>
            <select
                onChange={handleChange}
                name={name}
                id={name}
                value={value}
                className='w-full p-2 rounded-md border focus:outline-gray-300'>
                <option value="">
                    {
                        defaultOption || "বাছাই করুন"
                    }
                </option>
                {
                    options.map((op, i) => (
                        <option
                            key={i}
                            value={op}>
                            {op}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}
