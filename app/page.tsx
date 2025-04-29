'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import LoadingScreen from '@/public/animations/loadingscreen'; // Loading screen animation

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll animations for Robot section
  const robotSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: robotSectionRef,
    offset: ['start end', 'end start'],
  });

  // Image scale transformation on scroll
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  
  // Text line animations
  const firstLineScale = useTransform(scrollYProgress, [0.1, 0.3], [0.5, 1]);
  const firstLineOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  
  const secondLineScale = useTransform(scrollYProgress, [0.5, 0.7], [0.5, 1]);
  const secondLineOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Loading Screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full h-full z-50"
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Section */}
            <section className="relative w-full h-[107vh] flex items-center justify-center bg-cover bg-center text-white pt-0 mt-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover z-0 opacity-80"
              >
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="relative z-20 text-center px-6 md:px-10 lg:px-20 max-w-2xl">
                <h1
                  className="text-6xl sm:text-7xl font-extrabold mb-8 tracking-wide leading-tight animate-gradient"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    background: 'linear-gradient(to right,rgb(0, 295, 255), rgb(53, 53, 240))',
                    fontWeight: 'bold',
                    fontSize: '6rem',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '2px',
                    animation: 'gradient-shift 3s infinite',
                    textTransform: 'uppercase',
                  }}
                >
                  Meet SSI Mantra 3
                </h1>
                <p
                  className="text-lg sm:text-xl md:text-2xl leading-relaxed opacity-90 mb-6"
                  style={{
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontWeight: 400,
                    textShadow: '1px 1px 5px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  Elevating surgical precision, empowering care, transforming outcomes.
                </p>
                <a
                  href="#demo"
                  className="relative group inline-block px-10 py-4 font-semibold text-white rounded-lg bg-gradient-to-br from-blue-400 to-orange-400 p-0.5 transition-transform transform group-hover:scale-110 focus:outline-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span className="absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-teal-400 to-purple-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50"></span>
                  <span className="relative z-10">Request a Demo</span>
                </a>
              </div>
            </section>

            {/* Features Section */}
            <section
              className="py-16"
              style={{
                background: 'linear-gradient(to right, rgb(48, 89, 151),rgb(70, 54, 30))',
              }}
              id="features"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                  className="text-3xl font-semibold text-center mb-8"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Our Technologies
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                  {[{
                      title: 'SSi Mantra',
                      img: '/1.png',
                      desc: 'Innovative technology transforming industries.',
                    },
                    {
                      title: 'SSi Mudra',
                      img: '/2.png',
                      desc: 'A new era in digital solutions for enterprises.',
                    },
                    {
                      title: 'SSi Maya',
                      img: '/3.png',
                      desc: 'Revolutionizing digital interactions and engagement.',
                    }].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3
                          className="text-2xl font-semibold mb-3"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-gray-300 mb-4"
                          style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                        >
                          {item.desc}
                        </p>
                        <a
                          href="#!"
                          className="text-blue-400 hover:underline"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Explore
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Robot Showcase Section */}
            <section ref={robotSectionRef} className="relative w-full h-[300vh] bg-black overflow-hidden">
              {/* Sticky Robot Image */}
              <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                <motion.img
                  src="/robotshowcase.png" // 👉 Change this to your robot image path
                  alt="Robot"
                  style={{ scale: imageScale }}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Animated Lines/Text */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                {/* First Line */}
                <motion.div
                  style={{
                    scale: firstLineScale,
                    opacity: firstLineOpacity,
                  }}
                  className="text-white text-5xl font-bold mb-20"
                >
                  Precision Beyond Imagination
                </motion.div>

                {/* Second Line */}
                <motion.div
                  style={{
                    scale: secondLineScale,
                    opacity: secondLineOpacity,
                  }}
                  className="text-white text-5xl font-bold"
                >
                  Redefining the Future of Surgery
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
