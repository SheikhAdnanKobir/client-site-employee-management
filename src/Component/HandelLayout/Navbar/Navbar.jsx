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
                                        <ul class="py-2" aria-labelledby="user-menu-button mx-auto bg-white">
                                            <li>
                                                {/* <button  class="block px-4 py-2 text-sm mx-auto text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white font-bold">Log Out</button> */}
                                                <button onClick={() => handleSignOut()} class="Btn mx-auto">

                                                    <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                                                    <div class="text">Logout</div>
                                                </button>
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