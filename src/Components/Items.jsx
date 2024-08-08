import React, { useState } from 'react'

function Items({amt,des}) {
  return (
 <>
    <div className='flex gap-4 px-5 py-2'>
        <input  type="text" readOnly value={des} className='px-4 rounded-lg bg-gray-300 w-96'/>
        <input  className=' px-4 w-20 rounded-lg bg-gray-300 ' value={amt} readOnly type="text"/>
    </div>
  </>
  )
}

export default Items