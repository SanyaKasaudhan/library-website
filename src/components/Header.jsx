import React from 'react'
import book from '../book.png'
const Header = () => {
  return (
    <div>
           <h1 className='uppercase text-pink-500 text-5xl text-center m-5'>create  your future with us!</h1>
         
        <div className="container flex flex-row">
            <div className="content1 ">
                </div>
            <div className="content2">
                <img src={book} alt="" />
            </div>
        </div>


    </div>
  )
}

export default Header