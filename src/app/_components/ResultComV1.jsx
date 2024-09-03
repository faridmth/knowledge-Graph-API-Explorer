import React from 'react'

const ResultComV1 = ({data}) => {
    console.log(data)
  return (
    <div className='flex flex-col items-center mt-8'>
        {
        data.result["@type"]&&(
            <div className='resultdiv type'>
                <p>type</p>
                <p>
                    {
                        data.result["@type"].map(e=>`${e} `)
                    }
                </p>
            </div>
        )
      }

      {
        data.result["@id"] && (
        <div className='resultdiv'>
            <p>id</p>
            <p>
                {data.result["@id"].replace('kg:','')}
                <a href={`https://www.google.com/search?kgmid=${data.result["@id"].replace('kg:','')}`} target="_blank" className='ml-2'>Voir sur google</a>

            </p>
        </div>
        )
      }
      {
        data.result.name&&(
            <div className='resultdiv'>
                <p>Nom</p>
                <p>{data.result.name}</p>
            </div>
        )
      }
      {
        data.result.description&&(
            <div className='resultdiv'>
                <p>Description</p>
                <p>{data.result.description}</p>
            </div>
        )
      }
      {
        data.result.detailedDescription&&(
            <div className='flex flex-col items-center w-full'>
                <div className='resultdiv'> 
                    <p>Article</p>
                    <p>{data.result.detailedDescription.articleBody}    
                        <a href={data.result.detailedDescription.url} target='_blank'>Lire plus</a>
                    </p>
                </div>
                <div className='resultdiv'>
                    <p>details</p>
                    <p>
                        <a href={data.result.detailedDescription.license} target='_blank'>License</a>
                    </p>
                </div>
            </div>
        )
      }
        {
        data.result.url && (
        <div className='resultdiv'>
            <p>site web</p>
            <p><a href={data.result.url} target='_blank'>{data.result.url}</a></p>
        </div>
        )
      }
      {
        data.resultScore&&(
            <div className='resultdiv'>
                <p>Result score</p>
                <p>{Math.ceil(data.resultScore)}</p>
            </div>
        )
      }
    </div>
  )
}

export default ResultComV1
