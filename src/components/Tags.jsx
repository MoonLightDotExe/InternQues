import React from 'react'
import {FaChevronDown} from 'react-icons/fa'

function Tags({name}) {
  return (
    <> 
        <div className="contain">
            <FaChevronDown />
            <p> { name } </p>
        </div>
    </>
  )
}

export default Tags