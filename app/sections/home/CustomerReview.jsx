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
      <div className=" mx-auto my-20">
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

        <div className="relative    " style={{ perspective: '1200px' }}>
          <div className="hidden md:block">
            <div className="grid grid-cols-2  gap-36 mx-auto">
              {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, i) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <div className=" mx-auto">
              <TestimonialCard testimonial={testimonials[currentIndex]} index={0} />
            </div>
          </div>

          <motion.div 
            className="flex justify-end mt-8 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`relative p-3 rounded-full shadow-lg transition-all duration-300 text-white
                ${currentIndex === 0
                  ? "bg-gray-300 cursor-not-allowed opacity-60"
                  : " bg-secondary "
                }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="relative z-10" />
            </motion.button>

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
  const tilt = index % 2 === 0 ? -6 : 6;

  return (
    <motion.div
      className="relative bg-white rounded-2xl p-6 h-full shadow-3xl"
      initial={{ opacity: 0, y: 80, rotateY: tilt, rotateX: -5, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, rotateY: tilt, rotateX: 0, scale: 1 }}
  style={{ transformStyle: 'preserve-3d',   boxShadow: `
          0 32px 64px -12px rgba(0, 0, 0, 0.12),
          0 25px 45px -8px rgba(0, 0, 0, 0.08),
          0 15px 25px -5px rgba(0, 0, 0, 0.06),
          0 8px 12px -2px rgba(0, 0, 0, 0.04)
        `,   }}
    
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 80, damping: 20 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-md">
          <Image
            src={testimonial.img}
            alt={testimonial.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 text-base">
            {testimonial.name}
          </h3>
          <p className="text-secondary text-sm font-medium">
            {testimonial.role}
          </p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed text-sm">
        {testimonial.content}
      </p>
    </motion.div>
  );
};


export default TestimonialCards;
