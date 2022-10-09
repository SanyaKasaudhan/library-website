import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import {books} from './data'
import Books from './Books';
const Discount = () => {
  return (
    <div>
      <div className="text-3xl text-orange-500 text-center my-5">Discounted Books</div>
        <div className="flex justify-between flex-wrap flex-row mx-10 my-10">
   
      
{
    books.filter((book ) => book.salePrice !=null ) 
         .slice(0,4)
        .map((book) =>(   
              <div className='bg-pink-200 w-2/12 '>
      <Books book={book} key="{book}"/>
      </div>
      
      
        )  )
      }

        </div>
        </div> 
  )
}
export default Discount