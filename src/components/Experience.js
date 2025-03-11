import React from 'react'
import timelineElements from "./timelineElements";
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const TechBadge = ({ tech }) => (
  <span className="inline-block bg-gray-800/50 text-teal-400 text-xs px-3 py-1 rounded-full mr-2 mb-2 hover:bg-teal-500 hover:text-white transition-colors duration-300 backdrop-blur-sm">
    {tech}
  </span>
);

const CompanyLogo = ({ logo, title }) => (
  <div className="company-logo w-16 h-16 rounded-xl bg-white/90 p-2 flex items-center justify-center overflow-hidden shadow-lg backdrop-blur-sm">
    <img 
      src={logo} 
      alt={`${title} logo`} 
      className="max-w-full max-h-full object-contain"
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
  </div>
);

const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate === 'Present' ? new Date() : new Date(endDate);
  
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  
  let totalMonths = years * 12 + months;
  if (end.getDate() < start.getDate()) {
    totalMonths--;
  }

  if (totalMonths < 1) return 'Less than a month';
  if (totalMonths === 1) return '1 month';
  if (totalMonths < 12) return `${totalMonths} months`;
  
  const remainingMonths = totalMonths % 12;
  const yearCount = Math.floor(totalMonths / 12);
  
  if (remainingMonths === 0) {
    return yearCount === 1 ? '1 year' : `${yearCount} years`;
  }
  
  return yearCount === 1 
    ? `1 year ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
    : `${yearCount} years ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
};

const Experience = () => {
  return (
    <section className='bg-black text-white px-5 py-20 md:py-32' id='experience'>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='text-center mb-16'>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <FaBriefcase className="text-teal-500 text-3xl" />
              <h2 className='text-4xl font-bold inline-block border-b-[4px] border-teal-500 pb-2'>
                Experience
              </h2>
            </motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300"
            >
              My professional journey and impact
            </motion.p>
          </div>

          <div className='relative flex flex-col gap-8'>
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 to-transparent hidden md:block" />

            {timelineElements.map((element, index) => {
              const [startDate, endDate] = element.date.split(' - ');
              const duration = calculateDuration(startDate, endDate);
              
              return (
                <motion.div
                  key={element.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index, duration: 0.8 }}
                  className="relative group"
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-teal-500/30 transition-all duration-300 shadow-xl">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Logo Column */}
                      <div className="flex-shrink-0">
                        <CompanyLogo logo={element.logo} title={element.title} />
                      </div>

                      {/* Content Column */}
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                              {element.title}
                            </h3>
                            <h4 className="text-lg text-gray-300 mt-1">{element.location}</h4>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <span className="px-4 py-1 rounded-full bg-gray-800/50 text-teal-400 text-sm backdrop-blur-sm border border-gray-700/30">
                              {element.date}
                            </span>
                            <span className="text-sm text-gray-400">
                              {duration}
                            </span>
                          </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                          <div 
                            dangerouslySetInnerHTML={{ __html: element.description }}
                            className="text-gray-300 space-y-2 mb-6"
                          />
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/50">
                          {element.techStack.map((tech, idx) => (
                            <TechBadge key={idx} tech={tech} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;