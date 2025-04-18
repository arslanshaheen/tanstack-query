import { useEffect, useState } from "react"
import { fetchGets } from "../API/api"

export const FetchOld = () => {
  const [gets, setGets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setError] = useState(false)

  const getPostsApi = async () => {
    isLoading(true)
    setError(false)
    try {
      const res = await fetchGets()
    
      res.status === 200 ? setGets(res.data) : []
      setIsLoading(false)

    } catch (error) {
      console.log(error)
      setError(true)
    } finally {
        setIsLoading(false)
        
      }
  }

  useEffect(() => {
     getPostsApi()
   
  }, [])

//   if (isLoading)return <p>loading</p>
//   if (isError) return <p></p>

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">All Posts</h2>
      {isLoading && (
        <p className="text-center text-gray-600 text-lg">Loading posts...</p>
      )}

      {isError  && (
        <p className="text-center text-red-500 text-lg">{isError}</p>
      )}
      {!isLoading && !isError &&
      <ul className="space-y-6">
        
      {gets?.map(({ id, title, body }) => (
        <li key={id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <p className="text-lg font-semibold text-gray-800">{title}</p>
          <p className="text-gray-600 mt-2
          
          
          ">{body}</p>
        </li>
      ))}
    </ul>
      
      }
      
    </div>
  )
}

{/* <template>
  
  <div class="p-8 bg-gray-100 min-h-screen">
    <h2 class="text-2xl font-bold mb-6 text-center text-blue-700">All Posts</h2>

    <!-- Loading -->
    <p v-if="isLoading" class="text-center text-gray-600 text-lg">Loading posts...</p>

    <!-- Error -->
    <p v-if="error" class="text-center text-red-500 text-lg">{{ error }}</p>

    <!-- Posts -->
    <ul v-if="!isLoading && !error" class="space-y-6">
      <li
        v-for="post in posts"
        :key="post.id"
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
      >
        <p class="text-lg font-semibold text-gray-800">{{ post.title }}</p>
        <p class="text-gray-600 mt-2">{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchGets } from '../API/api'

const posts = ref([])
const isLoading = ref(true)
const error = ref(null)

const getPosts = async () => {
  isLoading.value = true
  error.value = null

  try {
    const res = await fetchGets()
    if (res.status === 200) {
      posts.value = res.data
    } else {
      error.value = 'Failed to fetch posts.'
    }
  } catch (err) {
    error.value = 'Something went wrong while fetching posts.'
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getPosts()
})
</script> */}

