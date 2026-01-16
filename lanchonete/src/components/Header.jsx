
function Header() {
    return (
        <nav className="navbar bg-gray-700">
            <div className="flex justify-between w-full p-2 items-center">

                <div className="flex items-center gap-2">
                    <img src="/assets/images/image.png" alt="logo-beicinho" className="w-20" />
                    <span className="text-white text-2xl">Beicinho Lanches</span>
                </div>

                <div className="flex justify-between gap-2 w-125">
                    <input
                        type="search"
                        placeholder="Digite aqui..."
                        className="
                        w-full
                        pl-3
                        text-gray-700
                        bg-white
                        border-gray-400
                        rounded-2xl
                        focus:outline-none
                        focus:border-purple-600" ></input>
                    <button className="border-purple-200 bg-blue-600 rounded-3 px-3 py-1 hover:bg-blue-500 text-white" type="submit">Buscar</button>
                </div>

                <div className="flex gap-3">
                    <a href="#sobre" className="">Sobre</a>
                    <a href="#fale-conosco" className="">Fale Conosco</a>
                </div>

            </div>

        </nav>

    )
}

export default Header;
