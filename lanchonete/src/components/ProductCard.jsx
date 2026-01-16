import { useCart } from "../context/CartContext.jsx";
import ProductQuantityButton from "./QuantityButton.jsx";
import { useState } from "react";

function ProductCard({ product }) {

  const { addItem } = useCart();

  return (
    <div className="card py-3 bg-amber-800">
      <div className="border-y-2 border-gray-400">
        <img className="size-full object-cover" src={product.image} alt={product.name} />
      </div>
      <div className="card-body">
        <h5 className="card-title text-black">{product.name}</h5>
        <p className="card-text text-cyan-900">{product.description}</p>
      </div>
      <div className="card-body">
        <p className="text-2xl text-blue-800"><span className="text-black mr-2">R$:</span>{product.price}</p>
      </div>

      <div className="card-body flex items-center justify-between">
        <button
          onClick={() => addItem(product)}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500"
        >
          Adicionar ao Carrinho
        </button>
        <div className="flex items-center">
          <span className="text-black">Quantidade:</span>
          <div className="flex max-w-2xl" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary text-black w-1 " onClick={() => { value > 1 ? setValue(value - 1) : setValue(1) }}>-</button>
            <input type="reset" value={value} className="btn btn-secondary text-black" />
            <button type="button" className="btn btn-secondary text-black w-1" onClick={() => { setValue(value + 1) }}>+</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductCard;

