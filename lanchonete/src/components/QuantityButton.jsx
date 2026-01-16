import { useCart } from "../context/CartContext";
import { useState } from "react";
export default function ProductQuantityButton({ item }) {
  const { updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(item.id, newQuantity);
  };

  return (
    // <div>
    //   <input
    //     className="text-black max-w-10 focus:outline-none"
    //     type="number"
    //     value={item.quantity}
    //     onChange={handleQuantityChange}
    //     min="1"
    //     max="10"
    //   />
    // </div>
    <div className=" flex text-black w-1/2 border-1 border-gray-400 rounded-2xl overflow-hidden max-h-12">
      <button
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        type="button"
        className="flex-1 bg-green-200 font-bold"
      >
        -
      </button>
      <input
        type="number"
        value={item.quantity}
        onChange={(e) =>
          setQuantity(Math.max(1, parseInt(e.target.value) || 1))
        }
        className="flex-1 text-center max-w-15 py-2 border-x-1 border-gray-400 focus:outline-none 
               [-moz-appearance:textfield] 
               
             "
        min="1"
      />
      <button
        onClick={() => setQuantity(quantity + 1)}
        type="button"
        className="flex-1 bg-green-200 font-bold "
      >
        +
      </button>
    </div>
  );
}
