import React from "react";
import './cart.css'
const Cart = ({cart, changeQuantity}) => {
  return (
    <div>
      <div className="text-3xl text-orange-500 text-center my-5">Cart</div>

      <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Book
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Quantity
                    </th>

                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(book=>{  
                    return(
                    <> <tr >
                    <td  key={book.id} class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                      <div class="text-center">
                        <div class="mr-3">
                          <p class="px-5 py-3">{book.url}</p>
                          <p class="px-5">({book.salePrice || book.originalPrice}).toFixed(2)</p>
                          
                        </div>
                      </div>
                    </td>
                    <td class="px-10 border-b border-gray-200 bg-white text-sm">
                    <div className="cart__quantity">qty
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

                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                      <div class="text-center">
                        <div class="mr-3">
                          <p class="px-5 py-3">{}</p>
                        </div>
                      </div>
                    </td>
                  </tr></>)  
                  })}
                 
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                      <div class="text-center">
                        <div class="mr-3">
                          <p class="px-5 py-3">Team 2</p>
                          <p class="px-5">Sale 2</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-10 border-b border-gray-200 bg-white text-sm">
                    <div className="cart__quantity">
                        <input
                          type="number"
                          className="cart__input"
                          min={0}
                          max={99}
                          value="1"
                          onChange={(event) =>
                            (event.target.value)
                          }
                        />
                      </div>
                    </td>


                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                      <div class="text-center">
                        <div class="mr-3">
                          <p class="px-5 py-3">Team 2</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
               
            </div>
          </div>
        </div>
       
        <div>
        <p class="right-20 mt-6 justify-end  text-green-800">
                   <div class="flex justify-end items-center mt-5">
                        <span class="text-3xl mr-8 font-bold text-gray-900 dark:text-white">Price</span>
                        <span class="text-3xl mr-8 font-bold text-gray-900 dark:text-white">$599</span>
                    </div>
                    
                    <div class="items-center flex justify-end mt-5">
                        <span class="text-3xl mr-8 font-bold text-gray-900 dark:text-white">Tax</span>
                        <span class="text-3xl mr-8 font-bold text-gray-900 dark:text-white">$599</span>
                    </div>

                    <div class="flex justify-end items-center mt-5">
                        <span class="text-3xl mr-8 font-bold text-gray-900 dark:text-white">Total Price</span>
                        <span class="text-3xl mr-8 font-bold text-gray-900 dark:text-white">$599</span>
                    </div>

                    <div class="flex justify-end items-center my-5">
                    <button onClick={()=>alert('proceeding to checkout')}
                  class="text-white mx-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
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
