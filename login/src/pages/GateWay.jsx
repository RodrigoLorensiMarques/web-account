import ButtonSubmit from "../components/buttonSubmit/buttonSubmit";
import { useNavigate } from "react-router-dom";

function GateWay() {
    const navigate = useNavigate();


    return (
        <div className="rounded-3xl w-md  p-9  text-center">

            <div className="mb-15">
                <h1 className="text-4xl mb-3 font-bold text-[#ffff]">
                    Seja Bem Vindo
                </h1>
                <p className="text-[#ffff] text-xl">Vamos começar?</p>
            </div>

            <div className=" flex flex-col gap-3">
                <ButtonSubmit
                    onClick={ () => navigate("/cadastro")}
                    title={"Criar uma conta"}
                    bgColor={"#ffff"}
                    color={"#626f7c"}
                />
                <ButtonSubmit
                    onClick={ () => navigate("/login")}
                    title={"Já tenho uma conta"}
                    bgColor={"#D4D6DF"}
                    color={"#626f7c"}
                />
            </div>
        </div>
    )
} 
export default GateWay;