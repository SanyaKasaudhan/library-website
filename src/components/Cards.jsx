import React, { useState } from 'react'

import img1 from './images/ulysses.jpg'
import Cardsdata from "./data"
const Cards = () => {
    const[user, setUser] =useState(Cardsdata);
    console.log("da",user);
  return (
    <div>
        <img src={img1} />
        {
            user.map((data) =>{
            return(
                <>
                <img src="{data.imageLink}" />
                </>
            )})
        }
     
    </div>
  )
}

export default Cards