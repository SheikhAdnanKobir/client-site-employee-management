import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import 'flowbite';
import { FaChartLine, FaUserShield } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import Axiossecure from './../../../Hooks/Axiossecure';
import useAuth from '../../../Hooks/useAuth';

const Dashboard = () => {

    const axiosSecureUrl = Axiossecure();
    const { user } = useAuth()
    const [show, setShow] = useState(false);


    const acctiv = () => {
        setShow(!show)
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


    return (
        <div className='flex items-center relative justify-center min-h-screen '>

            <div>
                <button onClick={acctiv} type="button" class=" absolute top-3 left-1.5 text-gray-500 rounded-lg sm:hidden bg-white  ring-2 ring-lime-600 hover:bg-lime-500 ">
                    <TbLayoutSidebarRightCollapse className='text-4xl text-lime-500 hover:text-white' />
                </button>

                <aside className={`left-0 absolute top-0 w-52 h-screen transition-transform -translate-x-full ${show ? "translate-x-0" : ""} sm:translate-x-0 `} >
                    <div class="h-full px-3 py-4  border-r shadow-md  border-gray-200 bg-slate-50 ">
                        <ul class="space-y-2 font-medium">
                            <li class="flex items-end justify-end md:hidden">
                                <button type='button' onClick={acctiv}>
                                    <IoArrowBack className='text-2xl border-2 hover:bg-lime-500 hover:text-white font-bold border-lime-500 rounded-full p-1' />
                                </button>
                            </li>
                            <li class="flex items-center justify-center ">
                                <NavLink to={"/dashboard"} class="p-2 ">
                                    <div className='flex items-center justify-center'>
                                        <FaChartLine className='text-2xl text-lime-500' />
                                        <span class="ms-3 text-gray-700">Dashboard</span>
                                    </div>

                                </NavLink>
                            </li>
                            {
                                user?.email &&
                                <ul class="space-y-2 font-medium">
                                    <li class="flex items-center justify-center border-b pb-2 mb-2">
                                        <NavLink to={"/dashboard"} class="p-2 ">
                                            <div className='flex items-center justify-center'>
                                                <FaUserShield className='text-2xl text-lime-500' />
                                                <span class="ms-3 text-gray-700">
                                                    {

                                                    }
                                                </span>
                                            </div>

                                        </NavLink>
                                    </li>
                                    <li class="flex items-center justify-center">
                                        <NavLink to={"/dashboard"} class="p-2 ">
                                            <div className='flex items-center justify-center'>
                                                <FaChartLine className='text-2xl text-lime-500' />
                                                <span class="ms-3 text-gray-700">Dashboard</span>
                                            </div>

                                        </NavLink>
                                    </li>
                                    <li class="flex items-center justify-center">
                                        <NavLink to={"/dashboard"} class="p-2 ">
                                            <div className='flex items-center justify-center'>
                                                <FaChartLine className='text-2xl text-lime-500' />
                                                <span class="ms-3 text-gray-700">Dashboard</span>
                                            </div>

                                        </NavLink>
                                    </li>
                                    <li class="flex items-center justify-center">
                                        <NavLink to={"/dashboard"} class="p-2 ">
                                            <div className='flex items-center justify-center'>
                                                <FaChartLine className='text-2xl text-lime-500' />
                                                <span class="ms-3 text-gray-700">Dashboard</span>
                                            </div>

                                        </NavLink>
                                    </li>
                                </ul>

                            }

                        </ul>
                        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                            <li class="flex items-center justify-center">
                                <NavLink to={"/dashboard"} class="p-2 ">
                                    <div className='flex items-center justify-center'>
                                        <FaChartLine className='text-2xl text-lime-500' />
                                        <span class="ms-3 text-gray-700">Dashboard</span>
                                    </div>

                                </NavLink>
                            </li>
                            <li class="flex items-center justify-center">
                                <NavLink to={"/dashboard"} class="p-2 ">
                                    <div className='flex items-center justify-center'>
                                        <FaChartLine className='text-2xl text-lime-500' />
                                        <span class="ms-3 text-gray-700">Dashboard</span>
                                    </div>

                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>

            <div class="p-4 w-full ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;