
function Header() {
    return(
<nav className="navbar bg-gray-700">
        <div className="flex justify-between w-full p-4 items-center">
            
            <div className="flex items-center gap-2">
                <img src="caminho/para/logo.png" alt="IMAGEM"/>
                <span className="text-white text-2xl">Beicinho Lanches</span>
            </div>
            
            <div className="flex justify-between gap-2 w-[500px]">
                <input 
                    type="search" 
                    placeholder="Digite aqui..."
                    class="
                        w-full
                        px-4 py-2
                        text-gray-700
                        bg-white
                        border-2 border-gray-400
                        rounded-lg
                        focus:outline-none
                        focus:border-blue-600" ></input>
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
