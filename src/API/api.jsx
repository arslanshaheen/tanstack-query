import axios from 'axios';

const apiGet = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})


/// data fetch the data

// export  const fetchGets =()=>{
//   return  apiGet.get('/posts')
// }

export const fetchGets=async(pageNumber)=>{
    try {
        const res= await apiGet.get(`/posts?_start=${pageNumber}&_limit=3`)
        return res.status===200 ? res.data :[] 
    } catch (error) {
        console.log(error)
        return []
    }
    
}


export const getcardparams=async(id)=>{
    try {
        const res = await apiGet.get(`/posts/${id}`)
         return res.status===200 ? res.data : [];
    } 
    catch (error) {
        console.log(error) 
        return []
        
    }
   
}

export const deletePost=(id)=>{
    return apiGet.delete(`/posts/${id}`)

}

export const updatePosts=(id)=>{
    return apiGet.patch(`/posts/${id}`,{title:"I have update"})
}

//infinte scrolling
export const fetchUsers=async({pageParam=1})=>{
    try {
        const res= await axios.get(`https://api.github.com/users?per_page=10&page=${pageParam}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}