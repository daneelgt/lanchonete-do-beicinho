import { useState } from "react";

export default function QuantityModal({ isOpen, onClose, onConfirm, product }) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 flex flex-col gap-4">
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

        <div className=" flex items-center bg-gray-100 rounded-2xl gap-3 h-16 px-2">
          <label className="text-sm font-medium text-gray-700 w-1/2">
            R$: {}
          </label>
          {/* <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className=""
          /> */}
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
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
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
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            onClick={() => onConfirm(product, quantity)}
            className="px-4 py-2 rounded bg-blue-600 text-white  hover:bg-blue-700"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
