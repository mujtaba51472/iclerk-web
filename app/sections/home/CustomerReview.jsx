'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HomeSectionHeading from '../../components/shared/Heading';
import HomeParagraph from '../../components/shared/Paragraph';
import SectionHeading from '../../components/shared/Heading';

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
    content: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk) I mean we had Long lines of prisoners fist fighting to use them."
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Operations Director",
    img: "/assets/home/review.png",
    content: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk) I mean we had Long lines of prisoners fist fighting to use them."
  },
  {
    id: 4,
    name: "Mike Davis",
    role: "CEO",
    img: "/assets/home/review.png",
    content: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk) I mean we had Long lines of prisoners fist fighting to use them."
  }
];

const TestimonialCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
    );
  };

  return (
    <section className=" overflow-hidden">
      <div className="max-w-7xl mx-auto my-20">
        <motion.div 
          className="text-center mb-16 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading text="See what our customers are saying" />
          <HomeParagraph text="2,157 people have said how good we are" />
        </motion.div>

        {/* Testimonial Cards Container */}
        <div className="relative" style={{ perspective: '1200px' }}>
          {/* Desktop View - Show 2 cards */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, i) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
              ))}
            </div>
          </div>

          {/* Mobile View - Show 1 card */}
          <div className="md:hidden">
            <div className="max-w-sm mx-auto">
              <TestimonialCard testimonial={testimonials[currentIndex]} index={0} />
            </div>
          </div>

          {/* Navigation Buttons */}
          <motion.div 
            className="flex justify-end mt-8 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Previous Button */}
            <motion.button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`relative p-3 rounded-full shadow-lg transition-all duration-300 text-white
                ${currentIndex === 0
                  ? "bg-gray-300 cursor-not-allowed opacity-60"
                  : "bg-gradient-to-r from-blue-500 to-purple-600"
                }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="relative z-10" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              onClick={nextSlide}
              disabled={currentIndex === testimonials.length - 2}
              className={`relative p-3 rounded-full shadow-lg transition-all duration-300 text-white
                ${currentIndex === testimonials.length - 2
                  ? "bg-gray-300 cursor-not-allowed opacity-60"
                  : " bg-secondary "
                }`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="relative z-10" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  // Alternate tilt per card (left vs right)
  const tilt = index % 2 === 0 ? -6 : 6;

  return (
    <motion.div
      className="relative bg-white rounded-2xl p-8 h-full "
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
        transformStyle: 'preserve-3d',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.08)',
      }}
      initial={{ 
        opacity: 0, 
        y: 80, 
        rotateY: tilt, 
        rotateX: -5,
        scale: 0.9 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateY: tilt, 
        rotateX: 0,
        scale: 1 
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 80, damping: 20 }}
    >
      {/* Profile Section */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 ring-2 ring-white shadow-md">
          <Image
            src={testimonial.img}
            alt={testimonial.name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-lg mb-1">
            {testimonial.name}
          </h3>
          <p className="text-primary text-sm font-medium">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Testimonial Content */}
      <p className="text-black leading-relaxed text-base">
        "{testimonial.content}"
      </p>

      {/* 3D overlay for depth */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.03) 100%)',
          transform: 'translateZ(-1px)',
        }}
      />
    </motion.div>
  );
};

export default TestimonialCards;
