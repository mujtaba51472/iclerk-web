'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Paragraph from '@/components/shared/Paragraph';

const testimonials = [
  {
    id: 1,
    name: "Jane Cooper",
    role: "Marketing Coordinator",
    img: "/assets/home/review.png",
    content: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk) I mean we had Long lines of prisoners fist fighting to use them."
  },
  {
    id: 2,
    name: "John Smith",
    role: "Product Manager",
    img: "/assets/home/review.png",
    content: "The product has completely transformed our workflow. The intuitive interface and powerful features have increased our team's productivity by at least 40% in just the first month of use."
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Operations Director",
    img: "/assets/home/review.png",
    content: "Exceptional customer service and a product that delivers on its promises. We've been using this solution for over a year now and it continues to impress with regular updates and improvements."
  },
  {
    id: 4,
    name: "Mike Davis",
    role: "CEO",
    img: "/assets/home/review.png",
    content: "As a CEO, I look for solutions that provide clear ROI. This platform has not only paid for itself within three months but has also given us valuable insights into our customer behavior."
  }
];

const TestimonialCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12 md:mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            See what our customers are saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            2,157 people have said how good we are
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop: Show two cards side by side */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8">
              {[0, 1].map((offset) => {
                const index = (currentIndex + offset) % testimonials.length;
                return (
                  <TestimonialCard 
                    key={testimonials[index].id} 
                    testimonial={testimonials[index]} 
                    index={offset} 
                  />
                );
              })}
            </div>
          </div>

          {/* Mobile: Show single card */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <TestimonialCard 
                key={currentIndex}
                testimonial={testimonials[currentIndex]} 
                index={0} 
              />
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-end mt-10 md:mt-12 gap-3">
            <motion.button
              onClick={prevSlide}
              className="relative p-3 rounded-full shadow-md transition-all duration-300 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            {/* Indicator dots */}
            <div className="flex items-center mx-4 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-indigo-600 scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextSlide}
              className="relative p-3 rounded-full shadow-md transition-all duration-300 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      className="relative bg-white rounded-xl p-8 h-full shadow-lg border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Decorative quote icon */}
      <Quote className="absolute top-6 right-6 w-10 h-10 text-indigo-100" />
      
      {/* Author info - Positioned above content */}
      <div className="flex flex-col items-center text-center mb-6 ">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flefx-shrink-0 shadow-md mb-4 border-2 border-indigo-100">
          <Image
            src={testimonial.img}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="font-bold text-gray-900 text-lg mb-1">
            {testimonial.name}
          </h3>
          <p className=" text-sm font-medium">
            {testimonial.role}
          </p>
        </div>
      </div>
      
      <Paragraph className='italic' text={testimonial.content} />
    </motion.div>
  );
};

export default TestimonialCards;