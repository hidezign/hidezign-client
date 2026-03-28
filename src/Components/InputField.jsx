// /* eslint-disable react/prop-types */
// import { useState } from "react";
// import { IoEyeOffOutline, IoEyeSharp } from "react-icons/io5";

// const InputField = ({
//     label,
//     name,
//     value,
//     onChange,
//     placeholder,
//     type = "text",
//     maxLength,
//     minLength,
//     error,
//     accept,
//     disabled,
//     className = "",
//     classes = "",
// }) => {
//     const [showPassword, setShowPassword] = useState(false);

//     const handleToggle = () => {
//         setShowPassword(!showPassword);
//     };

//     return (
//         <div className={`relative text-sp-bg1 ${classes}`} >
//             <label className="block text-base text-sp-bg1 ">{label}</label>
//             <div className="relative">
//                 <input
//                     min={minLength}
//                     placeholder={placeholder || label}
//                     type={type === "password" && showPassword ? "text" : type}
//                     name={name}
//                     value={type === "file" ? undefined : value}
//                     onChange={onChange}
//                     maxLength={maxLength}
//                     minLength={minLength}
//                     accept={accept}
//                     disabled={disabled}
//                     className={`mt-1 block w-full text-sp-bg1 ${type === "text" ? "text-sm" : "text-sm"} bg-transparent placeholder:text-sp-bg1/70 border-b border-sp-bg1/30 p-2 outline-none  transition-all duration-300 
//                     ${error ? "border-b-red-500" : ""}
//                     ${disabled ? "bg-transparent cursor-not-allowed opacity-60" : ""}
//                     ${className}
//                 `}
//                 />
//                 {type === "password" && (
//                     <span
//                         // type="button"
//                         onClick={handleToggle}
//                         className="absolute right-2 top-0 transform -translate-x-1/2 translate-y-1/2 text-gray-500 hover:text-gray-700"
//                     >
//                         {showPassword ? <IoEyeSharp /> : <IoEyeOffOutline />}
//                     </span>
//                 )}
//             </div>

//             {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
//         </div>
//     );
// };

// export default InputField;

import { useState } from "react";
import { IoEyeOffOutline, IoEyeSharp } from "react-icons/io5";

const InputField = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    as = "input", // 👈 NEW PROP — input / textarea
    maxLength,
    minLength,
    error,
    accept,
    disabled,
    className = "",
    classes = "",
    rows = 4,
    showCount = true,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleToggle = () => setShowPassword(!showPassword);

    const commonProps = {
        name,
        placeholder: placeholder || label,
        value: type === "file" ? undefined : value,
        onChange,
        maxLength,
        minLength,
        accept,
        disabled,
        className: `mt-1 block w-full text-sp-bg1 bg-transparent placeholder:text-sp-bg1/70 border-b border-sp-bg1/30 p-2 outline-none transition-all duration-300
        ${error ? "border-b-red-500" : ""}
        ${disabled ? "bg-transparent cursor-not-allowed opacity-60" : ""}
        ${className}`,
    };

    return (
        <div className={`relative text-sp-bg1 ${classes}`}>
            <label className="block text-base text-sp-bg1">{label}</label>
            <div className="relative">

                {as === "textarea" ? (
                    <textarea
                        {...commonProps}
                        rows={rows}
                    />
                ) : (
                    <>
                            <input
                                {...commonProps}
                                type={type === "password" && showPassword ? "text" : type}
                            />
                            {type === "password" && (
                                <span
                                    onClick={handleToggle}
                                    className="absolute right-2 top-0 transform -translate-x-1/2 translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                                >
                                    {showPassword ? <IoEyeSharp /> : <IoEyeOffOutline />}
                                </span>
                            )}
                        </>
                )}
            </div>

            {as === "textarea" && maxLength && showCount && (
                <div className="text-xs text-sp-bg1/60 mt-1 text-right">
                    {value?.length || 0}/{maxLength}
                </div>
            )}

            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
};

export default InputField;
