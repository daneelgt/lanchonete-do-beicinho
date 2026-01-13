import { useCart } from "../context/CartContext.jsx";

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <h3 className="text-blue-600 mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <span className="text-green-600 font-bold">R$: {product.price}</span>

      <div className="mt-4">
        <button 
          onClick={() => addItem(product)}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

