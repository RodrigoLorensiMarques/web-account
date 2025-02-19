import InputForm from "../inputForm/inputForm";
import ButtonSubmit from "../buttonSubmit/buttonSubmit";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import '../../styles/animation/style.css'

function FormLogin() {
    const [error, setError] = useState("");
    const [userInvalid, setUserInvalid] = useState(false);
    
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const handleLogin = async (data) => {
        try {
            const response = await login(data.username, data.password);

            if (response === 400)
            {
                setUserInvalid(true);
                return
            }

            setUserInvalid(false);
            navigate("/home");

        } catch (error) {
            setError(error);
        }
    };
    useEffect(() => {
    }, [userInvalid]);


    return (
        <form  onSubmit={handleSubmit(handleLogin)} className="bg-[#ffffff] rounded-3xl animate-move-up">
            
            <div className="p-9">
                <h1
                    className="text-4xl mb-7 font-bold text-[#0B0F13]">
                    Login
                </h1>
                
                <div className="flex flex-col">
                    <InputForm type={"text"}  placeholder={"Usuário"} icon={<i className="fa-solid fa-user"></i>} hasError={!!errors.username} {...register("username", { required: true })} />
                    <InputForm isPassword={true} type={"password"}  placeholder={"Senha"} icon={<i className="fa-solid fa-lock"></i>} hasError={!!errors.password} {...register("password", {required:true})}/>
                </div>

                <Link to={"/"} className="font-bold text-[#0B0F13] outline-none">Esqueci minha senha</Link>

                <div className="mt-8 text-center" >
                    <ButtonSubmit type={"submit"} title={"Acessar"} bgColor={"#1283fe"} color={"#ffff"}  icon={<i className="fa-solid fa-chevron-right"></i>} />
                    {(errors?.username?.type === 'required' || errors?.password?.type === 'required') && <p className="mt-5 text-red-500 animate-move-up">Preencha todos os campos</p>}
                    {userInvalid === true ? <p className="mt-5 text-red-500 animate-move-up">Credenciais incorretas ou usuário inválido</p>: null}
                </div>
            </div>

            <div className="w-full  bg-[#f5f7ff] p-7 text-center rounded-b-3xl">
                <p className="text-[#0B0F13]">Não tem uma conta? <Link to={"/cadastro"} className="font-bold text-[#1283fe] outline-none">Registre-se <i className="fa-solid fa-chevron-right"></i> </Link></p>
            </div>
        </form>
    )
}
export default FormLogin;