import React, { } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link, useNavigate } from 'react-router';
import Divider from '@mui/material/Divider';
import { FaGoogle } from 'react-icons/fa6';


const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { signInEmailAndPassword, user, mobileSize, setMobileSize } = useAuth();
    const navigate = useNavigate()
    console.log(mobileSize);


    const loginDataFrom = (data) => {
        signInEmailAndPassword(data.email, data.password)
    }

    if (user) {
        navigate("/dashboard")
    }

    return (


        <div class={`w-full h-screen bg-lime-50 ${mobileSize ? "" : "animate__animated animate__zoomIn"}`}>
            <div className='w-full h-full flex justify-center items-center'>
                <form onSubmit={handleSubmit(loginDataFrom)} class="flex flex-col justify-center rounded-2xl shadow-[5px_5px_50px_10px_rgba(50,0,0,0.3)] bg-green-50 border-cyan-700 p-10  gap-5 w-11/12 md:w-[70%] mx-auto " >
                    <h5 class="text-xl font-medium text-gray-900 text-center">Sign in palace</h5>
                    <div className='w-full'>
                        <button type='button' className='hover:transform-content w-full ease-out duration-200 hover:text-lg flex justify-center items-center bg-white py-1 rounded-lg cursor-pointer ring-2 ring-lime-500'>
                            <FaGoogle className='text-red-600'></FaGoogle>
                            <span className="ml-2 font-semibold ">Sign In with Google</span>
                        </button>
                         <div  className='mt-2 -mb-5'>
                            <Divider>Or</Divider>
                        </div>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" {...register("email")} id="email" class=" border border-gray-300 text-gray-900 text-sm rounded-lg p-1.5  block w-full " placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                        <input type="password" {...register("password")} id="password" placeholder="••••••••" class=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 " required />
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50" required />
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="ms-auto text-sm text-pink-700 hover:underline ">Forget Password?</a>
                    </div>
                    <div>
                        <button type="submit" class="w-full text-white bg-linear-to-r from-lime-500 to-cyan-500 hover:ring-4 ring-cyan-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                    </div>
                    <div className='block md:hidden'>
                        <p>Don’t have an account?<button type='button' onClick={() => setMobileSize(!mobileSize)} className=' text-lime-600 font-black hover:underline ml-1 cursor-pointer'>Sign-Up</button></p>

                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;