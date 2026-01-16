import { useCart } from "../context/CartContext.jsx";

function Cart() {
  const { items, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return <div className="p-4">Seu carrinho está vazio.</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Carrinho de Compras</h2>
      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <span>{item.name}</span>
          <span>R$: {item.price}</span>
          <button
            onClick={() => removeItem(item.id)}
            className="text-red-600 hover:text-red-800"
          >
            Remover
          </button>
        </div>
      ))}
      <div className="mt-4">
        <button
          onClick={clearCart}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
        >
          Limpar Carrinho
        </button>
      </div>

    </div>
  )
};

export default Cart;