import { FaTrash } from 'react-icons/fa';

const DeleteBtn = ({EntityId,setEntitiesRefresher,setIsFollowed}) => {
    console.log(EntityId)
    const handleDelete = async () => {
        try {
            const deleteEntity = await fetch('/api/entity', {
                method: "DELETE",
                body: JSON.stringify({
                    id: EntityId, // This is your entity ID
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            if (!deleteEntity.ok) {
                throw new Error(`Error: ${deleteEntity.status} ${deleteEntity.statusText}`);
            }
            setIsFollowed(false)
            setEntitiesRefresher(pre=>pre+1)
            const response = await deleteEntity.json();
            console.log('Deleted successfully:', response.message);
    
            // Update your UI or state here if needed, e.g., removing the item from a list
        } catch (error) {
            console.error('Delete failed:', error.message);
        }
    };
    
  return (
    <button 
        className='mr-20 bg-[#d9534f] py-2 px-6 text-white flex items-center gap-2 font-medium'
        onClick={handleDelete}
        >Ne plus suivre<FaTrash/>
    </button>
  )
}

export default DeleteBtn
