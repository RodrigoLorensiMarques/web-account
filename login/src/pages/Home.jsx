import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ButtonSignOut from "../components/buttonSignOut/buttonSignOut";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    const { logOff } = useContext(AuthContext);

    const handleLogOff = async () => {
        try {
            await logOff()
            navigate("/");
        } catch (error) {
            throw new Error(error);
        }
    }

    return (

        <>
            <div>
                <h1 className="text-[#ffff] text-6xl">Olá, fulano</h1>
            </div>

            <div className="fixed justify-center bottom-0 left-1/2 transform -translate-x-1/2 mb-10 text-center ">
                <ButtonSignOut title={"Sair"} onClick={handleLogOff} icon={<i class="fa-solid fa-right-from-bracket"></i>} />
            </div>
        </>
    )

}
export default Home;