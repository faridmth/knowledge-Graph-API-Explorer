import { FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const DeleteBtn = ({EntityId,setEntitiesRefresher}) => {
    const router = useRouter()
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
            setEntitiesRefresher(pre=>pre+1)
            const response = await deleteEntity.json();
            toast.error("Entité supprimer la liste des suivi.")
            console.log('Deleted successfully:', response.message);
            router.push('/searchbyid')
    
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
