import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaEnvelope, FaWallet, FaUsers, FaChartLine, FaReceipt, FaArrowRight } from 'react-icons/fa';
import {
  SiReact, SiNextdotjs, SiTypescript, SiAmazonaws, SiGraphql,
  SiTailwindcss, SiRedux, SiJest, SiCypress
} from 'react-icons/si';
import './Hero.scss';
import AnimatedLetters from './AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {

  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter

} from '@fortawesome/free-brands-svg-icons'
import vaaataVideo from '../assets/www.vaaata.com.mp4';
import vaaataLogo from '../assets/logo.png';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [letterClass, setLetterClass] = useState('text-animate');
  const [showBlobs, setShowBlobs] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [showWord, setShowWord] = useState(false);
  const hiArray = ['H', 'i,'];
  const imArray = ['I', ' ', 'a', 'm'];
  const nameArray = ['r', 'i', 'r', 'a', 'm'];
  const jobArray = ['S','o','f','t','w','a','r','e'];
  
  const skills = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiAmazonaws, name: "AWS", color: "#FF9900" },
    { icon: SiGraphql, name: "GraphQL", color: "#E535AB" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#38B2AC" },
    { icon: SiRedux, name: "Redux", color: "#764ABC" },
    { icon: SiJest, name: "Jest", color: "#C21325" },
    { icon: SiCypress, name: "Cypress", color: "#17202C" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setShowBlobs(true);
      setShowIcons(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass(prevLetterClass =>
        prevLetterClass === 'text-animate' ? 'text-animate-hover' : 'text-animate'
      );
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWord(true);
    }, 2300);

    return () => clearTimeout(timeout);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-4 opacity-10">
        {Array.from({ length: 64 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1
            }}
            className="bg-teal-500 rounded-full"
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="md:w-1/2 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{' '}
            <span className="text-teal-400">Sai Sriram</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-2xl md:text-3xl text-gray-300 mt-4">
            <Typewriter
              options={{
                strings: [
                  'Frontend Developer',
                  'AWS Solutions Architect',
                  'Performance Enthusiast'
                ],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-xl">
           I'm a product driven frontend specialist with a passion for building to the customer not the stack like many does.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-6 mt-8">
            <a 
              href="https://github.com/SaiSriramKurapati" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl hover:text-teal-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a 
              href="http://www.linkedin.com/in/sai-sriram-kurapati-660660149" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl hover:text-teal-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:kurapatisaisriram@gmail.com" 
              className="text-3xl hover:text-teal-400 transition-colors"
            >
              <FaEnvelope />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 mt-8">
            <a 
              href="#contact" 
              className="bg-teal-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-teal-400 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="#project"
              onClick={(e) => {
                e.preventDefault();
                const projectSection = document.getElementById('project');
                if (projectSection) {
                  const offset = 80; // Offset for fixed header
                  const elementPosition = projectSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
              className="border-2 border-teal-500 text-teal-500 px-8 py-3 rounded-full font-semibold hover:bg-teal-500 hover:text-black transition-colors"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Your Image with Blob Effect */}
          <div className={`blobc relative ${showBlobs ? 'blobs-visible' : ''}`}>
            <div className="blob-overlay ml-16 md:ml-auto"></div>
            <div className="blob ml-16 md:ml-auto"></div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-0 right-0 mx-auto w-full max-w-sm flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
        >
          <motion.div 
            className="text-center mb-4 w-full"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-gray-400 text-sm font-medium mb-2">Scroll to discover</p>
            <div className="flex items-center justify-center gap-2 bg-gray-800/50 backdrop-blur-sm px-6 py-2 rounded-full border border-teal-500/20 mx-auto">
              <FaWallet className="text-teal-400" />
              <span className="text-teal-400 font-semibold">Vaaata</span>
              <span className="text-gray-400">- Smart Bill Splitting</span>
            </div>
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-teal-400 text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      {/* Vaaata Showcase - Moved above Skills Showcase */}
      <div className="relative z-10 w-full overflow-hidden py-12 bg-gradient-to-b from-black/30 to-black border-t border-b border-teal-500/20">
        <motion.div 
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left side - Content */}
            <motion.div 
              className="md:w-1/2 space-y-6"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center"
                >
                  <img 
                    src={vaaataLogo} 
                    alt="Vaaata Logo" 
                    className="w-full h-full border-transparent rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold">Vaaata</h3>
              </div>
              
              <p className="text-gray-300 text-lg">
                A revolutionary bill splitting app that makes group expenses effortless.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl">
                  <FaUsers className="text-teal-400 text-xl" />
                  <div>
                    <h4 className="font-semibold">Receipt Processing</h4>
                    <p className="text-sm text-gray-400">Smart item extraction</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl">
                  <FaReceipt className="text-teal-400 text-xl" />
                  <div>
                    <h4 className="font-semibold">Auto Split</h4>
                    <p className="text-sm text-gray-400">Split bills instantly</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://www.vaaata.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-teal-400 transition-colors"
              >
                Visit Vaaata
                <FaArrowRight className="text-sm" />
              </a>
            </motion.div>

            {/* Right side - Video Preview */}
            <motion.div 
              className="md:w-1/2"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-teal-500/20 bg-gray-900/50 backdrop-blur-sm h-[600px]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain rounded-2xl"
                >
                  <source src={vaaataVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Skills Showcase */}
      <div className="relative z-10 w-full overflow-hidden py-12 mt-8 bg-gradient-to-b from-transparent to-black/30">
        <motion.div 
          className="w-full flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            My <span className="text-teal-400">Tech Stack</span>
          </motion.h2>
          <motion.div 
            className="w-full flex items-center justify-center"
          >
            <motion.div 
              className="flex space-x-8 px-4"
              animate={{
                x: [-1000, 1000],
                transition: {
                  x: {
                    duration: 30,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }
                }
              }}
            >
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="group relative flex-shrink-0"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gray-800/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-gray-700/70 transition-colors border border-gray-700/50">
                    <skill.icon 
                      className="w-8 h-8 transition-transform group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm text-gray-300 whitespace-nowrap font-medium bg-gray-800/90 px-3 py-1 rounded-full">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;