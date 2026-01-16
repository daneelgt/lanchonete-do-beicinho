// src/components/ProductCard.jsx
import { useCart } from "../context/CartContext.jsx";
import { useState } from "react";
import QuantityModal from "./QuantityModal.jsx";

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product, quantity) => {
    addItem({ ...product, quantity });
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card py-3 bg-amber-800">
        <div className="border-y-2 border-gray-400">
          <img
            className="size-full object-cover"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-black">{product.name}</h5>
          <p className="card-text text-cyan-900">{product.description}</p>
        </div>
        <div className="card-body">
          <p className="text-2xl text-blue-800">
            <span className="text-black mr-2">R$:</span>
            {product.price.toFixed(2).toString().replace(".", ",")}
          </p>
        </div>

        <div className="card-body">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      <QuantityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleAddToCart}
        product={product}
      />
    </>
  );
}

export default ProductCard;
