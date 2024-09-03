'use client'
import { useState } from "react"
const searchBar = ({setEntity}) => {
    const [inputText,setInputText]=useState('')
    const handleChange = (e)=>{
        setInputText(e.target.value)
    }
    const handleClick = (e)=>{
        setEntity(inputText)
    }
  return (
    <div className='w-full h-20 flex bg-white justify-center items-center'>
      <input type="text" value={inputText} onChange={handleChange} name="entity" className='bg-[#f5f8fa] h-8 p-2' placeholder='Rechercher...' />
      <button className='bg-[#3399cc] py-1 px-2 text-white ml-2' onClick={handleClick}>Rechrcher</button>
    </div>
  )
}

export default searchBar
