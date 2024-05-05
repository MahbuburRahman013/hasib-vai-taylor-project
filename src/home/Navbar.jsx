import React, { useEffect, useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import MenuBar from './MenuBar';


function Navbar() {
    const [isTrue, setIsTrue] = useState(true)
    const [isOpen, setIsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);



    const navbar = [
        {
            nav: 'Who We Serve',
            navlink: '/'
        },
        {
            nav: 'Knowedges',
            navlink: '/'
        },
        {
            nav: 'Services',
            navlink: '/'
        },
        {
            nav: 'News',
            navlink: '/'
        },
        {
            nav: 'About',
            navlink: '/'
        },
    ]




    return (
        <div className={`bg-gradient-to-r from-[#050740] to-[#10147e]  shadow-gray-900 z-10 fixed top-0 w-full ${scrollY && 'shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'} transition-all duration-300`}>
            <div className='container pt-2 mx-auto'>

                <div className='lg:flex justify-end items-center hidden'>
                    <div className='w-[71.20%] flex justify-between gap-5 items-start'>
                        <div className={` ${isTrue ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-all duration-500 w-[70%] flex p-[1px] justify-center items-center bg-white rounded-full overflow-hidden`}>
                            <input type="text" name="" id="" className='border-none pl-5 pr-3 rounded-full outline-none w-full' />
                            <button className='bg-blue-300 hover:bg-blue-400 transition-all duration-300 p-2  rounded-full'><CiSearch className='text-xl font-bold' /></button>
                        </div>
                        <div className='text-white text-sm font-semibold flex justify-center items-center gap-3'>
                            <button onClick={() => setIsTrue(!isTrue)} className='flex hover:bg-[#1a1c4c] p-2 duration-300 transition-all rounded-md justify-center gap-1 items-center'><FaSearch className='font-bold' />Search</button>
                            <button className='flex justify-center gap-1 hover:bg-[#1a1c4c] p-2 duration-300 transition-all rounded-md items-center'><FaUser className='font-bold' />Careers</button>
                            <button className='flex justify-center gap-1 hover:bg-[#1a1c4c] p-2 duration-300 transition-all rounded-md items-center'><TiWorld className='font-bold text-[18px]' />Regions</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container flex justify-between items-center pb-6 mx-auto'>
                <button className='lg:hidden block' onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ? <RxCross2 className='text-4xl font-bold text-white' />: <IoMdMenu className='text-4xl font-bold text-white' /> 
                    }

                </button>
                <img className='lg:w-64 md:w-52 w-40' src="https://taylorandfrancis.com/wp-content/themes/u_new2tfg/assets/img/structure/logo.svg" alt="" />
                <div className='lg:flex justify-between items-center w-[50%] mx-auto hidden'>
                    {
                        navbar.map((item, index) => <div className='group' key={index} ><NavLink className='text-white text-xl navLink font-semibold' to={item.navlink} >{item.nav}</NavLink>
                            <span className='w-0 rounded-lg mt-1 h-1 block transition-all duration-500 ease-in-out group-hover:w-full bg-white'></span>
                        </div>)
                    }
                </div>
                <button className='py-1 lg:px-4 md:px-4 px-2  hover:scale-105 hover:bg-blue-400 transition duration-300 rounded-full bg-blue-300 lg:text-base text-sm text-black font-semibold'>Publish with us</button>
            </div>

            <div className={`lg:hidden ${isOpen ? '-translate-y-[0px]' : '-translate-y-[500px]'} transition-all duration-300  block bg-[#10147e] absolute w-full`}>
                      <MenuBar navbar={navbar} />
            </div>
        </div>
    )
}

export default Navbar 