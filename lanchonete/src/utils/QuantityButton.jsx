import { useState } from "react";

function ProductQuantityButton({
  quantity = 1,
  onQuantityChange,
  size = "default",
  sizeBtn = "default",
  sizeInput = "default",
}) {
  //Removido pois componente dinamico em props não pode ter contexto individual - O pai deve controlar
  // const [quantity, setquantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    const quantity = Math.max(1, Math.min(99, parseInt(newQuantity) || 1)); //evita o usuário de comprar mais de 99 hamburger ?? ta chamando ele de pobre? sim
    onQuantityChange(quantity); //emite sinal para o componente pai (onde for chamado)
  };

  const sizeClasses = {
    small: "w-24 h-8",
    default: "w-32 h-10",
    large: "w-40 h-12",
  };

  const buttonSizeClasses = {
    small: "text-sm w-0.4",
    default: "text-base px-3",
    large: "text-lg px-4",
  };

  const inputSizeClasses = {
    small: "w-8 text-sm",
    default: "w-12 text-base",
    large: "w-16 text-lg",
  };

  return (
    <div
      className={`flex text-black w-1/2 border-1 border-gray-400 rounded-2xl overflow-hidden max-h-12 ${sizeClasses[size]}`}
    >
      <button
        onClick={() => handleQuantityChange(quantity - 1)}
        type="button"
        className={`flex-1 bg-gray-100 hover:bg-white font-bold flex justify-center items-center ${buttonSizeClasses[sizeBtn]}`}
        disabled={quantity <= 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3 sm:w-5 sm:h-5 md:w-5 md:h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
      </button>
      <input
        min="1"
        type="text"
        inputMode="numeric"
        value={quantity}
        onChange={(e) => handleQuantityChange(e.target.value)}
        className={`text-center py-2 border-x-1 border-gray-400 
             focus:outline-none [-moz-appearance:textfield] ${inputSizeClasses[sizeInput]}`}
      />
      <button
        onClick={() => handleQuantityChange(quantity + 1)}
        type="button"
        className={`flex-1 font-bold bg-gray-100 hover:bg-white flex justify-center items-center ${buttonSizeClasses[sizeBtn]}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3 sm:w-5 sm:h-5 md:w-5 md:h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}

export default ProductQuantityButton;
