import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-900 text-gray-300 py-8 px-4  z-50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-semibold">Employee Management</h2>
                    <p className="text-sm">Empowering your workforce, efficiently.</p>
                </div>
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a href="/about" className="hover:text-white transition">About</a>
                    <a href="/contact" className="hover:text-white transition">Contact</a>
                    <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
                </div>
                <div>
                    <p className="text-xs">&copy; 2023 Employee Management. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};
export default Footer;