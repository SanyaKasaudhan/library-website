import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{useState} from "react";
import { Link, useParams } from "react-router-dom";
import Books from "./Books";

const BookInfo = ({books , addToCart, cart}) => {
  const {id}=useParams();
  const book=books.find(book=> +book.id ==id);
 // const [added, setAdded] =useState(false);
  function addBookToCart(book){
 //   setAdded(true);
    addToCart(book)
  }

  function bookExistsOnCart(){
   return cart.find(book =>book.id ===+id);
  }
  return (
    <div>
    
      <div className="justify-center m-5 align-middle">
        <Link  className="m-5 ">
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-left"
            style={{ fontSize: "3rem" }}
          />

          <a
            href="#"
            class="flex flex-col justify-center items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-3xl hover:bg-yellow-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
              
            <img
              class="object-cover w-full h-96 rounded-t-lg  md:w-48 md:rounded-none md:rounded-l-lg"
              src={book.url}
              alt="imge"
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
              <p class="mb-3 font-extrabold text-gray-700 dark:text-gray-400">
               {book.title}</p>

              <div class="flex items-center mt-4">
              {book.salePrice ? 
               <>   <span className="text-xl font-bold text-gray-500 dark:text-white">
               <del> ${book.originalPrice}</del></span>
               <span className="text-xl font-bold ml-8 text-gray-900 dark:text-white">
             
                ${book.salePrice}</span></>
                : <>  <span className="text-xl ml-8 font-bold text-gray-900 dark:text-white">
                ${book.originalPrice}
                </span></>
              } 
            </div>

              <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-gray-900 dark:text-white">
                 {book.country}
                </span>
                {bookExistsOnCart() ? (
                    <Link to={`/cart`}
                    class="text-white mx-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                  >Checkout </Link>
                ):(
                  <button
                  onClick={() =>addBookToCart(book)}
                  class="text-white mx-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                >
                  Add to cart
                </button>
                )}
               
              </div>

              
            </div>
          </a>
        </Link>
       

      </div>

      <div className="text-3xl text-orange-500 text-center">Featured Books</div>
      <div className="flex justify-evenly flex-wrap flex-row mx-10">
    {
        // .slice(0,6)
        books.filter((book) => book.rating===5 &&  book.id!== +id)
        .slice(0,5)
        .map((book) =>(   
          <div className='bg-pink-200 w-2/12 mx-2 my-2 '>     
      <Books book={book}  key={book.id}/>
      </div>
      
        )  )
      }
    </div>
    </div>
  );
};

export default BookInfo;
