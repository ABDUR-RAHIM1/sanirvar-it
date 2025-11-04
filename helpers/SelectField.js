import React from 'react'

export default function SelectField({
    label, name, options = [], defaultOption, value, required = true, handleChange, disabled = false
}) {

    return (
        <div className=' w-full text-sm'>
            <label
                htmlFor={name}
                className={"text-sm mb-1 font-medium flex items-center capitalize"}
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
                disabled={disabled}
                className='w-full p-2 rounded-md border focus:outline-gray-300'>
                <option value="">
                    {
                        defaultOption || "Choose One"
                    }
                </option>
                {
                    options.map((op, i) => (
                        <option
                            key={op.name || i}
                            value={op.value}>
                            {op.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}
