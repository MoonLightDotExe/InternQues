import React from 'react'
import { useState } from 'react';

function Card({ name , desc}) {
    const [text , setText] = useState(' ');
    const [add , setAdd] = useState(' ');

    const handleSub = (e)=> {
        console.log(e);
    }

    const HandleChange = (e) => {
      setText(e.target.value)
    }
    const HandleChangeAdd = (e) => {
      setAdd(e.target.value)
    }
  return (
    <div className="cardSubb"> 
        <form onSubmit={handleSub}>
        <div className="input-group">
            <label> Name </label>
          <input 
            type='text'
            placeholder='Write Something!'
            onChange={HandleChange}
            value={text}
          />
            <button type="submit" className='btn btn-primary'> Submit </button>
          </div>

        </form>
    </div>
  )
}

export default Card
