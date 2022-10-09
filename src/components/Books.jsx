import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Books = ({book}) => {
   // console.log("filt",book) ;  
  return (
    <div className=''>
          <a href="#" className="">
            <img
              className=" w-full min-w-48 max-h-72 block h-auto"
              src={book.imageLink}
              alt=""
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {book.title}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">

              {
                new Array(Math.floor(book.rating )).fill(0).map((_, index)=>
                <FontAwesomeIcon icon="star" key={index} style = { {color: "#fbc02d", fontSize: "1rem" }} />
         )
              }
              {
                !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt"  style = { {color: "#fbc02d", fontSize: "1rem" }} />
              }
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {book.language}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {book.pages} pages
              </span>
              
            </div>
            <div className="flex justify-between items-center">
              {book.salePrice ? 
               <>   <span className="text-xl font-bold text-gray-500 dark:text-white">
               <del> ${book.price}</del></span>
               <span className="text-xl font-bold text-gray-900 dark:text-white">
             
                ${book.salePrice}</span></>
                : <>  <span className="text-xl font-bold text-gray-900 dark:text-white">
                ${book.price
                }</span></>
              } 
              
              
            </div>
          </div>
        </div>
  )
}

export default Books