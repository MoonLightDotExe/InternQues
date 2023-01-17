import React from 'react'
import image from '../assets/watch.jpg'

function Card({ name , desc}) {
  return (
    <div className="card"> 
        <img src={image} alt='watch' />
        <div className="text">
          <div className="name"> {name} </div>
          <div className="desc"> {desc} </div>
        </div>
        
    </div>
  )
}

export default Card
