function ButtonSignOut({type, title,icon,onClick}) {
    
    return (
        <button
        className=" rounded-md p-3 w-30 font-bold bg-[#1283fe] text-[#ffffff] cursor-pointer hover:bg-sky-500 duration-300 outline-none"
        onClick={onClick}
        type={type}>    
        {title}
        <span className="ml-2">{icon}</span>
    </button>
    )
}
export default ButtonSignOut;