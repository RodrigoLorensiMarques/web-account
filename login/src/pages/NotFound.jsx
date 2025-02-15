import ButtonSubmit from "../components/buttonSubmit/buttonSubmit.jsx";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="text-center">
            <h1 className="text-9xl mb-3 font-bold text-[#ffff]">
                404
            </h1>
            <p className="text-[#ffff] text-xl">Ops! Página não encontrada <strong>:/</strong></p>

            <div className="mt-15">
                <ButtonSubmit
                    onClick={ () => navigate("/home")}
                    title={"Ir para home"}
                    bgColor={"#ffff"}
                    color={"#626f7c"}
                />
            </div>
            
        </div>
    )
}
export default NotFound;