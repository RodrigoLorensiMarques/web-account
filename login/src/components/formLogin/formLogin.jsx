import InputLogin from "../inputLogin/inputLogin";
import ButtonSubmit from "../buttonSubmit/buttonSubmit";
import {Link} from "react-router-dom";

function FormLogin() {
    
    return (
        <form action="" className="bg-red-100 rounded-xl">

            <div className="p-7">
                <h1
                    className="text-4xl mb-7 font-bold">
                    Login
                </h1>
                
                <div className="flex flex-col">
                    <InputLogin type={"text"} placeholder={"E-mail"}/>
                    <InputLogin type={"password"} placeholder={"Senha"} />
                </div>

                <a href="">Esqueci minha senha</a>

                <div>
                    <ButtonSubmit type={"submit"} title={"Acessar"} />
                </div>
            </div>

            
            <div className="w-full mt-8 bg-red-400 p-7 text-center rounded-b-xl">
                <p>Não tem uma conta? <Link to={"/cadastro"} className="font-bold ">Registre-se</Link></p>
            </div>

        </form>
    )
}
export default FormLogin;