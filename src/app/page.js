
'use client'
import { useState,useEffect } from "react";
import Searchbyname from "./_components/Searchbyname";
import SearchbyId from "./_components/SearchbyId";
import EntitesStats from "./_components/EntitesStats";
import SideBar from "./_components/Sidebar";
export default function Home() {
  const [page,setPage]=useState(0)
  const [allEntities,setAllEntities]=useState([])
  const [entitiesRefresher,setEntitiesRefresher]=useState(0)
  useEffect(()=>{
    const main = async ()=>{
      let entities = await fetch('api/entity')
      entities = await entities.json()
      setAllEntities(entities)
    }
    main()
  },[entitiesRefresher])
  return (
    <div>
      <SideBar setPage={setPage} page={page}/>
      {page===0&&<Searchbyname/>}
      {page===1&&<SearchbyId allEntities={allEntities} setEntitiesRefresher={setEntitiesRefresher}/>}
      {page===2&&<EntitesStats/>} 
    </div>

  );
}
