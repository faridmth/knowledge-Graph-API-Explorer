import React from 'react'

const SideBar = ({setPage,page}) => {
  return (
    <div className='fixed w-[250px] bg-[#ffffff] flex flex-col items-start h-full pt-6 gap-6'>
        <button onClick={()=>setPage(0)} className={`h-[40px] ml-4 ${page===0?'side-bar-btn-active':''}`}>Rechrche par nom</button>
        <button onClick={()=>setPage(1)} className={`h-[40px] ml-4 ${page===1?'side-bar-btn-active':''}`}>Rechrche par ID</button>
        <button onClick={()=>setPage(2)} className={`h-[40px] ml-4 ${page===2?'side-bar-btn-active':''}`}>Suivi des Entity</button>
      
    </div>
  )
}

export default SideBar
