import { useCart } from "../context/CartContext";

export default function ProductQuantityButton({ item }) {
  const { updateQuantity } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div>
      <input
        className="text-black max-w-10 focus:outline-none"
        type="number"
        value={item.quantity}
        onChange={handleQuantityChange}
        min="1"
        max="10"
      />
    </div>
  );
}