
import {convertTimestamp} from "../functions/date"
const Table = ({data}) => {


  return (
    <div>

      <div className="w-[80%] flex flex-col items-center pt-10 " >
        <div className="flex  mt-2 bg-[#3399cceb] p-4 w-[400px] justify-start" >
            <p className="w-[200px]"> Date</p>
            <p> Result Score</p>
        </div>
          {
              data.map(e=>{return(
                <div className="flex  mt-2 bg-[#d5d5d5] p-4 w-[400px]" key={e.Id}>
                  <p className="w-[200px]"> {convertTimestamp(e.CreatedAt)}</p>
                  <p className="font-medium"> {e.ResultScore}</p>
                </div>
              )})
            }
      </div>
     
    </div>
  )
}

export default Table
