'use client'
import { useEffect, useState } from "react"
import Table from "../../_components/Table"

const Page = ({ params }) => {
  const [historique, setHistorique] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

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
          <div className="w-full pl-16 pt-14">
            <h2 className="text-xl "><span className="font-medium">Id de l&apos;entité :</span> {decodeURIComponent(params.id)}</h2>
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
