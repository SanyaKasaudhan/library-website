import React from 'react'
import {books} from './data'
import Books from './Books';
const Fea = () => {

    console.log("fes",books) ;
  return (
    <div>Fea
 <div className="flex col flex-wrap justify-center bg-black">
 <div className=" bg-white rounded-lg border  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        
{
    books.filter((book) => book.rating === 5 ) 
         .slice(0,4)
        .map((book) =>(          
      <Books book={book} />
      
        )  )
      }
</div>
</div>
    </div>
  )
}

export default Fea