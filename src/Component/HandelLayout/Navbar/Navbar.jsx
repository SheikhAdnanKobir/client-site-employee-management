// import React, { use } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo1.svg'
import useAuth from '../../Hooks/useAuth';
import { useEffect, useRef, useState } from 'react';
import 'flowbite';
import { FaHouse } from 'react-icons/fa6';
import { FaChartLine } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";

const Navbar = () => {

    const location = useLocation();
    const { user, handleSignOut } = useAuth();
    const [hiddenis, setHiddenis] = useState(false)
    const clickRef = useRef(null)

    // console.log(user);

    const isHidden = () => {
        setHiddenis(!hiddenis)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (clickRef.current && !clickRef.current.contains(event.target)) {
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
            <nav className="bg-lime-500/10 shadow-md">
                <div className=" flex justify-between items-center z-50  max-w-[1440px] mx-auto p-3  ">
                    <div>
                        <Link to={"/"}><img src={logo} className='md:h-8 h-6' alt="Flowbite Logo" /></Link>
                    </div>
                    <div className="">
                        <ul className="flex items-center gap-2 text-sm font-semibold ">
                            <li>
                                <NavLink to={"/"} className={`flex items-center transform hover:scale-105 transition-all duration-300 ${location.pathname === "/" ? "bg-lime-500 text-white rounded-md md:rounded-full py-0.5 px-1" : "text-lime-800 py-0.5 px-1"}`} >
                                    <FaHouse className=' mr-1' />
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard"} className={`flex items-center transform hover:scale-105 transition-all duration-300 ${location.pathname === "/dashboard" ? "bg-lime-500 text-white md:rounded-full rounded-md   py-0.5 px-1" : "text-lime-800 py-0.5 px-1"}`} >
                                    <FaChartLine className=' mr-1' />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"} className={`flex items-center transform hover:scale-105 transition-all duration-300 ${location.pathname === "/contact" ? "bg-lime-500 text-white md:rounded-full rounded-md   py-0.5 px-1" : "text-lime-800 py-0.5 px-1"}`} >
                                    <MdContactSupport className=' mr-1' />
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div class="flex items-center ">
                        {
                            user?.email ?
                                <div className='text-center'>
                                    <button onClick={isHidden} type="button" class="flex justify-center items-center  pr-2 gap-2  text-sm  md:ring-2 hover:bg-lime-600 bg-white hover:text-lime-600 ring-lime-500 hover:ring-lime-600 cursor-pointer rounded-xl">
                                        <div class=" border-2 ring-2 ring-lime-500 hover:ring-lime-700 md:border-white rounded-full">
                                            <img class="w-6 h-6 rounded-full" src={user?.photoURL} alt="user photo" />
                                        </div>
                                        <span class="hover:text-white text-lime-700 hidden md:block text-sm font-bold">{user?.displayName}</span>
                                    </button>
                                    <div class={`z-50 right-0.5 ${hiddenis ? "block" : "hidden"} absolute my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600`} >
                                        <div class="px-4 py-3">
                                            <span class="text-sm block md:hidden text-white font-semibold">{user?.displayName}</span>
                                            <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                                        </div>
                                        <ul class="py-2" aria-labelledby="user-menu-button">
                                            <li>
                                                <button onClick={() => handleSignOut()} class="block px-4 py-2 text-sm mx-auto text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white font-bold">Log Out</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                :
                                <div class="ml-3">
                                    <Link to={"/authentication"}>
                                        <button className='ring-2 ring-lime-600 bg-white text-slate-600 text-sm font-semibold px-1 md:px-3 py-1 rounded-md mouse-pointer hover:bg-lime-600 hover:text-white transition-colors duration-300'>
                                            <span className='transform transition-transform duration-100 ho hover:scale-125'>LogIn</span>/<span className='transform transition-transform duration-300 scale-105'>SignUp</span>
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