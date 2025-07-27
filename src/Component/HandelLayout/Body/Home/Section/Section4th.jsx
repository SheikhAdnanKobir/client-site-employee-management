import React from 'react';

const Section4th = () => {
    return (
        <div>
            <section className="bg-gray-100 py-12">
                <div className="max-w-6xl mx-auto px-4 md:flex md:items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
                        <p className="text-gray-600 mb-4">
                            আমরা একটি প্যাশনেট এবং উদ্ভাবনী টিম, যারা আধুনিক ওয়েব সলিউশন তৈরি করে থাকে। আমাদের লক্ষ্য হলো ক্লায়েন্টদের জন্য এমন ডিজিটাল অভিজ্ঞতা তৈরি করা, যা কার্যকর এবং টেকসই।
                        </p>
                        <p className="text-gray-600">
                            দীর্ঘদিনের অভিজ্ঞতা এবং প্রফেশনাল দক্ষতার মাধ্যমে আমরা নিশ্চিত করি যে, প্রতিটি প্রজেক্টই ইউনিক এবং ক্লায়েন্টদের সন্তুষ্টি নিশ্চিত করে।
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        {/* এখানে আপনি কোম্পানির টিম/অফিস/মিশনের ছবি বসাতে পারেন */}
                        {/* <img src="your-image-url.jpg" alt="Our Team" className="rounded-lg shadow-lg" /> */}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Section4th;