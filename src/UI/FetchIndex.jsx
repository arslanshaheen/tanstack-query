import {useQuery } from "@tanstack/react-query"
import {getcardparams} from "../API/api"
import { NavLink, useParams } from "react-router-dom"

export const FetchIndex=()=>{
    const {id}=useParams()
  const {data, isPending,isError,error}=useQuery({
    queryKey:['posts',id], //useState
    queryFn:()=>getcardparams(id),//useffect()
})
console.log(data)

if(isPending)return <p>Loading....</p>
if(isError)return <p>Error:{error.message || "somethings went wrongs"}</p>
    return <div>

        <ul className="section-accordion">
            <h1>Posts_Details_Name</h1>
            <div>
                <p>Id:{data.id}</p>
                <p>Title:{data.Title}</p>
                <p>Body:{data.body}</p>
            </div>
            <NavLink to='/rq'>
         <button >Go Back</button>
         </NavLink>
        </ul>
        
        
    </div>
}