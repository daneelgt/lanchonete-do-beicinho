import "../App.css"
function Header() {
    return(
<<<<<<< Updated upstream
      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
=======
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
            
      

>>>>>>> Stashed changes
    )
}

export default Header;
