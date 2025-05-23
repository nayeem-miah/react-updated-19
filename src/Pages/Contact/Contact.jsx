import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic
        toast.success("Message sent successfully!");
    };

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ContactBanner />
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6 mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Your email"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Write your message here"
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-8 py-3 m-2 text-lg font-semibold rounded bg-yellow-500 text-white shadow-lg w-full hover:bg-yellow-600"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                {/* Social Media Links Section */}
                <div className="mt-12 text-center">
                    <p className="text-lg text-gray-700">
                        You can also connect with us on social media or reach us directly through the following methods:
                    </p>
                    <div className="mt-4 flex justify-center space-x-6">
                        <a href="https://facebook.com" className="text-indigo-600 hover:text-indigo-800">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" className="text-indigo-600 hover:text-indigo-800">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://linkedin.com" className="text-indigo-600 hover:text-indigo-800">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactBanner = () => {
    return (
        <section className="bg-gradient-to-r from-yellow-300 to-orange-500 text-white py-12 px-4 md:px-8 rounded-lg shadow-md">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-lg mb-6">
                    Have any questions or feedback? We'd love to hear from you!
                </p>
                <a
                    href="mailto:your-email@example.com"
                    className="bg-blue-600 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300"
                >
                    Get In Touch
                </a>
            </div>
        </section>
    );
};

export default Contact;