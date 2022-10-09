import React,{ Component } from 'react';
import {Card,CardGroup} from 'react-bootstrap';
import {books} from './data'
import Books from './Books';
const Fea = () => {

    console.log("fes",books) ;
  return (
    <div>
      <div className="text-3xl text-orange-500 text-center mb-5">Featured Books</div>
        <div className="flex justify-between flex-wrap flex-row mx-10">
   
      
{
    books.filter((book) => book.rating === 5 ) 
         .slice(0,4)
        .map((book,i) =>(   
              <div className='bg-pink-200 w-2/12 '>
      <Books book={book} key={i} />
      </div>
      
      
        )  )
      }

        </div>
        </div> 
  )
}

export default Fea