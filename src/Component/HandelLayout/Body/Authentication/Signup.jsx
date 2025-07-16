import { useForm } from 'react-hook-form';
import Axiossecure from './../../../Hooks/Axiossecure';
import PublicAxios from '../../../Hooks/PublicAxios';
import useAuth from '../../../Hooks/useAuth';
import 'flowbite';
import Divider from '@mui/material/Divider';
import { FaGoogle } from 'react-icons/fa6';



const img_hosting_key = import.meta.env.VITE_CLIENT_API_KEY;
const img_hosting_Api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

console.log(img_hosting_Api);


const Signup = () => {

    const { register, handleSubmit, reset } = useForm();
    const axiosSecureUrl = Axiossecure();
    const axiosPublicUrl = PublicAxios();
    const { signUpWithEmailPassword, user,mobileSize,setMobileSize } = useAuth();
    console.log(user);


    const submitForm = async (data) => {
        console.log(data, user);


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
            const imageUrl = response.data.data.display_url;
            signUpWithEmailPassword(data.email, data.password, data.name, imageUrl)
                .then(res => {
                    console.log(res);

                })
            const addUser = {
                name: data.name,
                email: data.email,
                password: data.password,
                role: data.role,
                admin: false,
                photoURL: imageUrl,
                bank_account_no: data.Bank_Account,
                designation: data.designation
            }
            const userRes = await axiosSecureUrl.post("/users", addUser);
            console.log(userRes.data);
            if (userRes.data.insertedId) {
                reset()
            }
        }

    }

    return (
        <div class={`w-full h-screen bg-lime-50 ${mobileSize?"":"animate__animated animate__zoomIn"}`}>
            <div className='w-full h-full flex justify-center items-center '>
                <form onSubmit={handleSubmit(submitForm)} class="flex flex-col w-11/12   justify-center  rounded-2xl shadow-[5px_5px_50px_10px_rgba(50,0,0,0.3)]  bg-green-50  p-5 gap-2 md:gap-5 md:w-[70%]  md:mx-auto " >
                    <h5 class="text-xl font-medium text-gray-900 text-center">Sign up palace</h5>
                    <div className=' w-full'>
                        <button type='button' className='hover:transform-content w-full ease-out duration-200 hover:text-lg flex justify-center items-center bg-white py-1 rounded-lg cursor-pointer ring-2 ring-lime-500'>
                            <FaGoogle className='text-red-600'></FaGoogle>
                            <span className="ml-2 font-semibold ">Sign Up with Google</span>
                        </button>
                        <div  className='mt-2 -mb-5'>
                            <Divider>Or</Divider>
                        </div>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                        <input type="text" {...register("name")} class=" border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-1.5 " placeholder="name@company.com" required />
                    </div>
                    <div class="grid grid-cols-3 gap-2 justify-center items-center  md:gap-5">
                        <div>
                            <label for="image" class="block  text-sm font-medium text-gray-900 ">Your photo</label>
                            <input type="file" {...register("image")} class=" border border-gray-300 text-gray-900 text-sm rounded-lg hover:bg-lime-500 cursor-pointer block w-full p-1.5 " required />
                        </div>
                        <div>
                            <label for="role" class="block mb-2 text-sm font-medium text-gray-900 ">Your role</label>
                            <select {...register("role")} class=" border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-1.5 " required>
                                <option value="" disabled selected>Select your role</option>
                                <option value="employee">Employee</option>
                                <option value="employee">Hr</option>
                            </select>
                        </div>
                        <div>
                            <label for="designation" class="block mb-2 text-sm font-medium text-gray-900">Your designation</label>
                            <select
                                {...register("designation")}
                                class="border border-gray-300 cursor-pointer text-gray-900 text-sm rounded-lg block w-full p-1.5"
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
                    <div className=''>
                        <label for="Bank_Account" class="block mb-2 text-sm font-medium text-gray-900 ">Your Bank Account</label>
                        <input type="text" {...register("Bank_Account")} class=" border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-1.5 " required />
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" {...register("email")} class=" border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-1.5 " placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                        <input type="password" {...register("password")} placeholder="••••••••" class=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1.5 " required />
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 cursor-pointer border border-gray-300 rounded-sm bg-gray-50" required />
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="ms-auto text-sm text-pink-700 hover:underline ">Forget Password?</a>
                    </div>
                    <button type="submit" class="w-full cursor-pointer text-white bg-linear-to-r from-lime-500 to-cyan-500 hover:ring-4 ring-cyan-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create Account</button>
                    <div className='block md:hidden'>
                        <p>Already have an account?<button type='button' onClick={()=>setMobileSize(!mobileSize)} className=' text-lime-600 font-black ml-1 hover:underline cursor-pointer'>Sign-In</button></p>
                        
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Signup;