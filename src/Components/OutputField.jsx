import React, { useEffect, useState } from 'react'
import { useExpense } from '../contexts'

function OutputField() {
  const {total,items} =useExpense()
  const [tot,setTot] =useState("")
  const [plusTot,setPlusTot] =useState("")
  const [minTot,setMinTot] =useState("")
  useEffect(()=>{
    const newTotal = items.reduce((sum, item) => sum + parseFloat(item.amt), 0);
    const newplusTotal = items.reduce((sum, item) => item.amt>0 ? sum + parseFloat(item.amt) :sum, 0);
    const newminusTotal = items.reduce((sum, item) => item.amt<0 ? sum + parseFloat(item.amt) :sum, 0);
    setTot(newTotal)
    setPlusTot(newplusTotal)
    setMinTot(newminusTotal)
  },[total])
  return (
    <div className='text-center leading-80 mt-5'>
        <h1 className='text-3xl'>Total: {tot}</h1>
        <h1>Received: {plusTot}</h1>
        <h1>Spend: {minTot}</h1>
    </div>
  )
}

export default OutputField