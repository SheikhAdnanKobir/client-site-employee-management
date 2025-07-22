import { useState } from 'react';
import Login from './Login';
import lottiAnimation from '../../../../assets/Sign In Animated.json'
import lottievedio from '../../../../assets/singUP.json'
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router';
import { FaArrowRightArrowLeft, FaGoogle, FaHouse } from "react-icons/fa6";
import Signup from './Signup';
import useAuth from '../../../Hooks/useAuth';
import 'animate.css';


const Handelath = () => {

    const [isSignup, setIsSignup] = useState(false);
    const [active, setActive] = useState(false);
    const { mobileSize } = useAuth();
    const navigate = useNavigate()

    const handleClick = () => {
        setTimeout(() => {
            setActive(!active);
        }, 1000);
    };

    const backHome = () => {
        navigate(-1);
    }

    const handelSide = () => {
        setIsSignup(!isSignup);
        // console.log(isSignup);
    }
    // console.log(isSignup);


    return (
        <div>
            <div className='relative w-full hidden md:block'>
                <button onClick={backHome} className={`absolute h-[52px] z-20 flex items-center  justify-center  text-sm ml-1  top-[2%]  text-black border-4 border-lime-500 hover:border-lime-400 font-bold px-1 py-1 bg-white  rounded-md `}>
                    <FaHouse className='text-lime-500 mr-1 '></FaHouse>
                    Back to home
                </button>

                <button onClick={() => { handelSide(); handleClick(); }} className={`absolute z-20  flex items-center gap-2 justify-center left-[46%] right-[46%] top-1/2 bg-lime-500 text-white px-1 py-1 rounded-md hover:bg-lime-600`}>
                    {isSignup ? "Sign in" : "Sign up"}
                    <FaArrowRightArrowLeft />
                </button>
                <div className="  flex w-[100%]">
                    <div className={`flex w-full h-screen `}>
                        <div className={`flex w-full h-screen `}>
                            {/* Left Side - Login */}
                            <div className={`transition-transform duration-1000 ease-in-out z-10 ${active ? "hidden" : "block"} ${isSignup ? "translate-x-[100%] " : ""} w-1/2 h-screen flex justify-center items-center`}>
                                <Login></Login>
                            </div>

                            {/* Right Side - Signup */}
                            <div className={`transition-transform duration-1000 ease-in-out z-10 ${active ? "block" : "hidden"} ${isSignup ? "block translate-x-[100%]" : ""} w-1/2 h-screen flex justify-center items-center`}>
                                <Signup></Signup>
                            </div>

                            <div className={`transition-transform duration-1000 ease-in-out animate__animated animate__zoomIn ${active ? "hidden" : "block"} ${isSignup ? "-translate-x-[100%] " : ""
                                } w-1/2 h-full flex justify-center items-center `}>
                                <Lottie className='w-full h-full' animationData={lottiAnimation} />
                            </div>
                            <div className={`transition-transform duration-1000 ease-in-out animate__animated animate__zoomIn  ${active ? "block" : "hidden"} ${isSignup ? "-translate-x-[100%] " : ""
                                } w-1/2 h-full flex  justify-center items-center `}>
                                <Lottie className='w-full h-full' animationData={lottievedio} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='block relative md:hidden'>
                <button onClick={backHome} className={`absolute z-20 flex items-center  justify-center  text-sm ml-1  top-[1%]  text-black border-4 border-lime-500 hover:border-lime-400 font-bold px-1 py-1 bg-white  rounded-md `}>
                    <FaHouse className='text-lime-500 mr-1 '></FaHouse>
                    Back to home
                </button>
                {
                    mobileSize ?
                        <div className=''>

                            <Signup></Signup>
                        </div>

                        :

                        <div className=''>
                            <Login></Login>
                        </div>
                }


            </div>
        </div>
    );
};

export default Handelath;