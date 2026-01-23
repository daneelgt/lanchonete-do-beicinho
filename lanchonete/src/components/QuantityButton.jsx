import { useCallback, useState } from "react";
import React, { memo } from "react";
import { useCart } from "../context/CartContext";

function ProductQuantityButton({
  product,
  quantity: propQuantity,
  onQuantityChange,
  size = "default",
  sizeBtn = "default",
  sizeInput = "default",
}) {
  const [localQuantity, setLocalQuantity] = useState(propQuantity);
  const { updateQuantity } = useCart();

  const handleQuantityChange = useCallback(
    (newQuantity) => {
      const parsedQuantity = parseInt(newQuantity);
      if (isNaN(parsedQuantity) || parsedQuantity < 1) {
        return;
      }

      const validQuantity = Math.min(parsedQuantity, 99);

      // Atualiza estado local
      setLocalQuantity(validQuantity);

      // Atualiza no carrinho
      updateQuantity(product.id, validQuantity);

      // Notifica componente pai
      onQuantityChange?.(validQuantity);
    },
    [product.id, updateQuantity, onQuantityChange],
  );

  // Sincroniza estado local quando propQuantity mudar externamente
  React.useEffect(() => {
    setLocalQuantity(propQuantity || 1);
  }, [propQuantity, product.id]);

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
        onClick={() => handleQuantityChange(localQuantity - 1)}
        type="button"
        className={`flex-1 bg-gray-100 hover:bg-white font-bold flex justify-center items-center ${buttonSizeClasses[sizeBtn]}`}
        disabled={localQuantity <= 1}
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
        value={localQuantity}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "");
          const numValue = parseInt(value) || 1;
          if (numValue >= 1 && numValue <= 99) {
            handleQuantityChange(numValue);
          }
        }}
        className={`text-center py-2 border-x-1 border-gray-400 
             focus:outline-none [-moz-appearance:textfield] ${inputSizeClasses[sizeInput]}`}
      />
      <button
        onClick={() => handleQuantityChange(localQuantity + 1)}
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

export default memo(ProductQuantityButton);
