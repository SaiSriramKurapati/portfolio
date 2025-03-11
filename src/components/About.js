import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaAward, FaRocket } from 'react-icons/fa';
import './About.scss';

function About() {
  const achievements = [
    {
      icon: FaGraduationCap,
      title: "Education",
      highlight: "Master's in Computer Science",
      details: "University of Central Florida",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaLaptopCode,
      title: "Experience",
      highlight: "Frontend Development",
      details: "Building scalable web applications",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: FaAward,
      title: "Certification",
      highlight: "AWS Solutions Architect",
      details: "Cloud architecture expertise",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: FaRocket,
      title: "Solutions",
      highlight: (
        <a 
          href="https://www.vaaata.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
        >
          <span className="text-gray-300">Try</span>
          <span className="text-teal-400 cursor-pointer">Vaaata</span>
          <span className="text-sm text-teal-400 cursor-pointer group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
        </a>
      ),
      details: "Innovative expense management",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className='bg-black text-white px-5 py-20 md:py-32' id='about'>
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className='text-center mb-16'>
            <motion.h2 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className='text-4xl font-bold mb-5 inline-block border-b-[4px] border-teal-500 pb-2'
            >
              About Me
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 mt-6"
            >
              Transforming ideas into exceptional digital experiences
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                className="relative group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-700/50 rounded-xl">
                      <achievement.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-300">{achievement.title}</h3>
                      <p className="text-xl font-bold text-white mt-1">{achievement.highlight}</p>
                      <p className="text-gray-400 mt-2">{achievement.details}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
          >
            <p className='text-lg text-gray-300 leading-relaxed mb-4'>
              I'm a passionate <span className='text-teal-500'>Software Developer</span> with a focus on creating exceptional user experiences. My journey in tech has been driven by a constant desire to learn and innovate.
            </p>
            <p className='text-lg text-gray-300 leading-relaxed mb-4'>
              With expertise in <span className='text-teal-500'>frontend development</span> and <span className='text-teal-500'>cloud architecture</span>, I specialize in building scalable, performant applications that make a real impact. I'm particularly excited about leveraging <span className='text-teal-500'>AI</span> and <span className='text-teal-500'>Autonomous Agents</span> to create innovative products that solve real-world challenges.
            </p>
            <p className='text-lg text-gray-300 leading-relaxed'>
              I'm always open to new opportunities where I can contribute, learn, and grow. If you have an exciting project or opportunity, feel free to <a href='#contact' className='text-teal-500 hover:text-teal-400 transition-colors border-b border-teal-500/50 hover:border-teal-400'>reach out</a>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;