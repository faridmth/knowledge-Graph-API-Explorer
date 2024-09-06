import React from 'react';
import ResultComV1 from './ResultComV1';

const DispResults = ({ data }) => {

  return (
    <>
      {data.itemListElement ? (
        <div className='mb-10'>
          <div className='w-full flex justify-center'>
            <p className='w-[80%] mt-8 text-xl'>
              Total des résultats : {data.itemListElement.length}
            </p>
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
