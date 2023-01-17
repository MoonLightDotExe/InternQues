import React from 'react'
import { useState } from 'react';
import CardSub from './CardSub';

function FormSubmit() {

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
    <CardSub>
      
    </CardSub>
  )
}

export default FormSubmit
