import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="bg-white py-16 px-4 md:px-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-4xl font-bold text-lime-600 mb-6">Get in Touch</h2>
                        <p className="text-gray-600 mb-4">
                            You can contact us through any of the methods below or directly send a message by filling out the form.
                        </p>

                        <div className="space-y-4 mt-6">
                            <div>
                                <h4 className="font-semibold text-gray-700">Address:</h4>
                                <p className="text-gray-600">123/4 Example Road, Dhaka, Bangladesh</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-700">Phone:</h4>
                                <p className="text-gray-600">+880 1234 567 890</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-700">Email:</h4>
                                <p className="text-gray-600">info@yourcompany.com</p>
                            </div>
                        </div>

                        {/* Optional Google Map */}

                        <div className="mt-8">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.702363579003!2d90.40278867501617!3d23.793610878640955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7163736e453%3A0xb12cfac638de13ed!2sProgramming%20Hero!5e0!3m2!1sen!2sbd!4v1753526620844!5m2!1sen!2sbd"
                                width="100%"
                                height="250"
                                className="rounded-md shadow"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>"
                        </div>


                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Your Message</label>
                                <textarea
                                    rows="12"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-lime-600 text-white px-6 py-2 rounded-md hover:bg-lime-700 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Contact;