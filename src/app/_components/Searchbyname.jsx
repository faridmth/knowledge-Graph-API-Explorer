'use client'
import SearchBar from './SearchBar'
import DispResults from './DispResults'
//
import { useState , useEffect } from "react";

const Searchbyname = () => {
    const [entity,setEntity]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const [data,setData]=useState(null)
    useEffect(()=>{
      if(entity.trim()==="") return
      setIsLoading(true)
      async function getData() {
        try{
          let data = await fetch(`api/knowldgegraph/query/${entity}/fr`)
          data = await data.json()  
          setData(data)
        }catch(err){
          console.log(err)
          setData({})
        }finally{
          setIsLoading(false)
        }
      }
      getData()
    },[entity])
  
  return (
    <div className='ml-[250px]'>

      <SearchBar setEntity={setEntity} placeholder="Nom de l'entité..."/>
      {
        isLoading?<p className="text-xl min-w-full flex justify-center p-5 mt-16">Loading...</p>:(data&&<DispResults data={data} showBtns={false}/>)
      }
    </div>

  )
}

export default Searchbyname
