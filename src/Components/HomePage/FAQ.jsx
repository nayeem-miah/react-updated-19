import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is EID Festival?",
            answer: "EID Festival is a special celebration of the Islamic holiday Eid. It's a time to gather, celebrate, and enjoy the festivities with family, friends, and loved ones."
        },
        {
            question: "How do I participate in the EID Festival?",
            answer: "You can participate in the EID Festival by visiting our website and signing up for various events and activities. Stay tuned for our festival schedule and enjoy the fun!"
        },
        {
            question: "Are there any special discounts for EID?",
            answer: "Yes! We offer exclusive EID discounts on select items. Be sure to check out our store for special offers during the festival season."
        },
        {
            question: "How can I contact customer support during the festival?",
            answer: "You can reach our customer support team through our contact page. We will also have a live chat feature available to assist you during the festival days."
        },
        {
            question: "Is there a registration fee for the EID Festival events?",
            answer: "Most of our EID Festival events are free to join, but some may require a small registration fee for exclusive experiences. Check the event details for more information."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=" py-12 px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Frequently Asked Questions
            </h2>
            <div className="space-y-4 ">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg overflow-hidden"
                    >
                        <button
                            className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="text-lg font-semibold text-gray-700">{faq.question}</h3>
                            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        {openIndex === index && (
                            <div className="px-6 py-4 text-gray-600 bg-white">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;