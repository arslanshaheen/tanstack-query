// import {createBrowserRouter, RouterProvider} from "react-router-dom"
// import { FetchOld } from "./pages/FetchOld"
// import "./App.css";
// import { Home } from "./pages/Home"
// import { FetchRQ } from "./pages/FetchRQ"
// import {MainLayout} from "./components/Layout/MainLayout"
// import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { FetchIndex } from "./UI/FetchIndex";
// import { InfinireScroll } from "./pages/InfinireScroll";
// import { ParentComponent } from "./components/PropsDrilling";
// const router= createBrowserRouter([
//   {
//     path:"/",
//     element:<MainLayout/>,
//     children:[
//       {
//         path:"/",
//       element:<Home/>
//       },
//       {
//         path:"/trad",
//         element:<FetchOld/>
//       },
//       {
//         path: "/rq",
//         element: <FetchRQ />
//       },
//       {
//         path: "/rq/:id",
//         element: <FetchIndex/>
//       },
//       {
//         path: "/infinite",
//         element: <InfinireScroll/>
//       },
//       {
//         path: "/propsdrill",
//         element: <ParentComponent/>
//       },



     
//     ]
//     },
  
// ])
import { BioProvider } from "./hooks/contextApi"
import { Home } from "./hooks/contextApi/home"
const App=()=>{
 
return(
<BioProvider>
<Home/>
</BioProvider>

)

//Tanstackquery design like that
          //const queryClient=new QueryClient()
           // return (
            //    <QueryClientProvider client={queryClient}>
            //   <RouterProvider router={router}></RouterProvider>
            //   <ReactQueryDevtools initialIsOpen={false} />
            //    </QueryClientProvider>
            //  )
 
}

export  default App