import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
const Books = ({book}) => {
   // console.log("filt",book) ;  
  return (
    <div className=''>
          <Link to={`/books/${book.id}`} className="">
            <img
              className=" w-full min-w-56 max-h-72 block h-auto"
              src={book.url}
              alt="image display"
            />
          </Link>
          <div className="px-5 pb-5">
          <Link to={`/books/${book.id}`} className="">

              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {book.title}
              </h5>
            </Link>
            <div className="flex items-center mt-2.5 mb-5">

              {
                new Array(Math.floor(book.rating )).fill(0).map((_, index)=>
                <FontAwesomeIcon icon="star" key={index} style = { {color: "#fbc02d", fontSize: "1rem" }} />
         )
              }
              {
                !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt"  style = { {color: "#fbc02d", fontSize: "1rem" }} />
              }
            </div>
            <div className="flex justify-between items-center">
              {/* <span className="text-xl font-bold text-gray-900 dark:text-white">
                {book.pages} pages
              </span> */}
              
            </div>
            <div className="flex justify-between items-center">
              {book.salePrice ? 
               <>   <span className="text-xl font-bold text-gray-500 dark:text-white">
               <del> ${book.originalPrice}</del></span>
               <span className="text-xl font-bold text-gray-900 dark:text-white">
             
                ${book.salePrice}</span></>
                : <>  <span className="text-xl font-bold text-gray-900 dark:text-white">
                ${book.originalPrice
                }</span></>
              } 
              
              
            </div>
          </div>
        </div>
  )
}

export default Books