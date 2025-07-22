import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link, useNavigate } from 'react-router';
import Divider from '@mui/material/Divider';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa6';


const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { signInEmailAndPassword, user, mobileSize, setMobileSize, singInGoogle } = useAuth();
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    // console.log(user?.displayName);


    const loginDataFrom = (data) => {
        signInEmailAndPassword(data.email, data.password)
    }


    // Redirect to dashboard if user is logged in
    // console.log(user);
    if (user) {
        navigate("/dashboard")
    }

    const singInWithGoogle = () => {
        singInGoogle()
    }

    return (


        <div class={`w-full h-screen bg-green-50`}>
            <div className='w-full h-full flex justify-center items-center'>
                <form onSubmit={handleSubmit(loginDataFrom)} class=" animate__animated animate__zoomIn flex flex-col justify-center rounded-2xl shadow-[0px_0px_10px_0px_rgba(0,50,0,0.3)] bg-white border-cyan-700 p-10  gap-5 w-11/12 md:w-[70%] mx-auto " >
                    <h5 class="text-xl font-medium text-gray-900 text-center">Sign in palace</h5>
                    <div className='w-full'>
                        <button onClick={singInWithGoogle} type='button' className='hover:transform-content w-full ease-out duration-200 hover:text-lg flex justify-center items-center bg-white py-1 rounded-lg cursor-pointer ring-2 ring-lime-500'>
                            <FaGoogle className='text-red-600'></FaGoogle>
                            <span className="ml-2 font-semibold ">Sign In with Google</span>
                        </button>
                        <div className='mt-2 -mb-5'>
                            <Divider>Or</Divider>
                        </div>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" {...register("email")} class=" border border-gray-300 text-gray-900 text-sm rounded-lg p-1.5  block w-full " placeholder="name@company.com" required />
                    </div>
                    <div className='relative'>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                        <input type={show ? "text" : "password"} {...register("password")} placeholder="Enter Password" class=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 " required />
                        <div className='absolute top-9 right-4'>
                            {
                                show ? <button type='button' onClick={() => setShow(!show)}><FaEye></FaEye></button> : <button type='button' onClick={() => setShow(!show)}><FaEyeSlash></FaEyeSlash></button>
                            }
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input type="checkbox" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50" required />
                            </div>
                            <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a class="ms-auto text-sm text-pink-700 hover:underline ">Forget Password?</a>
                    </div>
                    <div>
                        <button type="submit" class="w-full text-white bg-linear-to-r from-lime-500 to-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center transform hover:scale-105 transition-transform duration-300">Login to your account</button>
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