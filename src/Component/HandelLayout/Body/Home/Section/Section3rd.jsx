import React from 'react';

const Section3rd = () => {
    return (
        <div>
            <section className="bg-gray-50 py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Portfolio</h2>
                    <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
                        {/* এখানে ছবি বসান */}
                        {/* <img src="your-image-link" alt="Project 1" className="rounded-lg shadow" /> */}
                        {/* <img src="your-image-link" alt="Project 2" className="rounded-lg shadow" /> */}
                        {/* <img src="your-image-link" alt="Project 3" className="rounded-lg shadow" /> */}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Section3rd;