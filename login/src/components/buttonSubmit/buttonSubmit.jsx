function ButtonSubmit({type, title}) {
    
    return (
        <button
            className="border rounded-md p-2 w-full mt-8 font-bold bg-red-400"
            type={type}>
            {title}
        </button>
    )
}
export default ButtonSubmit;