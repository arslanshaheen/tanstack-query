// import { fetchGets } from "../API/api"
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchGets, updatePosts } from "../API/api"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { deletePost } from "../API/api"


export const FetchRQ = () => {
  const[pageNumber,setPageNumbers]=useState(0)
//   const getPostsApi = async () => {
//     try {
//       const res = await fetchGets()
//      return res.status === 200 ? res.data :[]
//        } catch (error) {
//       console.log(error)
//       return []
//     }
//   }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['post',pageNumber],
    queryFn:()=>fetchGets(pageNumber),
    // gcTime:1000,  
    // staleTime:5000  //10 seconds bath data sever ko hit karaga
    // refetchInterval:1000,
    // refetchIntervalInBackground:true //if we move into next tab api fetch on server still continoue
    placeholderData:keepPreviousData,
  })

  const queryClient =useQueryClient()

  //! mutation fuction to delete posts
  const deleteMutation =useMutation({
    mutationFn:(id)=>deletePost(id),
    onSuccess:(data,id)=>{
      // console.log(data,id)
      queryClient.setQueryData(['post',pageNumber],(CurrentItems)=>{
        return CurrentItems?.filter((post)=> post.id!==id)

      })
    }
  })


  //! mutation fuction to update posts
  const updateMutation =useMutation({
    mutationFn:(id)=>updatePosts(id),
    onSuccess:(apiData,postId)=>{
      console.log(apiData,postId)
      queryClient.setQueryData(['post',pageNumber],(PostsData)=>{
        return PostsData?.map((curPost)=>{
          return curPost.id===postId ? {...curPost, title:apiData.data.title}:curPost;
        })

      })
    }
  })

  if (isLoading)return <p>loading</p>
 if (isError) return <p>Error:{error.message || "there are some error"}</p>


  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">All Posts</h2>

      {isLoading && (
        <p className="text-center text-gray-600 text-lg">Loading posts...</p>
      )}

      {/* {error && (
        <p className="text-center text-red-500 text-lg">Something went wrong</p>
      )} */}

      {!isLoading && !error && (
        <ul className="section-accordion">
         {data?.map((CurrentItems) => {
            const { id, title, body } = CurrentItems
            return (
                 <li
                key={id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
                        >
                            <NavLink to={`/rq/${id}`}>
                              <p>{id}</p>
                            <p className="text-lg font-semibold text-gray-800">{title}</p>
                    <p className="text-gray-600 mt-2">{body}</p>
                    </NavLink>
                    <button onClick={()=>deleteMutation.mutate(id)}>Delete</button>
                    <button onClick={()=>updateMutation.mutate(id)}>update</button>
                 </li>
                            
                 
                )
             })}

        </ul>
        
      )}
      <div className="pagination-section container">
          <button
          disabled={pageNumber===0? true:false}
          onClick={()=>setPageNumbers((prev)=>prev-3)}>prev</button>
          <p>{(pageNumber/3)+1}</p>
          <button onClick={()=>setPageNumbers((prev)=>prev+3)}>next</button>
        </div>
    </div>
  )

}