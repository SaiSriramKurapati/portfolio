import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, techStack, githubLink }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative"
  >
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-teal-500/30 transition-all duration-300 shadow-xl h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
          {title}
        </h3>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 transition-colors"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
        </a>
      </div>
      
      <p className="text-gray-300 mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-800/50">
        {techStack.map((tech, idx) => (
          <span
            key={idx}
            className="inline-block bg-gray-800/50 text-teal-400 text-xs px-3 py-1 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 backdrop-blur-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "AI powered ChatBot",
      description: "A friendly and efficient chatbot that makes managing conversations a breeze—sending, editing, and deleting messages with ease—wrapped in a sleek design that feels just right.",
      techStack: ["React", "FastAPI", "Postgres"],
      githubLink: "https://github.com/SaiSriramKurapati/Rio"
    },
    {
      title: "NLP Based Resume Ranking",
      description: "Developed a model utilizing NLP techniques and ML algorithms, combined with TF-IDF Vectorization, achieving an accuracy of 85%.",
      techStack: ["Python", "Machine Learning", "NLP"],
      githubLink: "https://github.com/SaiSriramKurapati/NLP-Based-Resume-Classification-and-Ranking"
    },
    {
      title: "Branch Prediction",
      description: "Led TAGE branch prediction research, enhancing CPU efficiency with a Java simulator, achieving a 7.74% misprediction rate.",
      techStack: ["Java", "Multi Threading", "Computer Architecture"],
      githubLink: "https://github.com/SaiSriramKurapati/ACA-Branch-Prediction"
    }
  ];

  return (
    <section className='bg-black text-white px-5 py-20 md:py-32' id='project'>
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
              <FaCode className="text-teal-500 text-3xl" />
              <h2 className='text-4xl font-bold inline-block border-b-[4px] border-teal-500 pb-2'>
                Projects
              </h2>
            </motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300"
            >
              Some things I've built
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center mt-16"
          >
            <a
              href="https://github.com/SaiSriramKurapati?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gray-900/50 text-white px-6 py-3 rounded-full border border-gray-800/50 hover:border-teal-500/30 transition-all duration-300 backdrop-blur-sm"
            >
              <span>View More Projects</span>
              <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;