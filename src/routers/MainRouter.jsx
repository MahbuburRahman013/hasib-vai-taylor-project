import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import DynamicContent from "../home/mainHomePageComponents/DynamicContent";
import About from "../about/About";
import Serve from "../who-we-serve/Serve";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/who-we-serve',
          element:<Serve/>
        },
        {
          path:'/dynamicContent/:title',
          element:<DynamicContent/>
        }
      ]
    },
  ]);