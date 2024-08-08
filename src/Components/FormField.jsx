import React, { useState } from 'react'
import { useExpense } from "../contexts/index"

function FormField() {
  const [amt,setAmt] =useState('')
  const [des,setDes] =useState('')
  const {addItem} =useExpense()
  const {setTotal} = useExpense()
  const handleSubmit = (e)=>{
        e.preventDefault()
        if(amt=='' || des==''){
          alert("All fields are mandatory")
        }
        else if(isNaN(amt)){
          alert("Provide a number")
          setAmt('')
        }
        else{
          addItem({des:des,amt :amt})
          setTotal(amt)
          console.log("hello")
          setAmt('')
          setDes('')
        }
   }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-1 items-center mt-5'>
        <input 
        className='w-1/2 p-2 rounded-lg bg-gray-300'
        type="text"
        placeholder='amount'
        value={amt}
        onChange={(e) => setAmt(e.target.value)}
        />
        <input placeholder='Description'
        className='w-3/4 p-2 rounded-lg bg-gray-300'
        onChange={(e) => setDes(e.target.value)}
        value={des}
        />
        <button 
        type='submit'
        className='bg-gray-300 px-6 py-2 my-2 rounded-lg'
        >Add</button>
    </form>
  )
}

export default FormField