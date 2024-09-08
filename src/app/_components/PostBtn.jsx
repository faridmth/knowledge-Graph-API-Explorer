import React from 'react'
import { FaPlus } from 'react-icons/fa';

const PostBtn = ({EntityId,EntityName,setEntitiesRefresher,setIsFollowed}) => {
    const handlePost = async () => {
        try {
            const addEntity = await fetch('/api/entity', {
                method: "POST",
                body: JSON.stringify({
                    EntityId: EntityId,
                    EntityName: EntityName
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!addEntity.ok) {
                throw new Error(`Error: ${addEntity.status} ${addEntity.statusText}`);
            }
            setIsFollowed(true)
            setEntitiesRefresher(pre=>pre+1)
        } catch (error) {
            console.error(error);
        }
    };
      return (
        <button 
        className='mr-20 bg-[#3399cc] py-2 px-6 text-white flex items-center gap-2 font-medium'
        onClick={handlePost}
        >Suivre <FaPlus/>
        </button>
    
  )
}

export default PostBtn
