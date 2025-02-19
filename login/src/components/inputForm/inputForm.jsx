import React, { forwardRef } from "react";
import { useState } from "react";

const InputForm = forwardRef(({ type, placeholder, icon, onChange, isPassword, hasError, value, ...rest }, ref) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  }

  if (isPassword) {
    if (isShowPassword) {
        type="text"
    }

    else {
      type="password"
    }
  }
  
  
  return (
    <div className="relative w-full">
      <span className={`absolute ml-5 mt-3 ${hasError ? "text-red-500" : "text-[#D4D6DF]"} `}>{icon}</span>
      {isPassword===true? <button type="button" onClick={handleShowPassword} className={`absolute ml-100 mt-3 outline-none ${hasError ? "text-red-500" : "text-[#D4D6DF]"}`}>{isShowPassword === true? <i class="fa-solid fa-eye"></i> : <i class="fa-solid fa-eye-slash"></i>}</button> : null}
      
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
