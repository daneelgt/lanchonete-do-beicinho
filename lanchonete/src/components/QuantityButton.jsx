import { useState } from "react";
import { useCart } from "../context/CartContext";
export default function ProductQuantityButton({
  product,
  initialQuantity = 1,
  onQuantityChange,
  size = "default",
  sizeBtn="default",
  sizeInput="default"
}) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const { updateQuantity } = useCart();

  const handleQuantityChange = (newQuantity) => {
    const validQuantity = Math.max(1, newQuantity);
    setQuantity(validQuantity);
    updateQuantity(product.id, validQuantity);
    onQuantityChange(validQuantity);
  };

  const sizeClasses = {
    small: "w-24 h-8",
    default: "w-32 h-10",
    large: "w-40 h-12",
  };

const buttonSizeClasses = {
  small: "text-sm w-0.4",
  default: "text-base px-3",
  large: "text-lg px-4"
};
const inputSizeClasses = {
  small: "w-8 text-sm",
  default: "w-12 text-base",
  large: "w-16 text-lg"
};
  return (
    <div
      className={`flex text-black w-1/2 border-1 border-gray-400 rounded-2xl overflow-hidden max-h-12 ${sizeClasses[size]}`}
    >
      <button
        onClick={() => handleQuantityChange(quantity - 1)}
        type="button"
        className={`flex-1 font-bold flex justify-center items-center ${buttonSizeClasses[size]}`}
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
        type="number"
        value={quantity}
        onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
        className={`text-center py-2 border-x-1 border-gray-400 
             focus:outline-none [-moz-appearance:textfield] ${inputSizeClasses[size]}`}
        min="1"
      />
      <button
        onClick={() => handleQuantityChange(quantity + 1)}
        type="button"
        className={`flex-1 font-bold flex justify-center items-center ${buttonSizeClasses[size]}`}
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
// import { useState } from "react";

// export default function ProductQuantityButton({item}) {
//   const [quantity, setQuantity] = useState(1);

//   return (
//     <div className=" flex text-black w-1/2 border-1 border-gray-400 rounded-2xl overflow-hidden max-h-12">

//       <button
//         onClick={() => setQuantity(Math.max(1, quantity - 1))}
//         type="button"
//         className="flex-1 bg-green-200 font-bold"
//       >
//         -
//       </button>
//       <input
//         type="number"
//         value={quantity}
//         onChange={(e) =>
//           setQuantity(Math.max(1, parseInt(e.target.value) || 1))
//         }
//         className="flex-1 text-center max-w-15 py-2 border-x-1 border-gray-400 focus:outline-none
//                [-moz-appearance:textfield]
//              "
//         min="1"
//       />
//       <button
//         onClick={() => setQuantity(quantity + 1)}
//         type="button"
//         className="flex-1 bg-green-200 font-bold "
//       >
//         +
//       </button>
//     </div>
//   );
// }
