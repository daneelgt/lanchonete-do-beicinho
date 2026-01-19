import { useState } from "react";
import { MoneyFormatter } from "../utils/MoneyFormatter.jsx";
import ProductQuantityButton from "./QuantityButton.jsx";

export default function QuantityModal({ isOpen, onClose, onConfirm, product }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  
  // APRENDER A COLOCAR O UPDATEQUANTITY NESSA PORRA

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white shadow-2xl rounded-lg p-6 w-96 transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-black">
            {product.name}
          </h2>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4"
          />
        </div>

        <div className=" flex items-center justify-between bg-gray-100 rounded-2xl h-16 px-2">
          <div className="text-xl font-medium text-gray-700 flex-1 text-green-800">
            R$:
            <MoneyFormatter
              amount={product.price * selectedQuantity}

            ></MoneyFormatter>
          </div>
          
            <ProductQuantityButton
              size="small"
              sizeBtn="small"
              sizeInput="small"
              product={product}
              quantity={product.quantity || 1}
              onQuantityChange={(quantity) => {
                setSelectedQuantity(quantity);
              }}
            />
          
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            onClick={() => onConfirm(product, selectedQuantity)}
            className="px-4 py-2 rounded bg-blue-600 text-white  hover:bg-blue-700"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
