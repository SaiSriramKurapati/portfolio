import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 px-5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
          <div>
            <h3 className="text-xl font-bold mb-4">Saisriram<span className="text-teal-500">.dev</span></h3>
            <p className="text-gray-400 mb-4">
              A software engineer focused on creating beautiful and functional user interfaces with attention to detail.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/SaiSriramKurapati" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-teal-500 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a 
                href="http://www.linkedin.com/in/sai-sriram-kurapati-660660149/" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-teal-500 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-teal-500 transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#about" className="text-gray-400 hover:text-teal-500 transition-colors">About</a>
              </li>
              <li>
                <a href="/#project" className="text-gray-400 hover:text-teal-500 transition-colors">Projects</a>
              </li>
              <li>
                <a href="/#experience" className="text-gray-400 hover:text-teal-500 transition-colors">Experience</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-teal-500 transition-colors">Blog</a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-400 hover:text-teal-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-2">Email: your.email@example.com</p>
            <p className="text-gray-400 mb-4">Orlando, Florida</p>
            <a 
              href="/#contact" 
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </div>
        
        <div className="pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center">
            © {currentYear} Saisriram Kurapati. All rights reserved. Made with 
            <FontAwesomeIcon icon={faHeart} className="text-red-500 mx-2" /> 
            and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 