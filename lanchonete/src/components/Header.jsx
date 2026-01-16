import {useCart} from "../context/CartContext.jsx";
function Header() {
    const {getTotalItems} = useCart();
    return(
<nav className="navbar bg-gray-700">
        <div className="flex justify-between w-full p-2 items-center">
            
            <div className="flex items-center gap-2">
                <img src="/assets/images/image.png"alt="logo-beicinho" className="w-20"/>
                <span className="text-white text-2xl"></span>
            </div>
            
            <div className="flex justify-between w-125 overflow-hidden rounded-lg">
                <input 
                    type="search" 
                    placeholder="Digite aqui..."
                    className="
                        w-full
                        pl-3
                        text-gray-700
                        bg-white
                         border-gray-400
                         focus:outline-none
                       "></input>
                <button className="border-purple-200 bg-blue-600  px-3 py-1 hover:bg-blue-500 text-white" type="submit">Buscar</button>
            </div>
            
            <div className="flex gap-3">
                <a href="#sobre" className="text-decoration-none">Sobre</a>
                <a href="#fale-conosco" className="text-decoration-none">Fale Conosco</a>
                <div className="flex">
                                    <button command="show-modal" commandfor="drawer" >{<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
}</button>
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs cursor-default">{getTotalItems()}</span>
                </div>
            </div>

        </div>
        
</nav>
            
    )
}

export default Header;
