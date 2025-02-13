function InputForm({type, placeholder, icon, onChange, value}) {
    
    return (
        <div className="relative w-full">
            <span className="absolute ml-5 mt-3 text-[#D4D6DF]">{icon}</span>
            
            <input
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className="border rounded-md p-3 pl-10 mb-5 border-[#D4D6DF]  w-full text-[#18204D]  duration-300  focus:outline-[#1283fe]"
                maxLength={30}
            />
        </div>
)

}
export default InputForm;