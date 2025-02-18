import ButtonSubmit from "../buttonSubmit/buttonSubmit"
import { useNavigate } from "react-router-dom";


function RegisteredModal({ isOpen }) {
    const navigate = useNavigate();

    if (isOpen===true) {
        return (
            <div className="fixed top-0 bottom-0 right-0 left-0 bg-stone-500/50 z-1000">
                <div className=" bg-[#ffffff] fixed align-center top-1/3  left-1/2  -translate-x-1/2 -translate-y-1/2  p-9 rounded-3xl w-xl">
                    
                    <div className="text-8xl text-center text-emerald-500">
                        <i className="fa-solid fa-circle-check"></i>
                    </div>
                
                    <h1 className="mt-5 text-4xl mb-7 font-bold text-[#0B0F13]">Que legal! Sua conta foi criada com <span className="text-[#1283fe]">sucesso!</span></h1>

                    <p className="text-[#0B0F13] mt-10">Agora você já pode acessar a sua conta.</p>

                    <div className="mt-10">
                        <ButtonSubmit
                            onClick={ () => navigate("/login")}
                            title={"Acessar conta"}
                            bgColor={"#1283fe"}
                            color={"#ffff"}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default RegisteredModal