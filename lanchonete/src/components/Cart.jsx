import { useCart } from "../context/CartContext.jsx";
import ProductQuantityButton from "./QuantityButton.jsx";
export default function ModalCart() {
   const {items, removeItem, getTotal} = useCart();

    return (
        <div>
            {/* <button command="show-modal" commandfor="drawer" class="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10">Open drawer</button> */}
<el-dialog>
  <dialog id="drawer" aria-labelledby="drawer-title" class="fixed inset-0 size-auto max-h-none max-w-none overflow-hidden bg-transparent not-open:hidden backdrop:bg-transparent">
    <el-dialog-backdrop class="absolute inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"></el-dialog-backdrop>

    <div tabindex="0" class="absolute inset-0 pl-10 focus:outline-none sm:pl-16">
      <el-dialog-panel class="ml-auto block size-full max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700">
        <div class="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
          <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div class="flex justify-between items-center">
                <h2 id="drawer-title" class="text-lg font-medium text-gray-900">Shopping cart</h2>
              <div class="ml-3 flex h-7 items-center">
                <button type="button" command="close" commandfor="drawer" class="relative -m-4 p-1 text-gray-400 hover:text-gray-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
                    <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="mt-8">
              <div class="flow-root">
                <ul role="list" class="-my-6 divide-y divide-gray-200">
                  {items.length === 0 && <p className="text-center text-gray-500 p-4">Carrinho vazio.</p>}
                  {items.map((item, index) => (           
                        <li key={index} class="flex py-6">
                                <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img src={item.image} class="size-full object-cover" />
                                </div>
                                    <div class="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <h5 href="#">{item.name}</h5>
                                        </h3>
                                        <p class="ml-4">{item.price}</p>
                                        </div>
                                        <p class="mt-1 text-sm text-gray-500">Salmon</p>
                                    </div>
                                    <div class="flex flex-1 items-end justify-between text-sm">
                                        <ProductQuantityButton item={item}/>

                                        <div class="flex">
                                        <button type="button" onClick={()=>{removeItem(item.id)}} className="text-red-600 hover:text-red -800">Remove</button>
                                        </div>
                                    </div>
                                    </div>
                        </li>
                      ))}   
                  
                
                </ul>
              </div>
            </div>

                {/* <div className="mt-4">
                      <button 
                        onClick={clearCart}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
                      >
                        Limpar Carrinho
                      </button>
                </div> */}
          </div>

          <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div class="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>{getTotal()}</p>
            </div>
            <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div class="mt-6">
              <a href="#" class="flex items-center justify-center rounded-md bg-amber-400 py-2 text-decoration-none text-white shadow-sm hover:bg-amber-300">Checkout</a>
            </div>
            <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or
                <button type="button" command="close" commandfor="drawer" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </el-dialog-panel>
    </div>
  </dialog>
</el-dialog>

        </div>
    )
}




// function Cart() {
//     const {items, removeItem, clearCart} = useCart();

//     if (items.length === 0) {
//         return <div className="p-4">Seu carrinho está vazio.</div>;
//     }

//     return(
//           <div className="p-4 bg-white rounded-lg shadow-md">

//                   <h2 className="text-xl font-bold mb-4">Carrinho de Compras</h2>
//                       {items.map((item, index) => (
//                         <div key={index} className="flex justify-between items-center mb-2">
//                           <span>{item.name}</span>
//                           <span>R$: {item.price}</span>
//                           <button 
//                             onClick={() => removeItem(item.id)}
//                            className="text-red-600 hover:text-red -800"
//                           >
//                             Remover
//                           </button>
//                         </div>
//                       ))}
//                   <div className="mt-4">
//                       <button 
//                         onClick={clearCart}
//                         className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
//                       >
//                         Limpar Carrinho
//                       </button>
//                   </div>

//           </div>
//     )
// };

// export default Cart;