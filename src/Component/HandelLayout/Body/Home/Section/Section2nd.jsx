import React from 'react';

const Section2nd = () => {
    return (
        <div>
            <section className="bg-white py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Testimonials</h2>
                    <div className="relative overflow-hidden">
                        {/* স্লাইডার লাইব্রেরি দিয়ে ইমপ্লিমেন্ট করুন (যেমন Swiper বা Slick) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-6 bg-gray-100 rounded-lg shadow">
                                <p className="text-gray-700 mb-4">"Exceptional service! Delivered everything on time and beyond expectations."</p>
                                <h4 className="font-semibold text-lime-600">- John Doe</h4>
                            </div>
                            <div className="p-6 bg-gray-100 rounded-lg shadow">
                                <p className="text-gray-700 mb-4">"Great communication and professional approach. Highly recommended!"</p>
                                <h4 className="font-semibold text-lime-600">- Sarah Lee</h4>
                            </div>
                            <div className="p-6 bg-gray-100 rounded-lg shadow">
                                <p className="text-gray-700 mb-4">"Fantastic design and development skills. Would love to work again."</p>
                                <h4 className="font-semibold text-lime-600">- Michael Scott</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Section2nd;