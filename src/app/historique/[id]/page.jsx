'use client'
import { useEffect, useState , useContext } from "react"
import Table from "../../_components/Table"
import {EntitiesData} from "../../_components/EntitiesProvider"
import DeleteBtn from "../../_components/DeleteBtn"
const Page = ({ params }) => {
  const [historique, setHistorique] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const {entitiesData,refreshEntities} = useContext(EntitiesData)
  const EnityName = entitiesData.filter(e=>e.EntityId===decodeURIComponent(params.id))
  useEffect(() => {
    const main = async () => {
      setIsLoading(true)
      try {
        let data = await fetch(`../api/history?entityid=${params.id}`)
        data = await data.json()
        setHistorique(data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    main()
  }, [params])

  return (
    <div className='ml-[250px]'>
      {isLoading ? (
        <div className="w-full flex justify-center pt-16">
          <h1 className="text-xl">Loading...</h1>
        </div>
      ) : (
        <div>
          <div className="w-full pl-16 pt-14 flex justify-between">
            <div>
              {EnityName[0]&&<h2 className="text-xl "><span className="font-medium">Nom de l&apos;entité :</span> {EnityName[0].EntityName}</h2>}
              <h2 className="text-xl "><span className="font-medium">Id de l&apos;entité :</span> {decodeURIComponent(params.id)}</h2>
            </div>
            <div>
              <DeleteBtn EntityId={decodeURIComponent(params.id)} setEntitiesRefresher={refreshEntities}/>
            </div>
          </div>
          {historique && historique.length > 0 ? (
            <Table data={historique} />
          ) : (
            <div className="w-full flex justify-center pt-16">
              <h1 className="text-xl">une erreur c&apos;est produit veuillez réessayer</h1>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Page
