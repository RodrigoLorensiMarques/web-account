import InputForm from "../inputForm/inputForm";
import ButtonSubmit from "../buttonSubmit/buttonSubmit";
import {Link} from "react-router-dom";

function FormLogin() {
    
    return (
        <form action="" className="bg-[#ffffff] rounded-3xl">

            <div className="p-9">
                <h1
                    className="text-4xl mb-7 font-bold text-[#0B0F13]">
                    Login
                </h1>
                
                <div className="flex flex-col">
                    <InputForm type={"text"} placeholder={"Usuário"} icon={<i class="fa-solid fa-user"></i>}/>
                    <InputForm type={"password"} placeholder={"Senha"} icon={<i class="fa-solid fa-lock"></i>}/>
                </div>

                <Link to={"/"} className="font-bold text-[#0B0F13] outline-none">Esqueci minha senha</Link>

                <div className="mt-8">
                    <ButtonSubmit type={"submit"} title={"Acessar"} icon={<i class="fa-solid fa-chevron-right"></i>}/>
                </div>
            </div>

            
            <div className="w-full  bg-[#f5f7ff] p-7 text-center rounded-b-3xl">
                <p className="text-[#0B0F13]">Não tem uma conta? <Link to={"/cadastro"} className="font-bold text-[#1283fe] outline-none">Registre-se <i class="fa-solid fa-chevron-right"></i> </Link></p>
            </div>

        </form>
    )
}
export default FormLogin;