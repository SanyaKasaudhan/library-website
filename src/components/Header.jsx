import React from 'react'
import book from '../book.png'

import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import delivery from '../delivery.webp'
const Header = () => {
  return (
    <div>
        <h1 className='uppercase text-orange-400 text-5xl text-center m-5'>create  your future with us!</h1>
         <h3 className='uppercase text-orange-300 text-3xl text-center '>Find your dream book here</h3>
       
            <figure className="flex justify-center">
                <img src={delivery} alt="" className='min-w-fit'/>
            </figure>
          <div className="content">
            <h2 className='capitalize text-center text-2xl text-amber-500'>Why Choose library?</h2>
          </div>

          <div className='delivery-box'>
            <div className="box1">
            <i class="fa-light fa-truck-fast"></i>
            <FontAwesomeIcon icon="faTruckFast" />
            </div>
          </div>


    </div>
  )
}

export default Header