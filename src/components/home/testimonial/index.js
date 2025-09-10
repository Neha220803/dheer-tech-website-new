import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HomeTestimonialComp = () => {
  const testimonials = [
    {
      text: "Really happy with the experience with Dheertech. Their customer support was good, designing and launching was on date with great works. Would recommend to anyone who needs designing and marketing.",
      author: "Alma Xavier",
    },
    {
      text: "We are delighted with the outstanding website designed by DheerTech Inc for our Ocean Ayush Care Clinic. Their team understood our vision perfectly and transformed it into a modern, user-friendly, and visually appealing website that truly represents the essence of our clinic.",
      author: "Ocean Ayush Care Clinic",
    },
    {
      text: "DheerTech Inc built us a beautiful construction website and made it super secure. No more bots flooding our inbox thanks to their cybersecurity setup. The team was very flexible, paid attention to every detail, and delivered exactly what we needed. Great work and highly recommend!",
      author: "Neeharika",
    },
    {
      text: "We worked with DheerTech to develop a website for my bakery. The end product was better than I had imagined and was blown away with the level of details included, along with the design. DheerTech has a great team and is extremely professional. They completed the work on time, with no glitches in between.",
      author: "VKS New York Selvarasa",
    },
    {
      text: "I really recommend them.Really did a great job.staff was really knowledgeable and designed a very user friendly business software and website for me.They listen to all my business needs and proper counseling was done periodically. My project was little complicated but they make it work.",
      author: "vik",
    },
    {
      text: "Great experience working with DheerTech for our website designing and Digital marketing . Quick responses and quality work, thank you for completing our project on time 🙏",
      author: "Madhavan Kr",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="py-16 px-6" id="testimonial">
      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 bg-blue-50 rounded-2xl py-10 px-6 mx-auto">
        <div>
          <div className="text-4xl lg:text-6xl font-semibold text-gray-800">
            Hear From our trusted Clients
          </div>
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex space-x-2">
              <Button
                onClick={handlePrevious}
                variant="outline"
                className="rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft />
              </Button>
              <Button
                onClick={handleNext}
                variant="outline"
                className={"rounded-full"}
                aria-label="Next testimonial"
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>

        <div className="relative min-h-[250px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex-1"
            >
              <div className="text-lg text-gray-700 mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </div>
              <div className="text-xl font-semibold text-gray-900">
                — {testimonials[currentIndex].author}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonialComp;
