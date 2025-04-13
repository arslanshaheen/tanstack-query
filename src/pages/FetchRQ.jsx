// import { fetchGets } from "../API/api"
import { useQuery } from "@tanstack/react-query"
import { fetchGets } from "../API/api"



export const FetchRQ = () => {
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
    queryKey: ['post'],
    queryFn: fetchGets,
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
         {data?.map((item) => {
            const { id, title, body } = item
            return (
                 <li
                key={id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
                        >
                 <p className="text-lg font-semibold text-gray-800">{title}</p>
                    <p className="text-gray-600 mt-2">{body}</p>
                 </li>
                        )
                          })}

        </ul>
      )}
    </div>
  )

}