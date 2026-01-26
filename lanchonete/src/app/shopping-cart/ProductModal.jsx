import { useEffect, useState } from "react";
import { MoneyFormatter } from "../../utils/MoneyFormatter.jsx";
import ProductQuantityButton from "../../utils/QuantityButton.jsx";

export default function ProductModal({ isOpen, onClose, onConfirm, product }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setSelectedQuantity(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white shadow-2xl rounded-lg p-6 w-96 transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4 text-black">
            {product.name}
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center p-2 size-10 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="max-h-screen w-full mb-4"
          />
        </div>

        <div className=" flex items-center justify-between bg-gray-100 rounded-2xl h-16 px-2">
          <div className="text-xl font-medium flex gap-2 flex-1 text-green-800">
            R$:
            <div className="text-black">
              <MoneyFormatter
                amount={product.price * selectedQuantity}
              ></MoneyFormatter>
            </div>
          </div>

          <ProductQuantityButton
            key={`product-${product.id}`}
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
