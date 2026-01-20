// src/components/ProductCard.jsx
import { useCart } from "../context/CartContext.jsx";
import { useState } from "react";
import { MoneyFormatter } from "../utils/MoneyFormatter.jsx";
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
        <div className="card-body flex gap-1">
          <p className="text-2xl text-black">R$:</p>
          <span className="text-2xl text-orange-700">
            <MoneyFormatter amount={product.price}></MoneyFormatter>
          </span>
        </div>

        <div className="card-body">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-neutral-500/60 text-white py-2 rounded hover:bg-neutral-500/50"
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
