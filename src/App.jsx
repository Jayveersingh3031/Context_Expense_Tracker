import { ExpenseProvider } from './contexts/ExpenseContext'
import FormField from './Components/FormField'
import OutputField from './Components/OutputField'
import Items from './Components/Items'
import { useState } from 'react'
function App() {
  const [items,setItems] =useState([])
  const [total,setTotal] =useState('0')
  const addItem =(item) =>{
    setItems((prev) => [{id :Date.now(),...item},...prev])
  }
  return (
    <ExpenseProvider value={{addItem,items,total,setTotal}}>
    <div className='h-screen bg-slate-400 flex justify-center items-center'>
      <div className='w-1/3 h-4/5 bg-white overflow-hidden'>
        <div className='bg-blue-400 text-center text-xl p-5 font-bold'>
          <h1>My Accounts</h1>
        </div>
        <div className=''>{<OutputField/>}</div>
        <div className=''>{<FormField/>}</div>
          <h1 className='text-2xl text-center'>Details</h1>
          <div className=' flex-wrap h-1/3 overflow-y-auto'>
          {items.map((item) => (
              <div key={item.id}>
                <Items des={item.des} amt={item.amt} />
              </div>
            ))}
          </div>
      </div>
    </div>
  </ExpenseProvider>
  )
}

export default App