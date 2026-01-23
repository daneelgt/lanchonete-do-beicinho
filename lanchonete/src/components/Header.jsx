import { useCart } from "../context/CartContext.jsx";
import { MoneyFormatter } from "../utils/MoneyFormatter.jsx";
import ModalCart from "./Cart.jsx";
import { useState } from "react";

function Header() {
  const { getTotalItems, getTotal } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="h-35 p-3 sticky top-0 z-10 grid grid-cols-3 items-center bg-gray-100 shadow-md">
      {/* Logo.icon*/}
      <div className="flex items-center gap-2 ">
        <img
          src="/assets/images/image.png"
          alt="logo-beicinho"
          className="max-h-27"
        />
      </div>

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
      {/* command="show-modal"
          commandfor="drawer" */}
      <div className="flex gap-3 items-center justify-end ">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex gap-1 rounded-5 px-4 py-1 items-center hover:bg-gray-300/50 transition delay-30 duration-600 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
            />
          </svg>

          <div className="flex flex-col">
            <span className="text-xs">{getTotalItems()} itens</span>
            <div className="flex gap-1">
              R$
              <span className="">
                <MoneyFormatter amount={getTotal()} />
              </span>
            </div>
          </div>
        </button>
      </div>
      <ModalCart isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
}

export default Header;
