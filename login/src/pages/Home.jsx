import {useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ButtonSignOut from "../components/buttonSignOut/buttonSignOut";
import { useNavigate } from "react-router-dom";
import '../styles/animation/style.css'


function Home() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);

    const handleLogOut = async () => {
        try {
            await logOut()
            navigate("/login");
        } catch (error) {
            throw new Error(error);
        }
    }

    return (
        <>
            <div>
                <h1 className="text-[#ffff] text-6xl animate-move-up">Olá, {user.userData.first_name}</h1>
            </div>

            <div className="fixed justify-center bottom-0 left-1/2 transform -translate-x-1/2 mb-10 text-center ">
                <ButtonSignOut title={"Sair"} onClick={handleLogOut} icon={<i className="fa-solid fa-right-from-bracket"></i>} />
            </div>
        </>
    )

}
export default Home;