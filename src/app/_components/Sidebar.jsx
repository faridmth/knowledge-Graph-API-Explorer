"use client"
import {useContext, useEffect, useState} from 'react'
import AllEntitties from "./AllEntities"
import {EntitiesData} from "./EntitiesProvider"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const SideBar = () => {
  const { entitiesData, refreshEntities } = useContext(EntitiesData)
  const [showAllEntities,setShowAllEntities]=useState(false)
  useEffect(()=>{
    if(path.includes('historique')){
      setShowAllEntities(true)
    }
  },[])
  const path = usePathname()
  return (
    <div className='fixed w-[250px] bg-[#ffffff] flex flex-col items-start h-full pt-6 gap-6'>
        <Link href="/searchbyname" onClick={()=>setShowAllEntities(false)} className={`h-[40px] ml-4 no-underline flex items-center justify-center ${path==="/searchbyname"&&!showAllEntities&&'side-bar-btn-active'}`}>Rechercher par nom</Link>
        <Link href="/searchbyid" onClick={()=>setShowAllEntities(false)} className={`h-[40px] ml-4 no-underline flex items-center justify-center ${path==="/searchbyid"&&!showAllEntities&&'side-bar-btn-active'}`}>Rechercher par ID</Link>
        <button onClick={()=>setShowAllEntities(true)} className={`h-[40px] ml-4 ${showAllEntities&&'side-bar-btn-active'}`}>Suivi des Entity</button>
        {showAllEntities&&<AllEntitties allEntities={entitiesData}/>}
        

      
    </div>
  )
}

export default SideBar
