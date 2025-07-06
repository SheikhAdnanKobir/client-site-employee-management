// import React, { use } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import 'flowbite';
import logo from '../../../assets/logo1.svg'

const Navbar = () => {

    const location = useLocation();

    // const handleLogout = () => {
    //     // Logic for handling logout
    // }

    return (
        <div>
            <nav class="">
                <div class=" flex  items-center justify-between mx-auto p-3 bg-lime-50/40">
                    <span href="" >
                        <Link to={"/"}><img src={logo} class="h-7" alt="Flowbite Logo" /></Link>
                    </span>

                    <div class="" >
                        <ul class="flex justify-between gap-5 text-sm font-semibold  border border-gray-100 rounded-lg bg-green-100 py-1 px-2">
                            <li>
                                <NavLink to={"/"} className={location.pathname === "/"?"bg-lime-500 py-1.5 px-2 text-white rounded-full":"text-lime-800"} class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard"} className={location.pathname === "/dashboard"?"bg-lime-500 py-1.5 px-2 text-white rounded-full":"text-lime-800"} class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"} className={location.pathname === "/contact"?"bg-lime-500 py-1.5 px-2 text-white rounded-full":"text-lime-800"} class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                            </li>

                        </ul>
                    </div>
                    <div class="flex items-center ">
                        <button type="button" class="flex text-sm bg-gray-800 rounded-full ">

                            <img class="w-7 h-7 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                        </button>

                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Navbar;