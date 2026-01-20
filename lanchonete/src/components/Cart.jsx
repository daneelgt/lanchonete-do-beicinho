import { useCart } from "../context/CartContext.jsx";
import ProductQuantityButton from "./QuantityButton.jsx";
import { MoneyFormatter } from "../utils/MoneyFormatter.jsx";
export default function ModalCart() {
  const { items, removeItem, getTotal } = useCart();

  return (
    <div>
      <el-dialog>
        <dialog
          id="drawer"
          aria-labelledby="drawer-title"
          className="fixed inset-0 size-auto max-h-none max-w-none overflow-hidden bg-transparent not-open:hidden backdrop:bg-transparent"
        >
          <el-dialog-backdrop className="absolute inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"></el-dialog-backdrop>

          <div
            tabindex="0"
            className="absolute inset-0 pl-10 focus:outline-none sm:pl-16"
          >
            <el-dialog-panel className="ml-auto block size-full max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700">
              <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex justify-between items-center">
                    <h2
                      id="drawer-title"
                      className="text-lg font-medium text-gray-900"
                    >
                      Carrinho
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        command="close"
                        commandfor="drawer"
                        className="relative -m-4 p-1 text-gray-400 hover:text-gray-500"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          data-slot="icon"
                          aria-hidden="true"
                          className="size-6"
                        >
                          <path
                            d="M6 18 18 6M6 6l12 12"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {items.length === 0 && (
                          <p className="text-center text-gray-500 p-4">
                            Carrinho vazio.
                          </p>
                        )}
                        {items.map((item, index) => (
                          <li key={index} className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={item.image}
                                className="size-full object-cover"
                              />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <h5 href="#">{item.name}</h5>
                                  </h3>
                                  <div className="flex gap-1">
                                    <p>R$:</p>
                                    <span>
                                      <MoneyFormatter
                                        amount={item.price * item.quantity}
                                      ></MoneyFormatter>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-1 items-baseline-last justify-between text-sm">
                                <ProductQuantityButton
                                  size="small"
                                  sizeBtn="small"
                                  sizeInput="small"
                                  product={item}
                                  quantity={item.quantity || 1}
                                ></ProductQuantityButton>

                                <div className="flex">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      removeItem(item.id);
                                    }}
                                    className="rounded text-red-600 hover:text-red-800 bg-red-100 px-1"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col gap-3 border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div class="flex items-center justify-between">
                    <p className="text-2xl mb-0">Total</p>

                    <div className="flex gap-1 items-center">
                      <span className="text-gray-400 text-2xl">R$:</span>
                      <span className="text-2xl text-orange-400">
                        {<MoneyFormatter amount={getTotal()} />}
                      </span>
                    </div>
                  </div>

                  <div className="">
                    <a
                      href="#"
                      class="flex items-center justify-center rounded-md bg-amber-400 py-2 text-decoration-none text-white shadow-sm hover:bg-amber-300"
                    >
                      Comprar
                    </a>
                  </div>
                  <div class="flex justify-center text-center text-sm text-gray-500">
                    <p className="flex gap-1">
                      Ou
                      <button
                        type="button"
                        command="close"
                        commandfor="drawer"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue comprando
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
  );
}
