import { useEffect, useState } from 'react';
import Login from './Login';
import lottiAnimation from '../../../../assets/Sign In Animated.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Signup from './Signup';


const Handelath = () => {

    const [isSignup, setIsSignup] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActive(true);
        }, 1000); 

        return () => clearTimeout(timer);
    }, []);

    const handelSide = () => {
        setIsSignup(!isSignup);
        // console.log(isSignup);
    }
    console.log(isSignup);


    return (
        <div className='relative h-full w-full'>
            <div
                className={`flex w-[100%] h-screen `}
            >
                <div className={`flex w-full h-screen `}>
                    <div className={`flex w-full h-screen `}>
                        {/* Left Side - Login */}
                        <div className={`transition-transform duration-1000 ease-in-out ${isSignup ? "translate-x-[100%] " : "block"
                            } w-1/2 h-full flex justify-center items-center bg-cyan-50`}>
                            <Login></Login>
                        </div>
                        <div className={`transition-transform duration-1000 ease-in-out ${isSignup ? "-translate-x-[100%]" : ""
                            } w-1/2 h-full flex justify-center items-center bg-cyan-50`}>
                            <Lottie animationData={lottiAnimation} />
                        </div>
                        {/* Right Side - Signup */}

                    </div>
                </div>
            </div>


            <button onClick={handelSide} className='absolute flex items-center gap-2 top-3 justify-center right-3 bg-lime-500 text-white px-3 py-1 rounded-md hover:bg-lime-600'>
                {isSignup ? "Sign in" : "Sign up"}
                <FaArrowRightArrowLeft />
            </button>

        </div>
    );
};

export default Handelath;