import React from 'react'
import Tags from './Tags'

function Header() {
  return (
    <> 
        <div className="container1">
            <h1> 
                <span> Denmark </span>
                <span> Apparel </span>    
            </h1>
            <Tags name='Menswear'/>
            <Tags name='Footwear'/>
            <Tags name='Accesories'/>
            <Tags name='Clearance'/>
        </div> 
    </>
  )
}

export default Header