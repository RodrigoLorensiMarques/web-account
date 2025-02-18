import InputForm from "../inputForm/inputForm";
import ButtonSubmit from "../buttonSubmit/buttonSubmit";
import {registerUser} from "../../services/api"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";


function FormRegister() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [userUnavailable, setUserUnavailable] = useState(false);

    const handleRegister = async (dados) => {
        try {
            console.log(dados)
            const response = await registerUser(dados);

            console.log(response);

            if (response.status != 200)
                setUserUnavailable(true);

            else
                setUserUnavailable(false);


        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
    }, [userUnavailable]);

    return (
        <form onSubmit={handleSubmit(handleRegister)} className="bg-[#ffffff] rounded-3xl">
            
            <div className=" p-9">
                <h1
                    className="text-4xl mb-7 font-bold text-[#0B0F13]">
                    Cadastro
                </h1>

                <div>
                    <div className="flex gap-5">
                    <InputForm placeholder={"Primeiro Nome"} {...register("firstName", { required: true })} hasError={!!errors.firstName } />
                        <InputForm placeholder={"Sobrenome"} {...register("lastName", { required: true })} hasError={!!errors.lastName }/>
                    </div>
                
                    <InputForm placeholder={"Nome de Usuário"} icon={<i className="fa-solid fa-at"></i>} {...register("name", { required: true })} hasError={!!errors.name }/>
                    <InputForm placeholder={"E-mail"} icon={<i className="fa-solid fa-envelope"></i>} {...register("email", { required: true })} hasError={!!errors.email }/>
                <InputForm placeholder={"Senha"} type={"password"} icon={<i className="fa-solid fa-lock"></i>} {...register("password", { required: true })} hasError={!!errors.password }/>
                </div>

                <div className="text-center">
                    <ButtonSubmit type={"submit"} title={"Ciar conta"} bgColor={"#1283fe"} color={"#ffff"}/>
                {(errors?.name?.type === 'required' || errors?.password?.type === 'required' || errors?.firstName?.type === 'required'|| errors?.lastName?.type === 'required' || errors?.email?.type === 'required') && <p className="mt-5 text-red-500">Preencha todos os campos</p>}
                {userUnavailable === true ? <p className="mt-5 text-red-500">Usuário Indisponível</p>: null}
                </div>
            </div>
        
            <div className="w-full  bg-[#f5f7ff] p-7 text-center rounded-b-3xl">
                <p className="text-[#0B0F13]">Já tem uma conta? <Link to={"/"} className="font-bold text-[#1283fe] outline-none">Faça o login<i className="fa-solid fa-chevron-right"></i> </Link></p>
            </div>
        </form>
    )
}

export default FormRegister;