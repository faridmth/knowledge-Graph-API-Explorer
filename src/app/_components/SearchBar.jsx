'use client'
import { useState } from "react"
const SearchBar = ({setEntity,placeholder}) => {
    const [inputText,setInputText]=useState('')
    const handleChange = (e)=>{
        setInputText(e.target.value)
    }
    const handleClick = (e)=>{
        setEntity(inputText)
    }
  return (
    <div className='w-full h-20 flex justify-center items-center'>
      <input type="text" value={inputText} onChange={handleChange} name="entity" className='bg-[#ffffff] h-8 p-4 border-white border-md rounded-md' placeholder={placeholder} />
      <button className='bg-[#3399cc] py-1 px-2 text-white ml-2' onClick={handleClick}>Rechercher</button>
    </div>
  )
}

export default SearchBar
