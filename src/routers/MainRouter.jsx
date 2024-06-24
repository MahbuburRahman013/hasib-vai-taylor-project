import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import DynamicContent from "../home/mainHomePageComponents/DynamicContent";
import About from "../about/About";
import Serve from "../who-we-serve/Serve";
import OurBrands from "../about/about-childs/OurBrands";
import ExecutiveTeam from "../about/about-childs/ExecutiveTeam";
import Knowledge from "../knowledge/Knowledge";
import Service from "../service/Service";
import Careers from "../careers/Careers";
import NotFound from "../home/not-found-page/NotFound";
import Development from "../home/under-development/Development";
import Contact from "../contact-us/Contact";
import News from "../news-and-events/News";
import AboutCareers from "../careers/AboutCareers";
import WeHire from "../careers/WeHire";
import Benefits from "../careers/Benefits";
import LearnAndDev from "../careers/LearnAndDev";
import Rewards from "../careers/Rewards";



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
          path:'/under-development',
          element: <Development/>
        },
        {
          path:'/knowledge',
          element:<Knowledge/>
        },
        {
          path:'/service',
          element:<Service/>
        },
        {
          path:'/contact-us',
          element:<Contact/>
        },
        {
          path:'/news',
          element:<News/>
        },
        {
          path:'/careers',
          element:<Careers/>,
          children:[
            {
              path:'/careers',
              element: <AboutCareers/>
            },
            {
              path:'/careers/hire',
              element:<WeHire/>
            },
            {
              path:'/careers/benefits',
              element:<Benefits/>
            },
            {
              path:'/careers/learn-development',
              element:<LearnAndDev/>
            },
            {
              path:'/careers/rewards',
              element:<Rewards/>
            },
          ]
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/about/our-brands',
          element:<OurBrands/>
        },
        {
          path:'/about/executive-leadership-team',
          element:<ExecutiveTeam/>
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
    {
      path:'*',
      element: <NotFound/>
    },
  ]);