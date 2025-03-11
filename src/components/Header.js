import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => setToggle(!toggle);

  const scrollToSection = (sectionId, isMobile = false) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      if (isMobile) {
        setToggle(false);
      }
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-black/80 backdrop-blur-lg' : 'py-4 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          href="#"
          className="text-2xl text-teal-500 flex items-center gap-2 font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCode className="text-3xl" />
          <span className="hidden sm:block">Portfolio</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {menuItems.map((item, index) => (
              <motion.li 
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-white hover:text-teal-400 transition-colors relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <motion.nav 
          className={`fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
            toggle ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
          initial={false}
        >
          <div className="p-8">
            <ul className="flex flex-col gap-6">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: toggle ? 1 : 0, x: toggle ? 0 : 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.id}`}
                    className="text-white hover:text-teal-400 transition-colors text-lg cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id, true);
                    }}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button 
          onClick={handleToggle}
          className="block md:hidden text-white z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {toggle ? (
            <AiOutlineClose size={24} className="text-teal-400" />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;