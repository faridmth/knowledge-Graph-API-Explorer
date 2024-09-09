
'use client'
import { useState,useContext } from "react";
import SideBar from "./_components/Sidebar";
import {EntitiesData} from "./_components/EntitiesProvider"
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  router.push('/searchbyname')
  const [page,setPage]=useState(0)
  const{entitiesData,refreshEntities}=useContext(EntitiesData)
  
  return (
    <div>
      <SideBar setPage={setPage} allEntities={entitiesData}/>
    </div>

  );
}
