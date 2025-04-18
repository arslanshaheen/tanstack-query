import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchUsers } from "../API/api"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export const InfinireScroll=()=>{


    const {data,hasNextPage, fetchNextPage,status,error ,isFetchingNextPage}=useInfiniteQuery({
        queryKey:['users'],
        queryFn:fetchUsers,
        getNextPageParam:(lastPage, allPage)=>{
            console.log("lastPage",lastPage,"allpage",allPage)
            return lastPage.length===10 ? allPage.length+1 : undefined
        }
    })

// const handleScroll=()=>{
//     const bottom=window.innerHeight + window.scrollY >= document.documentElement.scrollHeight -1

//     if(bottom && hasNextPage){
//    fetchNextPage()
//     }
// }

const {ref,inView,entry}=useInView({
    threshold: 1,
})

    useEffect(()=>{
        // window.addEventListener('scroll',handleScroll);
        // return ()=>window.removeEventListener("scroll",handleScroll)
            if(inView && hasNextPage){
          fetchNextPage()
           }
    },[inView,fetchNextPage,hasNextPage])


    if(status==="loading") return <div>loading</div>
    if(error==="loading") return <div>error</div>

    console.log(data)
    return <div>{data?.pages?.map((page, index)=>(
        <ul key={index}>
            {page.map((user)=>(
                <li key={user} style={{padding:'10px',border:"1px solid #ccc"}}>
                        <p>{user.login}</p>
                        <img src={user.avatar_url} alt={user.login}  width={50} height={50}/>
                </li>
            ))}
        </ul>
    ))}
    <div ref={ref} style={{padding:"20px", textAlign:'center'}}> {isFetchingNextPage ? "loading more" :
    hasNextPage ?"scroll down to loading more":"no more users"}</div>
    {/* {isFetchingNextPage  && <div>loading more...</div>} */}
    </div>
}