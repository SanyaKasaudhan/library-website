import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import book from "../book.png";
import Cards from "./Cards";

import {books} from "./data.js"
const Featured = () => {
  //console.log("fes",books) ;
  // books.filter((book) => book.rating === 5 ) 
  // console.log("filt",books) ;  
  return (
    <div>
      <div className="text-3xl text-orange-500 text-center">Featured Books</div>
      {
        // .slice(0,6)
        books.map((book) =>(          
      <Cards book={book} />
      
        )  )
      }
{/* 
      <div>
        <div className="row flex flex-wrap ">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 m-2 bg-white rounded-lg border max-w-xs border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="">
              <img
                className="rounded-t-lg min-w-full max-w-32 max-h-72 block h-auto w-full"
                src={book}
                alt=""
              />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Atomic habits
                </h5>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <FontAwesomeIcon
                  icon="star"
                  style={{ color: "yellow", fontSize: "1em" }}
                />
                <FontAwesomeIcon
                  icon="star"
                  style={{ color: "yellow", fontSize: "1em" }}
                />
                <FontAwesomeIcon
                  icon="star"
                  style={{ color: "yellow", fontSize: "1em" }}
                />
                <FontAwesomeIcon
                  icon="star"
                  style={{ color: "yellow", fontSize: "1em" }}
                />
                <FontAwesomeIcon
                  icon="star-half-alt"
                  style={{ color: "yellow", fontSize: "1em" }}
                />
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  ruskin bond
                </span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-xl font-bold text-gray-900 dark:text-white">
                  243 pages
                </span>
                <span className="price">
                  <del>$145.00</del> $129.00
                </span>
              </div>
            </div>
          </div>
        </div>
        </div> */}
      
    </div>
  );
};

export default Featured;
