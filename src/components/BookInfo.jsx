import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const BookInfo = () => {
  return (
    <div>
     <div className='justify-center'>
        <Link to="/books" className='m-5 '>
        <FontAwesomeIcon icon="fa-solid fa-arrow-left" style = { { fontSize: "3rem" }} />
           
        
        </Link>
     </div>
    </div>
  )
}

export default BookInfo
