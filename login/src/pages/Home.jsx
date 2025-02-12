import ButtonSignOut from "../components/buttonSignOut/buttonSignOut";

function Home() {

    return (

        <>
            <div>
                <h1 className="text-[#ffff] text-6xl">Olá, fulano</h1>
            </div>

            <div className="fixed justify-center bottom-0 left-1/2 transform -translate-x-1/2 mb-10 text-center ">
                    <ButtonSignOut title={"Sair"} icon={ <i class="fa-solid fa-right-from-bracket"></i>} />
            </div>
        </>
    )

}
export default Home;