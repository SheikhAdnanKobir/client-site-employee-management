import React from 'react';

const Section1st = () => {
    return (
        <div>
            <section className="bg-gray-50 py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
                    <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
                        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold text-lime-600 mb-2">Web Development</h3>
                            <p className="text-gray-600">We build fast, responsive, and SEO-friendly websites tailored to your needs.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold text-lime-600 mb-2">UI/UX Design</h3>
                            <p className="text-gray-600">Modern and user-centric design for a better digital experience.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold text-lime-600 mb-2">Digital Marketing</h3>
                            <p className="text-gray-600">Reach your audience with effective SEO, SMM, and email marketing strategies.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Section1st;