import React, { forwardRef } from "react";

const InputForm = forwardRef(({ type, placeholder, icon, onChange, hasError, value, ...rest }, ref) => {
  return (
    <div className="relative w-full">
      <span className={`absolute ml-5 mt-3 ${hasError ? "text-red-500" : "text-[#D4D6DF]"} `}>{icon}</span>
      <input
        type={type}
        ref={ref} 
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`border rounded-md p-3 pl-10 mb-5 w-full  duration-300  ${hasError? "border-red-500 focus:outline-red-500 text-red-500": "border-[#D4D6DF] focus:outline-[#1283fe] text-[#18204D]"}`}
        maxLength={30}
        {...rest}   
        />
    </div>
  );
});

export default InputForm;
