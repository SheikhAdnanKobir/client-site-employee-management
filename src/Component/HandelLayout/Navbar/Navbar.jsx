import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'flowbite';


const Navbar = () => {
    return (
        <div>
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/contact">Contact</NavLink> */}




            <nav class="bg-lime-600">
                <div class=" flex  items-center justify-between mx-auto p-3">
                    <span href="" class="flex items-center justify-center bg-orange-500 gap-0.5" >
                        <Link to={"/"}><img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" /></Link>
                        <span class=" text-2xl font-semibold " className='text-black font-black'>Flowbite</span>
                    </span>

                    <div class="" >
                        <ul class="flex justify-between gap-3 text-sm font-semibold  border border-gray-100 rounded-lg bg-gray-50">
                            <li>
                                <NavLink to={"/"} class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard"} class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"} class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
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