// src/components/ProductCard.jsx
import { useCart } from "../../app/shopping-cart/components/CartContext.jsx";
import { useState } from "react";
import { MoneyFormatter } from "../../utils/MoneyFormatter.jsx";
import ProductModal from "../../app/shopping-cart/ProductModal.jsx";

function ProductCard({ item }) {
  const { addItem, getTotalItem } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const total = getTotalItem(item.id);
  console.log(total);

  const handleAddToCart = (item, quantity) => {
    addItem({ ...item, quantity });
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card py-3 bg-amber-800">
        <div className="border-y-2 border-gray-200 max-h-135">
          <img
            className="size-full object-contain "
            src={item.image}
            alt={item.name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-black">{item.name}</h5>
          <p className="card-text text-cyan-900">{item.description}</p>
        </div>
        <div className="card-body flex gap-1">
          <p className="text-2xl text-black">R$:</p>
          <span className="text-2xl text-orange-700">
            <MoneyFormatter amount={item.price}></MoneyFormatter>
          </span>
        </div>

        <div className="card-body flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-2/3 bg-neutral-500/60 text-white py-2 rounded hover:bg-neutral-500/50"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleAddToCart}
        product={item}
      />
    </>
  );
}

export default ProductCard;
