
'use client'
import { useState } from "react";
import Searchbyname from "./_components/Searchbyname";
import SearchbyId from "./_components/SearchbyId";
import EntitesStats from "./_components/EntitesStats";
import SideBar from "./_components/Sidebar";
export default function Home() {
  const [page,setPage]=useState(0)
  return (
    <div>
      <SideBar setPage={setPage} page={page}/>
      {page===0&&<Searchbyname/>}
      {page===1&&<SearchbyId/>}
      {page===2&&<EntitesStats/>}
      
    </div>
  );
}
