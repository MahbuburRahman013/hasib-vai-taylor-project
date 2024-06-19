import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import DynamicContent from "../home/mainHomePageComponents/DynamicContent";



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
          path:'/dynamicContent/:title',
          element:<DynamicContent/>
        }
      ]
    },
  ]);