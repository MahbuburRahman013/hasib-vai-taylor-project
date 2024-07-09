import React from 'react'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../home/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";


function Layout() {

useEffect(()=>{
      AOS.init()
},[])

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout