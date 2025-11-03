import React from 'react'

export default function SelectFiled({
    label, name, options = [], defaultOption, value, required = true, handleChange
}) {
 
    return (
        <div className=' w-full text-sm'>
            <label
                htmlFor={name}
                className={"texts-sm mb-2 font-medium flex items-center gap-2 capitalize"}
            >{label}
                {required &&
                    <span className=' text-red-500 font-bold'>
                        *
                    </span>}
            </label>
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
                            key={op.name || i}
                            value={op.name}>
                            {op.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}
