'use client'
import SearchBar from './SearchBar'
import DispResults from './DispResults'
//
import { useState , useEffect } from "react";

const SearchbyId = ({setEntitiesRefresher,allEntities}) => {
    const [entity,setEntity]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const [data,setData]=useState(null)
    useEffect(()=>{
      if(entity.trim()==="") return
      setIsLoading(true)
      async function getData() {
        try{
          let encodedEntity = encodeURIComponent(entity);
          let dataEN = await fetch(`api/knowldgegraph/ids/${encodedEntity}/en`)
          dataEN = await dataEN.json()  
          let id = dataEN.itemListElement[0].result['@id']
          let name = dataEN.itemListElement[0].result.name
          let dataFR = await fetch(`api/knowldgegraph/query/${name}/fr`)
          dataFR = await dataFR.json()  
          let resultsArr = dataFR.itemListElement
          let rightEntity = resultsArr.filter((e)=>e.result['@id']===id)
          rightEntity[0].result.description=dataEN.itemListElement[0].result.description
          dataFR.itemListElement=rightEntity
          setData(dataFR)
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
      <SearchBar setEntity={setEntity} placeholder="ID de l'entité..."/>
      {
        isLoading?<p className="text-xl min-w-full flex justify-center p-5 mt-16">Loading...</p>:(data&&<DispResults data={data} showBtns={true} allEntities={allEntities} setEntitiesRefresher={setEntitiesRefresher}/>)
      }
    </div>

  )
}

export default SearchbyId
