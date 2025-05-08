'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, animate, useScroll , useTransform } from 'framer-motion';
import { useRef } from 'react';
import LoadingScreen from '@/public/animations/loadingscreen';
import { Bebas_Neue } from 'next/font/google';


/* This is the const for the video frreze section  */

/**and this is the end of the section with full and final const */

const cards = [
  { title: "Card 1", desc: "Next-gen surgical innovation" },
  { title: "Card 2", desc: "Advanced robotics in surgery" },
  { title: "Card 3", desc: "AI-powered diagnostics" },
  { title: "Card 4", desc: "Precision health analytics" },
];




const VideoCard = () => {
  return (
    <div className="absolute right-[10%] top-1/2 transform -translate-y-1/2">
      <motion.div
        className="w-[920px] h-[480px] rounded-2xl p-6 flex justify-center items-center cursor-pointer transition-all duration-700 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(0,30,60,0.35), rgba(0,60,120,0.25))",
          border: "2px solid rgba(0, 180, 255, 0.6)",
          boxShadow: "0 0 30px rgba(0, 190, 255, 0.5), inset 0 0 12px rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
          transition: "all 0.8s ease-in-out",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileHover={{
          borderColor: "rgba(255, 255, 255, 0.8)",
          scale: 1.05,
        }}
      >
        {/* Video Component */}
        <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted>
          <source src="/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
};



const videoList = ["/your-video.mp4", "/video2.mp4", "/video3.mp4"];


interface CounterProps {
  value: number;
  duration?: number;
}




const Counter = ({ value, duration = 3 }: CounterProps) => {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisplayValue(0);
          animate(count, value, {
            duration,
            ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth acceleration
            onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
          });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, [value, duration]);

  return <span ref={ref}>{displayValue.toLocaleString()}+</span>;
};





