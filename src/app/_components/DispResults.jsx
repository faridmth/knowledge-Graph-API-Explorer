import React from 'react'
import ResultComV1 from './ResultComV1'

const DispResults = ({data}) => {
  return (
    <div className='mb-10'>
      {
         data.itemListElement[0]&&<div className='w-full  flex justify-center'>
            <p className='w-[70%] mt-8 text-xl'>Total des résultats : {data.itemListElement.length}</p>
          </div>
      }
      {
        data.itemListElement[0]? (data.itemListElement.map(e=> <ResultComV1 data={e}/>)) : <p className='text-xl min-w-full flex justify-center p-5 mt-16'>Une erreur est survenue lors de la récupération des données. (pas de Knowledge Panel)</p>
      }

    </div>
  )
}

export default DispResults
