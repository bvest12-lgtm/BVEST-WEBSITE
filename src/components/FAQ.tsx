'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is BVEST?",
    answer: "BVEST is the official and Annual Technical Fest of Bharati Vidyapeeth&apos;s College of Engineering, New Delhi."
  },
  {
    question: "What is BVEST'25?",
    answer: "BVEST 2025 is the current and 12th edition of BVCOE&apos;s annual Technical Fest, being managed by the Department of Electronics and Communication Engineering"
  },
  {
    question: "When is it?",
    answer: "BVEST 2025 is going to take place on the 8th and 9th of October 2025."
  },
  {
    question: "What type of events will be there?",
    answer: "BVEST'25 brings before you its flagship hackathon, EcoCode and 15+ events comprising gaming, coding, robot wars, ideathons, and much more!"
  },
  {
    question: "Who can take part?",
    answer: "All college students are allowed to participate!"
  },
  {
    question: "Where will it take place?",
    answer: "All the events of BVEST 2025 will take place at Bharati Vidyapeeth's College of Engineering, New Delhi."
  },
  {
    question: "How to reach the campus?",
    answer: "Our campus is located just a few steps away from Paschim Vihar East Metro Station, New Delhi."
  },
  {
    question: "What do I need to carry?",
    answer: "You are required to carry valid identity proof like your college I-Card and Aadhaar card for getting entry inside the campus."
  },
  {
    question: "How to register?",
    answer: "You can check out the 'Events' section on our website and discover the events and their registration links there."
  },
  {
    question: "What is the registration fee?",
    answer: "The registration fee is free for Hackathon and some events and is paid for the rest."
  },
  {
    question: "Will I be provided with any accommodation?",
    answer: "No, at this point we are not providing the participants for BVEST with any accommodation."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#36D399] via-[#38BDF8] to-[#2563EB] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about BVEST 2025. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full px-6 py-4 text-left rounded-lg transition-all duration-300 flex justify-between items-center ${
                  openIndex === index 
                    ? 'bg-gradient-to-r from-[#36D399]/10 to-[#38BDF8]/10 border-l-4 border-[#38BDF8]' 
                    : 'bg-gray-800 hover:bg-gray-700/50'
                }`}
              >
                <span className="font-medium text-white text-lg">{item.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#38BDF8]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-800/50 rounded-b-lg">
                      <p className="text-gray-300">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-6">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#36D399] to-[#38BDF8] text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