const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(0);
  const [activeVideo, setActiveVideo] = useState(videoList[0]);
  const [activeCard, setActiveCard] = useState(0);



  const procedureCards = [
    { title: 'Cardiac Bypass', description: 'Precision-guided cardiac surgery with minimal invasion.',image: '/1.png' },
    { title: 'Neurosurgical Resection', description: 'Targeted brain lesion removal with neuronavigation.' ,image: '/2.png'},
    { title: 'Thoracic Lobectomy', description: 'Robotic-assisted removal of lung lobes for better outcomes.' ,image: '/3.png'},
    { title: 'Colorectal Surgery', description: 'Enhanced accuracy in bowel resections and anastomosis.' ,image: '/4.png'},
    { title: 'Prostatectomy', description: 'Minimally invasive robotic prostate removal.' ,image: '/5.png'},
    { title: 'Hysterectomy', description: 'Improved control and reduced recovery time for uterine removal.' ,image: '/6.png'},
    { title: 'Cholecystectomy', description: 'Gallbladder removal with high precision and safety.' ,image: '/7.png'},
  ];
  
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const images = ['/yantra.png', '/mudra.png', '/maya.png', '/sutra.png'];

  const handleAnimationComplete = () => {
    setImageOpacity(1);
  };

  const handleHoverCard = (index: number) => {
    setActiveCard(index);
  };

  return (
    <div className="overflow-x-hidden bg-white">
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

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Section */}
            <section className="relative w-full h-[107vh] flex items-center justify-center bg-cover bg-center text-white">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover z-0 opacity-100"
              >
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />
              <div className="relative z-20 text-center px-6 md:px-10 lg:px-20 max-w-2xl">
                <h1
                  className="text-6xl sm:text-7xl font-extrabold mb-8 tracking-wide leading-tight"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    background: 'linear-gradient(to right,rgb(0,295,255),rgb(53,53,240))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradient-shift 3s infinite',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  Meet SSI Mantra 3
                </h1>
                <p
                  className="text-lg sm:text-xl md:text-2xl leading-relaxed opacity-90 mb-6"
                  style={{
                    fontFamily: "'Source Sans Pro', sans-serif",
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
            {/* Circular Image Section */}
            
            <section className="relative w-full h-[120vh] flex items-center justify-center bg-black text-white overflow-hidden">
  {/* Outer Glowing Circle */}
  <div
    className="absolute w-[450px] h-[450px] rounded-full"
    style={{
      top: '50%',
      left: '20%',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0px 0px 50px rgba(0, 190, 255, 0.5)',
      border: '2px solid rgba(0, 190, 255, 0.7)',
      backdropFilter: 'blur(20px)',
    }}
  ></div>

  {/* Image Container */}
  <div 
    className="relative flex justify-center items-center w-[445px] h-[445px] rounded-full overflow-hidden"
    style={{ left: "-570px" }}
  >
    <motion.img
      key={currentImage}
      src={images[currentImage]}
      alt={`Image ${currentImage + 1}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: imageOpacity, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.55, 1, 0.3, 1] }}
      onAnimationComplete={handleAnimationComplete}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Dot Buttons */}
  <div className="absolute w-[445px] h-[445px] rounded-full flex items-center justify-center">
    {[0, 1, 2, 3].map((index) => {
      const positions = [
        { top: "0%", left: "-77%" },
        { top: "50%", left: "-129%" },
        { top: "100%", left: "-77%" },
        { top: "50%", left: "-28%" },
      ];

      return (
        <button
          key={index}
          type="button"
          aria-label={`Show Image ${index + 1}`}
          role="button"
          className="absolute w-6 h-6 rounded-full bg-white cursor-pointer hover:scale-125 transition-transform border-2 border-white"
          style={{
            top: positions[index].top,
            left: positions[index].left,
            transform: "translate(-50%, -50%)",
            boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.6)",
          }}
          onMouseEnter={() => {
            setCurrentImage(index);
            setActiveCard(index);
          }}
        ></button>
      );
    })}
  </div>

 {/* Fixed Positioned Card on Right Side */}

    <div className="absolute right-[10%] top-1/2 transform -translate-y-1/2">
      <motion.div
        className="w-[920px] h-[480px] rounded-2xl p-6 flex justify-center items-center cursor-pointer transition-all duration-700 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(0,30,60,0.35), rgba(0,60,120,0.25))",
          border: "2px solid rgba(0, 180, 255, 0.6)",
          boxShadow: "0 0 30px rgba(0, 190, 255, 0.5), inset 0 0 12px rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
          transition: "all 0.8s ease-in-out",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileHover={{
          borderColor: "rgba(255, 255, 255, 0.8)",
          scale: 1.05,
        }}
      >
        {/* Video Component */}
        <video className="absolute top-[-40] left-0 w-full h-full object-cover rounded-xl" autoPlay loop muted>
          <source src="/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  




</section>
{/* Validated Surgical Procedures Section */}
<section className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4 flex flex-col items-center transition-colors duration-1000 ease-in-out">
  <h2 className="text-5xl font-bebas text-white mt-6 mb-10 tracking-widest uppercase">
    Validated Surgical Procedures
  </h2>

  <div className="relative flex items-center justify-center w-full">
    {/* Left Arrow */}
    <button
      onClick={() =>
        setCurrentCard((prev) => (prev - 1 + procedureCards.length) % procedureCards.length)
      }
      className="absolute left-140 z-20 bg-white rounded-full p-3 hover:scale-110 transition-transform shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="w-6 h-6 text-black"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    {/* Cards Container */}
    <div className="relative flex items-center justify-center w-full h-[600px]">
      {procedureCards.map((card, index) => {
        const offset = (index - currentCard + procedureCards.length) % procedureCards.length;

            {/* Cards Changing transition  */}
        const translateX =
        offset === 0
          ? 'translate-x-0 scale-100 opacity-100'
          : offset === 1
          ? '-translate-x-[650px] scale-98 opacity-85 blur-[2px]'
          : offset === procedureCards.length - 1
          ? 'translate-x-[650px] scale-98 opacity-85 blur-[2px]'
          : 'translate-x-0 opacity-0 pointer-events-none';
      
      const transitionStyle = {
        type: 'spring',
        stiffness: 180, // Softens the movement
        damping: 22, // Smooth out bounce
        duration: 1.0, // Slower transition for a premium feel
        ease: [0.25, 1, 0.3, 1] // Custom bezier curve for ultra-fluid motion
      };
        return (
          <motion.div
            key={index}
            className={`absolute w-full max-w-[640px] h-[500px] rounded-2xl p-6 flex flex-col justify-center items-start cursor-pointer
              ${offset === 0 ? 'z-10' : 'z-0'}
              ${offset === 0 ? 'opacity-100 scale-100' : offset === 1 || offset === procedureCards.length - 1 ? 'opacity-50 scale-40' : 'opacity-0 scale-0'}
              ${translateX}
              transition-transform transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]`}
            style={{
              background: 'linear-gradient(135deg, rgba(0,30,60,0.35), rgba(0,60,120,0.25))',
              border: '1px solid rgba(0, 180, 255, 0.3)',
              boxShadow: `
                10px 10px 15px rgba(0, 0, 0, 0.1),
                -10px -10px 15px rgba(255, 255, 255, 0.1)
              `,
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(0, 190, 255, 0.3)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: offset === 0 ? 1 : 0.5,
              scale: offset === 0 ? 1 : 0.92,
              filter: offset === 0 ? 'blur(0px)' : 'blur(1px)',
            }}
            transition={{
              type: 'spring',
              stiffness: 160,
              damping: 20,
              duration: 0.6,
            }}
          >
{/* Centered Title Inside Card */}
<h3 className="absolute inset-x-0 top-10 text-4xl font-bold uppercase tracking-wide text-center 
  text-white max-w-[90%] mx-auto shadow-sm shadow-blue -500 
  transition-all duration-700 ease-in-out">
  {card.title}
</h3>

{/* Centered Description Inside Card */}
<p className="absolute inset-x-0 bottom-95 text-lg font-light text-gray-300 text-center leading-normal max-w-[85%] mx-auto 
  transition-opacity duration-700 ease-in-out">
  {card.description}
</p>

            {/* Card Specific Image */}
            <div className="flex justify-center items-center w-full mt-auto">
              <img
                src={card.image} // Ensure card.image is something like "/1.png"
                alt={card.title || 'Card Image'}
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* Right Arrow */}
    <button
      onClick={() => setCurrentCard((prev) => (prev + 1) % procedureCards.length)}
      className="absolute right-140 z-20 bg-white rounded-full p-3 hover:scale-110 transition-transform shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="w-6 h-6 text-black"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</section>

{/*publication section*/}
<section className="relative w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 py-24 px-6 flex flex-col items-center overflow-hidden">
  <h2 className="text-5xl font-bebas text-white mb-16 tracking-widest uppercase relative z-10">
    Publications
  </h2>

  {/* Floating glow blur effect */}
  <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-cyan-400/10 rounded-full blur-[150px] z-0 pointer-events-none" />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="relative z-10 w-full max-w-5xl px-8 py-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
    style={{
      boxShadow: '0 20px 60px rgba(0, 255, 255, 0.05)',
    }}
  >
    <h3 
      style={{ fontFamily: 'sans-serif' }} // Applied Bebas Neue font
      className="text-2xl font-bebas text-white mb-8 tracking-widest uppercase relative z-5"
    >
      Evaluating the efficacy of telesurgery with dual console SSI Mantra Surgical Robotic System
    </h3>

    <p className="text-gray-300 text-sm sm:text-base mb-6">
      Experiment on animal model and clinical trials assessing the performance of the SSI Mantra dual-console robotic system in remote surgical procedures.
    </p>

    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-0">
        📅 Published: 01 November 2024
      </p>

      <a
        href="/pdfs/publication1.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block px-5 py-2 rounded-full text-white bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold shadow-lg transition-all duration-300 ease-in-out group"
      >

        {/* Glowing effect background */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-40 blur-xl group-hover:opacity-60 group-hover:scale-125 transition-all duration-500"></span>

        {/* Button text */}
        <span className="relative z-10">View My Application</span>
      </a>
    </div>
  </motion.div>
</section>
 
{/* Clinical Outcomes Section */}
{/* Clinical Outcomes Section */}
<section className="relative w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 py-90 px-6 flex flex-col items-center overflow-hidden">
  {/* Floating glow blur with parallax */}
  <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/10 rounded-full blur-[180px] z-0 pointer-events-none motion-safe:animate-[parallax_4s_infinite_alternate]" />

  {/* Heading with animated underline and glow effect */}
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="text-6xl md:text-7xl font-bebas text-white mb-20 tracking-widest uppercase relative z-10 inline-block"
  >
    <span className="relative inline-block">
      Clinical Outcomes
      <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 rounded-full shadow-[0_0_20px_5px_rgba(0,255,255,0.3)] motion-safe:animate-pulse" />
    </span>
  </motion.h2>

  {/* Stats Card with glowing hover effects */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="relative z-10 w-full max-w-6xl px-10 py-14 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_10px_60px_rgba(0,255,255,0.08)] hover:shadow-[0_0_80px_rgba(0,255,255,0.15)] transition-all duration-700"
  >
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
      {/* Surgeries */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-white hover:scale-[1.05] transition-transform duration-300 ease-out hover:drop-shadow-[0_0px_20px_rgba(0,255,255,0.5)]"
      >
        <p className="text-6xl sm:text-7xl font-bebas text-cyan-400 mb-3 drop-shadow-[0_2px_8px_rgba(0,255,255,0.3)]">
          <Counter value={3500} />
        </p>
        <p className="text-gray-300 text-lg sm:text-xl tracking-wide">Surgeries</p>
      </motion.div>

      {/* Installations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-white hover:scale-[1.05] transition-transform duration-300 ease-out hover:drop-shadow-[0_0px_20px_rgba(0,255,255,0.5)]"
      >
        <p className="text-6xl sm:text-7xl font-bebas text-cyan-400 mb-3 drop-shadow-[0_2px_8px_rgba(0,255,255,0.3)]">
          <Counter value={80} />
        </p>
        <p className="text-gray-300 text-lg sm:text-xl tracking-wide">SSi Mantra Installations</p>
      </motion.div>

      {/* Trained */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-white hover:scale-[1.05] transition-transform duration-300 ease-out hover:drop-shadow-[0_0px_20px_rgba(0,255,255,0.5)]"
      >
        <p className="text-6xl sm:text-7xl font-bebas text-cyan-400 mb-3 drop-shadow-[0_2px_8px_rgba(0,255,255,0.3)]">
          <Counter value={700} />
        </p>
        <p className="text-gray-300 text-lg sm:text-xl tracking-wide">Robotic Surgeons Trained</p>
      </motion.div>
    </div>
  </motion.div>
</section>


<section className="flex justify-center items-center h-screen w-screen">
  <div
    className="w-full h-full rounded-none overflow-hidden shadow-lg border-0 border-blue-500"
    style={{
      background: "linear-gradient(135deg, rgba(0,30,60,0.35), rgba(0,60,120,0.25))",
      backdropFilter: "blur(15px)",
    }}
  >
    <video
      width="100%"
      height="100%"
      autoPlay
      loop
      muted
      className="transition-all duration-700 ease-in-out opacity-100 scale-100"
    >
      <source src="/your-video.mp4" type="video/mp4" />
    </video>
  </div>
</section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
