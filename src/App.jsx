import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { FetchOld } from "./pages/FetchOld"
import "./App.css";
import { Home } from "./pages/Home"
import { FetchRQ } from "./pages/FetchRQ"
import {MainLayout} from "./components/Layout/MainLayout"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
const router= createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
      element:<Home/>
      },
      {
        path:"/trad",
        element:<FetchOld/>
      },
      {
        path: "/rq",
        element: <FetchRQ />
      }
    ]
    },
  
])


const App=()=>{

  const queryClient=new QueryClient()
         return(
               <QueryClientProvider client={queryClient}>
              <RouterProvider router={router}></RouterProvider>
               </QueryClientProvider>
             )
 
}

export  default App