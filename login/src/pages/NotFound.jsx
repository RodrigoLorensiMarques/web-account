import ButtonSubmit from "../components/buttonSubmit/buttonSubmit.jsx";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="text-4xl mb-3 font-bold text-[#ffff]">
                404
            </h1>
            <p className="text-[#ffff] text-xl">Ops! Página não encontrada</p>

            <div className="mt-15">
                <ButtonSubmit
                        onClick={ () => navigate("/home")}
                        title={"Ir para home"}
                        bgColor={"#ffff"}
                        color={"#626f7c"}
                        bgHover={"gray-100"}
                />
            </div>
            
        </div>
    )
}
export default NotFound;