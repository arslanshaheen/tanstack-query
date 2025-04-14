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