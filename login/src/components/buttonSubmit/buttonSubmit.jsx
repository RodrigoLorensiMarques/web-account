function ButtonSubmit({type, title, icon, bgColor, color, bgHover, onClick}) {
    
    return (
        <button
            className={` rounded-md p-3 w-full font-bold bg-[${bgColor}] text-[${color}] cursor-pointer hover:bg-${bgHover} duration-300 outline-none`}
            onClick={onClick}
            type={type}>
            {title}
            <span className="ml-2">{icon}</span>
        </button>
    )
}
export default ButtonSubmit;