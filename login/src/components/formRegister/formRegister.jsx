import InputForm from "../inputForm/inputForm";
import ButtonSubmit from "../buttonSubmit/buttonSubmit";
import {Link} from "react-router-dom"


function FormRegister() {
    return (

            <form action="" className="bg-[#ffffff] rounded-3xl">
                
                <div className=" p-9">
                    <h1
                        className="text-4xl mb-7 font-bold text-[#0B0F13]">
                        Cadastro
                    </h1>
    

                    <div>
                        <div className="flex gap-5">
                            <InputForm placeholder={"Primeiro Nome" } />
                            <InputForm placeholder={"Sobrenome"} />
                        </div>
                    
                        <InputForm placeholder={"Nome de Usuário"} icon={<i className="fa-solid fa-at"></i>}/>
                        <InputForm placeholder={"E-mail"} icon={<i className="fa-solid fa-envelope"></i>} />
                    <InputForm placeholder={"Senha"} type={"password"} icon={<i className="fa-solid fa-lock"></i>} />
                    </div>

                    <div>
                        <ButtonSubmit title={"Ciar conta"} bgColor={"#1283fe"} color={"#ffff"}/>
                    </div>
                </div>
            
                <div className="w-full  bg-[#f5f7ff] p-7 text-center rounded-b-3xl">
                    <p className="text-[#0B0F13]">Já tem uma conta? <Link to={"/"} className="font-bold text-[#1283fe] outline-none">Faça o login<i className="fa-solid fa-chevron-right"></i> </Link></p>
                </div>
            </form>
    )
}

export default FormRegister;