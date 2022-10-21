import React, {useState} from "react";
import { books } from "./data";
import Books from "./Books";

const AllBook = ({books : initialState}) => {
  const[books, setBooks] = useState(initialState);

 function filterBooks(filter){
    console.log("filteting",filter);
    if(filter=='LOW_TO_HIGH')
    setBooks(books.slice().sort((a,b)=>(a.salePrice || a.price) - (b.salePrice || b.price))
    )

    if(filter=='HIGH_TO_LOW')
    setBooks(books.slice().sort((a,b)=>(b.salePrice || b.price) - (a.salePrice || a.price))
    )

    if(filter=='RATING')
    setBooks(books.slice().sort((a,b)=> b.rating - a.rating))

    if(filter=='LOW_TO_HIGH_PAGES')
    setBooks(books.slice().sort((a,b)=> a.pages - b.pages))

    if(filter=='HIGH_TO_LOW_PAGES')
    setBooks(books.slice().sort((a,b)=> b.pages - a.pages))

       }
  return (
    <div>
      <div>
        <div>
          <div className="text-3xl text-orange-500 text-center my-5">
            All Books
          </div>

          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <select id="filter" defaultValue="DEFAULT"
              onChange={(event) => filterBooks(event.target.value)} className="form-select appearance-none    block  w-full
                px-3 py-1.5 text-base font-normal  text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300  rounded  transition
                ease-in-out  m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          aria-label="Default select example" >
                <option value="DEFAULT" disabled> Sort </option>
                <option value="LOW_TO_HIGH">Price, Low to High</option>
                <option value="HIGH_TO_LOW">Price, High to Low</option>
                <option value="RATING">Rating</option>
                <option value="LOW_TO_HIGH_PAGES">Pages, Low to High</option>
                <option value="HIGH_TO_LOW_PAGES">Pages, High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly flex-wrap flex-row mx-10">
          {books.map((book) => (
            <div className="bg-pink-200 w-2/12 mx-2 my-2 ">
              <Books book={book} key={book.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBook;
