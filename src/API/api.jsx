import axios from 'axios';

const apiGet = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})


/// data fetch the data

// export  const fetchGets =()=>{
//   return  apiGet.get('/posts')
// }

export const fetchGets=async()=>{
    const res= await apiGet.get('/posts')
    return res.status===200 ? res.data :[]
}