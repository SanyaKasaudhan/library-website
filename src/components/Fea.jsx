import React from 'react';
import {books} from './data'
import Books from './Books';
const Fea = () => {

    console.log("fes",books) ;
  return (
    <div>
      <div className="text-3xl text-orange-500 text-center my-5">Featured Books</div>
        <div className="flex justify-evenly flex-wrap flex-row mx-10">
   
      
{
    books.filter((book) => book.rating === 5 ) 
         .slice(0,8)
        .map((book,i) =>(   
              <div className='bg-pink-200 w-2/12 mx-2 my-2 '>
      <Books book={book} key={i} />
      </div>
      
      
        )  )
      }

        </div>
        </div> 
  )
}

export default Fea