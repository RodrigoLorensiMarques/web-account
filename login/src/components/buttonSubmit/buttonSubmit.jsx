function ButtonSubmit({type, title, icon, bgColor, color, onClick}) {
    const style = {
        backgroundColor: bgColor,
        color: color,
    };
    
    return (
        <button style={style}
            className={` rounded-md p-3 w-full font-bold cursor-pointer hover:opacity-80 duration-300 outline-none`}
            onClick={onClick}
            type={type}>
            {title}
            <span className="ml-2">{icon}</span>
        </button>
    )
}
export default ButtonSubmit;