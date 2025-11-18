import React from 'react'

const SelectInput = ({ label, name, value, options, onChange, className = "", disabled }) => {
    return (
        <div className="flex flex-col">
            <label className="block text-sp-bg1 text-base ">{label}</label>
            <select disabled={disabled} value={value} name={name} className={`${className} mt-1 block w-full text-sm bg-transparent border-sp-bg1/30 border-b p-2 outline-none pr-10 text-sp-bg1`} onChange={onChange}>
                <option className='text-sp-bg1' value="">Select {label.split("*")[0]}</option>
                {options.map((option, index) => (
                    <option className='text-sp-bg1' key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput