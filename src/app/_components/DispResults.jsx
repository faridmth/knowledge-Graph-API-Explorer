import { useEffect,useState } from 'react';
import React from 'react';
import ResultComV1 from './ResultComV1';
import PostBtn from './PostBtn'
import DeleteBtn from './DeleteBtn'
import toast from 'react-hot-toast';
const DispResults = ({ data , showBtns ,setEntitiesRefresher,allEntities}) => {
  const [isFollowed,setIsFollowed]=useState(false)

  useEffect(()=>{
    if(showBtns && data.itemListElement){
      const isFollowedCheck = allEntities.some((obj)=>obj.EntityId===data.itemListElement[0].result["@id"].replace('kg:',''))
      setIsFollowed(isFollowedCheck)
    }
  },[allEntities])
  useEffect(()=>{
    const saveHistory = async ()=>{
      await fetch('api/history',{
        method : 'POST',
        body : JSON.stringify(
          {
            entityId:data.itemListElement[0].result["@id"].replace('kg:',''),
            resultScore:Math.ceil(data.itemListElement[0].resultScore)
          }
        ),
        headers:{
          'Content-Type':"application/json"
        }
      })
    }

    if(showBtns && isFollowed){
      console.log("history saved")
      toast.success('Result Score sauvegardé !')
      saveHistory()
    }
  },[data,showBtns,isFollowed])
  return (
    <>
    
      {data.itemListElement ? (
        <div className='mb-10'>
          <div className='w-full flex justify-center mt-8 '>
            <div className='w-[80%] flex justify-between '>
              <p className=' text-xl '>Total des résultats : {data.itemListElement.length}</p>
              {
                  showBtns&&(
                    isFollowed?<DeleteBtn EntityId={data.itemListElement[0].result["@id"].replace('kg:','')} EntityName={data.itemListElement[0].result.name} setEntitiesRefresher={setEntitiesRefresher} setIsFollowed={setIsFollowed}/>
                    :<PostBtn EntityId={data.itemListElement[0].result["@id"].replace('kg:','')} EntityName={data.itemListElement[0].result.name} setEntitiesRefresher={setEntitiesRefresher} setIsFollowed={setIsFollowed}/>
                  )
              }
            </div>
          </div>
          {data.itemListElement.map((e, index) => (
            <ResultComV1 key={index} data={e} />
          ))}
        </div>
      ) : (
        <p className='text-xl min-w-full flex justify-center p-5 mt-16'>
          Une erreur est survenue lors de la récupération des données. (pas de Knowledge Panel)
        </p>
      )}
    </>
  );
};

export default DispResults;
