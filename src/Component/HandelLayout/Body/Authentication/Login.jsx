import React from 'react';

const Login = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (


        <div class="w-1/2  h-screen  ">
            <div className='w-1/2 h-full flex justify-center items-center bg-cyan-50'>
                <form onSubmit={handleSubmit} class="flex flex-col justify-center border-[5px] rounded-2xl border-cyan-700 h-[70%] p-10 overflow-hidden gap-5 w-[70%]  mx-auto " action="#">
                    <h5 class="text-xl font-medium text-gray-900 text-center">Sign in to our platform</h5>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" name="email" id="email" class=" border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 " placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required />
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
                    <button type="submit" class="w-full text-white bg-linear-to-r from-cyan-500 to-cyan-700 hover:ring-4 ring-cyan-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                </form>
            </div>
        </div>

    );
};

export default Login;