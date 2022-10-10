import React from "react";

const Cart = () => {
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
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                      <div class="text-center">
                        <div class="mr-3">
                          <p class="px-5 py-3">Team 2</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-10 border-b border-gray-200 bg-white text-sm">
                      <select
                        id="qty"
                        name="qty"
                        autocomplete="qty"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </td>

                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                      <div class="text-center">
                        <div class="mr-3">
                          <p class="px-5 py-3">Team 2</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                      <div class="text-center">
                        <div class="mr-3">
                          <p class="px-5 py-3">Team 2</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-10 border-b border-gray-200 bg-white text-sm">
                      <select
                        id="qty"
                        name="qty"
                        autocomplete="qty"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
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

                </p>

                </div>
      </div>
    </div>
  );
};

export default Cart;
