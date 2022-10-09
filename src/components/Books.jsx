import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Books = ({book}) => {
   // console.log("filt",book) ;  
  return (
    <div>
          <a href="#" className="">
            <img
              className=" w-full min-w-48 max-h-72 block h-auto"
              src={book.imageLink}
              alt=""
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {book.title}
              </h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
         <FontAwesomeIcon icon="star" style = { {color: "#fbc02d", fontSize: "1rem" }}/>
         <FontAwesomeIcon icon="star" style = { {color: "#fbc02d", fontSize: "1rem" }} />
         <FontAwesomeIcon icon="star" style = { {color: "#fbc02d", fontSize: "1rem" }} />
         <FontAwesomeIcon icon="star" style = { {color: "#fbc02d", fontSize: "1rem" }}/>
         <FontAwesomeIcon icon="star-half-alt" style = { {color: "#fbc02d", fontSize: "1rem" }} />
         
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {book.language}
              </span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-gray-900 dark:text-white">
                {book.pages} pages
              </span>
              
            </div>
            <div class="flex justify-between items-center">
              {book.salePrice ? 
               <>   <span class="text-xl font-bold text-gray-500 dark:text-white">
               <del> ${book.price}</del></span>
               <span class="text-xl font-bold text-gray-900 dark:text-white">
             
                ${book.salePrice}</span></>
                : <>  <span class="text-xl font-bold text-gray-900 dark:text-white">
                ${book.price
                }</span></>
              } 
              
              
            </div>
          </div>
        </div>
  )
}

export default Books