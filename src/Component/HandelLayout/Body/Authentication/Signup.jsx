import { useForm } from 'react-hook-form';
import PublicAxios from '../../../Hooks/PublicAxios';
import useAuth from '../../../Hooks/useAuth';
import 'flowbite';
import Divider from '@mui/material/Divider';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa6';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';



const img_hosting_key = import.meta.env.VITE_CLIENT_API_KEY;
const img_hosting_Api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

// console.log(img_hosting_Api);


const Signup = () => {

    const { register, handleSubmit, reset } = useForm();
    const axiosPublicUrl = PublicAxios();
    const { signUpWithEmailPassword, user, singInGoogle, setMobileSize, mobileSize } = useAuth();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    // console.log(user);

    if (user) {
        navigate("/dashboard")
    }


    const submitForm = async (data) => {
        // console.log(data, user);

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

        if (!regex.test(data.password)) {
            // Show an error message
            Swal.fire({
                position: "top-left",
                icon: "error",
                title: "Password mest contain at least 6 characters, including (A-Z), (a-z), (0-9), and special characters.",
                showConfirmButton: false,
                timer: 5000
            });
            return;
        }

        const imgeFile = { image: data.image[0] };
        const response = await axiosPublicUrl.post(img_hosting_Api,
            imgeFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        // const imageUrl = response;
        // console.log(imageUrl);


        if (response.data.success) {
            const photoUrl = response.data.data.display_url;

            signUpWithEmailPassword(data.email, data.password, data.name, photoUrl, data.role, data.designation)

        }

    }

    const signInWithGoogle = () => {
        singInGoogle()
    }


    return (
        <div class={`w-full h-screen bg-green-50`}>
            <div className='w-full h-full flex justify-center items-center '>
                <form onSubmit={handleSubmit(submitForm)} class="flex flex-col w-11/12  animate__animated animate__zoomIn  justify-center  rounded-2xl shadow-[0px_0px_10px_0px_rgba(0,50,0,0.3)]  bg-white  p-5 gap-2 md:gap-5 md:w-[70%]  md:mx-auto " >
                    <h5 class="text-xl font-medium text-gray-900 text-center">Sign up palace</h5>
                    <div className=' w-full'>
                        <button onClick={signInWithGoogle} type='button' className='hover:transform-content w-full ease-out duration-200 hover:text-lg flex justify-center items-center bg-white py-1 rounded-lg cursor-pointer ring-2 ring-lime-500'>
                            <FaGoogle className='text-red-600'></FaGoogle>
                            <span className="ml-2 font-semibold ">Sign Up with Google</span>
                        </button>
                        <div className='mt-2 -mb-5'>
                            <Divider>Or</Divider>
                        </div>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                        <input type="text" {...register("name")} class=" border border-lime-500 hover:border-2 hover:border-lime-500 text-gray-900 text-sm rounded-lg   block w-full p-1.5 " placeholder="name@company.com" required />
                    </div>
                    <div class="grid grid-cols-3 gap-2 justify-center items-center  md:gap-5">
                        <div>
                            <label for="image" class="block  text-sm font-medium text-gray-900 ">Your photo</label>
                            <input type="file" {...register("image")} accept='image/*' class=" border border-lime-500 hover:border-2 text-gray-900 text-sm rounded-lg hover:border-lime-500 cursor-pointer block w-full p-1.5 " required />
                        </div>
                        <div>
                            <label for="role" class="block mb-2 text-sm font-medium text-gray-900 ">Your role</label>
                            <select {...register("role")} class=" border cursor-pointer border-lime-500 hover:border-2 hover:border-lime-500 text-gray-900 text-sm rounded-lg   block w-full p-1.5 " required>
                                <option value="" disabled selected>Select your role</option>
                                <option value="employee">Employee</option>
                                <option value="employee">Hr</option>
                            </select>
                        </div>
                        <div>
                            <label for="designation" class="block mb-2 text-sm font-medium text-gray-900">Your designation</label>
                            <select
                                {...register("designation")}
                                class="border border-lime-500 hover:border-2 hover:border-lime-500 cursor-pointer text-gray-900 text-sm rounded-lg block w-full p-1.5"
                                required
                            >
                                <option value="" disabled selected>Select designation</option>
                                <option value="Sales Assistant">Sales Assistant</option>
                                <option value="Support Executive">Support Executive</option>
                                <option value="Digital Marketer">Digital Marketer</option>
                                <option value="Content Writer">Content Writer</option>
                                <option value="Field Officer">Field Officer</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" {...register("email")} class=" border border-lime-500 hover:border-2 hover:border-lime-500 text-gray-900 text-sm rounded-lg   block w-full p-1.5 " placeholder="name@company.com" required />
                    </div>
                    <div className='relative'>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                        <input type={show ? "text" : "password"} {...register("password")} placeholder="Enter Password" class=" border border-lime-500 hover:border-2 hover:border-lime-500 text-gray-900 text-sm rounded-lg block w-full p-1.5 " required />
                        <div className='absolute top-9 right-4'>
                            {
                                show ? <button type='button' onClick={() => setShow(!show)}><FaEye></FaEye></button> : <button type='button' onClick={() => setShow(!show)}><FaEyeSlash></FaEyeSlash></button>
                            }
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input type="checkbox" class="w-4 h-4 cursor-pointer border border-lime-500 hover:border-2 hover:border-lime-500 rounded-sm bg-gray-50" required />
                            </div>
                            <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a class="ms-auto text-sm text-pink-700 hover:underline ">Forget Password?</a>
                    </div>
                    <button type="submit" class="w-full cursor-pointer border-2 border-lime-500 text-white bg-linear-to-r from-lime-500 to-cyan-500 transform hover:scale-105 transition-transform duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create Account</button>
                    <div className='block md:hidden'>
                        <p>Already have an account?<button type='button' onClick={() => setMobileSize(!mobileSize)} className=' text-lime-600 font-black ml-1 hover:underline cursor-pointer'>Sign-In</button></p>

                    </div>
                </form>
            </div>
        </div>

    );
};

export default Signup;