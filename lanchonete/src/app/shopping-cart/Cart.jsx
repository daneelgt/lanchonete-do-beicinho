import { useCart } from "./components/CartContext.jsx";
import ProductQuantityButton from "../../utils/QuantityButton.jsx";
import { MoneyFormatter } from "../../utils/MoneyFormatter.jsx";
import React, { Component, useState } from "react";
export default function ModalCart({ isOpen, onClose }) {
  const { items, removeItem, getTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center ">
      <div
        tabIndex="0"
        className="absolute inset-0 pl-10 focus:outline-none sm:pl-16"
      >
        <dialog
          open
          className="ml-auto block size-full max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
        >
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
                    onClick={onClose}
                    type="button"
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
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul
                    role="list"
                    className="flex flex-col items-center gap-4 my-6 p-4 divide-y divide-gray-200"
                  >
                    {items.length === 0 && (
                      <p className="text-center text-gray-500 p-4">
                        Carrinho vazio.
                      </p>
                    )}
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="flex py-6 bg-gray-100 shadow-md px-3 w-full"
                      >
                        <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.image}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <div>
                                <h5 href="#">{item.name}</h5>
                              </div>
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
                              quantity={item.quantity}
                              size="small"
                              sizeBtn="small"
                              sizeInput="small"
                              onQuantityChange={(quantity) =>
                                updateQuantity(item.id, quantity)
                              }
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
              <div class="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p>Subtotal</p>
                  <div className="flex gap-1 items-center">
                    <span className="text-gray-400 text-2xl">R$:</span>
                    <span className="text-2xl text-orange-400">
                      {<MoneyFormatter amount={getTotal()} />}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p>Descontos</p>
                  <span>R$ 0,00</span>
                </div>

                <div className="flex justify-between items-center">
                  <p>Total</p>
                  <div className="flex gap-1 items-center">
                    <span className="text-gray-400 text-2xl">R$:</span>
                    <span className="text-2xl text-orange-400">
                      {<MoneyFormatter amount={getTotal()} />}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href="#"
                  class="flex items-center justify-center w-2/3 py-2 text-decoration-none text-white shadow-sm bg-neutral-500/60 rounded hover:bg-neutral-500/50"
                >
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
