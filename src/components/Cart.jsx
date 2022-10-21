import React from "react";
import './cart.css'

import { Link } from "react-router-dom";
import EmptyCart from "./empty_cart.svg";
const Cart = ({cart, changeQuantity, removeItem}) => {
  const total=()=>{
    let price=0;
    cart.forEach((item)=>{
      price+= +(item.salePrice || item.originalPrice) * item.quantity 
    })
    return price;
  }
  return (
    <div>
      <div className="text-3xl text-orange-500 text-center my-5">Cart</div>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Book
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Quantity
                    </th>

                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(book=>{  
                    return(
                    <> <tr >
                    <td  key={book.id} className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                      <div className="text-center">
                        <div className="mr-3">
                          <span className="px-5 py-3">
                            <img src={book.url} className="w-32 h-32"/>
                            </span>

                        <span className="py-12 text-lg">${(book.salePrice || book.originalPrice).toFixed(2)}</span>
                         <br/><button className="text-red-600 text-lg ml-3" onClick={() => removeItem(book)}>Remove</button>
                         
                        </div>
                      </div>
                    </td>
                    <td className="px-10 border-b border-gray-200 bg-white text-sm">
                    <div className="cart__quantity">
                        <input
                          type="number"
                          className="cart__input"
                          min={0}
                          max={99}
                          value={book.quantity}
                          onChange={(event) =>changeQuantity(book, event.target.value)
                          }
                        />
                      </div>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                      <div className="text-center">
                        <div className="mr-3">
                          <p className="px-5 py-3">${(book.salePrice || book.originalPrice)* book.quantity}</p>
                        </div>
                      </div>
                    </td>
                  </tr></>)  
                  })}
                                   
                </tbody>
              </table>
               
            </div>
          </div>
        </div>
        {(!cart || !cart.length) && (
                  <div className="cart__empty">
                    <img className="cart__empty--img" src={EmptyCart} alt="" />
                    <h3 className="text-3xl mb-7">You don't have any books in your cart!</h3>
                    <Link to="/books">
                      <button className="btn">Browse books</button>
                    </Link>
                  </div>
                )}
        <div>
        <p className="right-20 mt-6 justify-end  text-green-800">
                   <div className="flex justify-end items-center mt-5">
                        <span className="text-3xl mr-8 font-bold text-gray-900 dark:text-white">Price</span>
                        <span className="text-3xl mr-8 font-bold text-gray-900 dark:text-white">${(total()*0.9).toFixed(2)}</span>
                    </div>
                    
                    <div className="items-center flex justify-end mt-5">
                        <span className="text-3xl mr-8 font-bold text-gray-900 dark:text-white">Tax</span>
                        <span className="text-3xl mr-8 font-bold text-gray-900 dark:text-white">${(total()*0.1).toFixed(2)}</span>
                    </div>

                    <div className="flex justify-end items-center mt-5">
                        <span className="text-3xl mr-8 font-bold text-gray-900 dark:text-white">Total Price</span>
                        <span className="text-3xl mr-8 font-bold text-gray-900 dark:text-white">${total().toFixed(2)}</span>
                    </div>

                    <div className="flex justify-end items-center my-5">
                    <button onClick={()=>alert('proceeding to checkout')}
                  className="text-white mx-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                >
                  Proceed to checkout
                </button>
                    </div>

                </p>

                </div>
      </div>
    </div>
  );
};

export default Cart;
