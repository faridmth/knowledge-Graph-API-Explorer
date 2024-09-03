'use client'
import SearchBar from "./_components/SearchBar";
import DispResults from "./_components/DispResults";

//
import { useState , useEffect } from "react";
export default function Home() {
  const [entity,setEntity]=useState('')
  const [isLoading,setIsLoading]=useState(false)
  const [data,setData]=useState(null)
  useEffect(()=>{
    if(entity.trim()==="") return
    setIsLoading(true)
    async function getData() {
      try{
        let data = await fetch(`api/knowldgegraph/${entity}/fr`)
        data = await data.json()  
        setData(data)
      }catch(err){
        console.log(err)
      }finally{
        setIsLoading(false)
      }
    }
    getData()
  },[entity])
  return (
    <div>
      <SearchBar setEntity={setEntity}/>
      {
        isLoading?<p className="text-xl min-w-full flex justify-center p-5 mt-16">Loading...</p>:(data&&<DispResults data={data}/>)
      }
    </div>
  );
}
