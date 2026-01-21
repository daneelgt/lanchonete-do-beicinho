import { useCart } from "../context/CartContext.jsx";
import { MoneyFormatter } from "../utils/MoneyFormatter.jsx";
function Header() {
  const { getTotalItems, getTotal } = useCart();
  return (
    <nav className="grid grid-cols-3 flex items-center p-3 bg-amber-500">
      {/* Logo.icon*/}
      <div className="flex items-center gap-2 ">
        <img
          src="/assets/images/image.png"
          alt="logo-beicinho"
          className="max-h-30"
        />
        <span className="text-white text-2xl"></span>
      </div>

      {/* Pesquisar */}
      <div class="w-full">
        <div class="relative mt-2">
          <div class="absolute top-1 left-1 flex items-center">
            <div
              id="dropdownMenu"
              class=" overflow-hidden absolute left-0 mt-10 hidden w-full bg-white border border-slate-200 rounded-md shadow-lg z-10"
            ></div>
          </div>
          <input
            type="search"
            class="w-full bg-white text-gray-500 rounded-4xl pr-12 pl-5 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow"
            placeholder="Pesquisar..."
          />
          <button
            class="absolute right-1 top-1 rounded p-1.5 text-center text-sm transition-all "
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              class="w-13 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Sobre e Fale Conosco */}
      <div className="flex gap-3 items-center justify-end">
        <a href="#sobre" className="text-decoration-none">
          Sobre
        </a>
        <a href="#fale-conosco" className="text-decoration-none">
          Fale Conosco
        </a>

        {/* Modal.Pedido */}

        <button
          command="show-modal"
          commandfor="drawer"
          className="flex gap-3 rounded-5 px-4 py-1 items-center hover:bg-neutral-300/40 transition delay-150 duration-600"
        >
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 25"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          }
          <div className="flex flex-col">
            <span className="text-xs">{getTotalItems()} itens</span>
            <div className="flex gap-1">
              R$:
              <span className="">
                <MoneyFormatter amount={getTotal()} />
              </span>
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
}

export default Header;
