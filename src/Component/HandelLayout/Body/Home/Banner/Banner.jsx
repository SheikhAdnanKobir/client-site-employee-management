import React, { useEffect, useState } from 'react';
import bannerImg from "../../../../../assets/image1.png"
import CountUp from '../../../../Hooks/CountUp';
import TextType from '../../../../Hooks/TextType';

const Banner = () => {

    const [delayedClass, setDelayedClass] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayedClass(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='bg-lime-500/10 relative'>
            <div className='absolute top-7 md:top-10 text-center  w-full  2'> 
                <TextType
                className='text-4xl md:text-5xl font-bold text-lime-800'
                    text={[
                        "Team Collaboration",
                        "Task Automation",
                        "Seamless Workflow",
                        "Productivity Boost",
                        "Smart Planning",
                        "Project Tracking",
                        "Goal Oriented",
                        "Time Management",
                        "Employee Insights",
                        "Scalable Solutions"
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="_"
                />
            </div>
            <div className='md:flex md:h-[500px] max-w-[1440px] mx-auto items-center justify-center pt-14 md:pt-0'>
                <div className='p-6'>
                    <h1 className='text-3xl md:text-4xl font-bold text-lime-800'>
                        Empowering Teams, Driving Results
                    </h1>
                    <p className='mt-2 text-lime-600 text-lg'>
                        We provide innovative solutions tailored to boost your team's productivity, enhance collaboration, and streamline daily operations. Whether you're a startup or a large enterprise, our platform adapts to your workflow and helps you scale with confidence.
                    </p>
                    <button className='mt-4 px-6 py-2 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-700 transition duration-300'>
                        Explore Our Services
                    </button>
                </div>

                <div className=''>
                    <div className='max-w-96 items-end relative'>
                        <div className='border-4 absolute top-56 left-14 md:left-0 md:top-[260px] max-w-56 max-h-32 border-lime-500 py-2 px-2 rounded-lg shadow-lg bg-white'>
                            <div className="text-center">
                                <h2 className='text-2xl font-semibold text-lime-800'>Our Employee</h2>
                                <p className='text-lime-600'>Watch the numbers grow!</p>
                            </div>
                            <div className="count-up-text  text-center text-5xl w-full font-bold text-lime-500">
                                <CountUp
                                    from={0}
                                    to={500}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className='text-5xl font-bold text-lime-500 mx-auto text-center '
                                /><span className={` ${delayedClass ? "opacity-70 animate__animated animate__zoomIn" : "hidden"}`}>+</span>
                            </div>
                        </div>
                        <div>
                            <img className='max-w-40 ml-[75%] -mt-[22%] md:ml-56 md:mt-0' src={bannerImg} alt="Banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;