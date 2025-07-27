import React from 'react';
import img404 from './assets/404.gif'; // Assuming you have a 404 image in your assets folder

const PageError = () => {
    return (
        <div className='relative'>
            <div className="text-center mt-8 absolute top-0 left-0 right-0">
                <a href="/" className="text-lime-600 font-bold hover:underline">Go back to Home</a>
            </div>
            <div className="min-h-screen mx-auto flex flex-col items-center justify-center">
                <div className='absolute top-20'>
                    <h1 className="text-4xl text-center md:text-6xl font-bold text-lime-800">Page Not Found!</h1>
                    <h1 className="text-7xl  font-extrabold text-red-600 text-center">404</h1>
                </div>

                <div className="flex justify-center">
                    <img src={img404} alt="404 Not Found" />
                </div>
            </div>
            
        </div>
    );
};

export default PageError;