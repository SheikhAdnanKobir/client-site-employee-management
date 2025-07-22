// import React, { use } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo1.svg'
import useAuth from '../../Hooks/useAuth';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {

    const location = useLocation();
    const { user,handleSignOut } = useAuth();
    const [hiddenis, setHiddenis] = useState(false)
    const clickRef = useRef(null)

    // console.log(user);

    const isHidden = () => {
        setHiddenis(!hiddenis)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (clickRef.current && !clickRef.current.contains(event.target)) 
            {
                setHiddenis(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);




    // const handleLogout = () => {
    //     // Logic for handling logout
    // }

    return (
        <div ref={clickRef}>
            <nav>
                <div class=" flex  items-center justify-between mx-auto p-3 border-b border-gray-200 bg-green-50">
                    <span>
                        <Link to={"/"}><img src={logo} class="h-7" alt="Flowbite Logo" /></Link>
                    </span>

                    <div class="" >
                        <ul class="flex justify-between gap-5 text-sm font-semibold  border border-gray-100 rounded-lg bg-green-100 py-1 px-2">
                            <li>
                                <NavLink to={"/"} className={location.pathname === "/" ? "bg-lime-500 py-1.5 px-2 text-white rounded-full" : "text-lime-800"} class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard"} className={location.pathname === "/dashboard" ? "bg-lime-500 py-1.5 px-2 text-white rounded-full" : "text-lime-800"} class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"} className={location.pathname === "/contact" ? "bg-lime-500 py-1.5 px-2 text-white rounded-full" : "text-lime-800"} class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div class="flex items-center ">
                        {
                            user?.email ?
                                <div className='text-center'>
                                    <button onClick={isHidden} type="button" class="flex text-sm  rounded-full hover:ring-2 ring-lime-500 cursor-pointer">

                                        <img class="w-7 h-7 rounded-full" src={user?.photoURL} alt="user photo" />
                                    </button>
                                    <div class={`z-50 right-0.5 ${hiddenis ? "block" : "hidden"} absolute my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600`} >
                                        <div class="px-4 py-3">
                                            <span class="block text-sm text-gray-900 dark:text-white">{user?.displayName}</span>
                                            <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                                        </div>
                                        <ul class="py-2" aria-labelledby="user-menu-button">
                                            <li>
                                                <button onClick={()=>handleSignOut()} class="block px-4 py-2 text-sm mx-auto text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white font-bold">Log Out</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                :
                                <div class="flex gap-2 justify-center items-center">
                                    <Link to={"/authentication"}>
                                        <button className='bg-lime-500 text-white px-3 py-1 rounded-md hover:bg-lime-600'>
                                            Sign Up/Login
                                        </button>
                                    </Link>
                                </div>
                        }

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;