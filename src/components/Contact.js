import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const ContactLink = ({ icon: Icon, text, href, external }) => (
  <motion.a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="group flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-teal-500/30 transition-all duration-300"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="p-3 bg-gray-800/50 rounded-lg text-teal-400 group-hover:text-teal-300 transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <span className="text-gray-300 group-hover:text-white transition-colors">{text}</span>
  </motion.a>
);

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_smof57f', 'template_0meh1lj', form.current, 'FV_JxBAIZYfOOuoag')
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <section className='bg-black text-white px-5 py-20 md:py-32' id='contact'>
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
              <FaPaperPlane className="text-teal-500 text-3xl" />
              <h2 className='text-4xl font-bold inline-block border-b-[4px] border-teal-500 pb-2'>
                Contact
              </h2>
            </motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300"
            >
              Let's create something amazing together
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="prose prose-invert">
                <h3 className="text-2xl font-semibold mb-6">
                  Got a <span className="text-teal-500">question</span>, or want to say <span className="text-teal-500">hello</span>?
                </h3>
                <p className="text-gray-300 mb-8">
                  Feel free to reach out through any of these channels. I'm always excited to connect, collaborate, and discuss new opportunities.
                </p>
              </div>

              <div className="space-y-4">
                <ContactLink 
                  icon={FaEnvelope}
                  text="saisriram1729@gmail.com"
                  href="mailto:saisriram1729@gmail.com"
                />
                <ContactLink 
                  icon={FaPhone}
                  text="+1 (689) 248 1182"
                  href="tel:+16892481182"
                />
                <ContactLink 
                  icon={FaLinkedin}
                  text="LinkedIn"
                  href="https://www.linkedin.com/in/sai-sriram-kurapati/"
                  external
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <form 
                ref={form} 
                onSubmit={sendEmail}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 focus:border-teal-500/50 outline-none text-white placeholder:text-gray-500 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 focus:border-teal-500/50 outline-none text-white placeholder:text-gray-500 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 focus:border-teal-500/50 outline-none text-white placeholder:text-gray-500 transition-all duration-300 resize-none"
                  ></textarea>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-right"
                >
                  <button
                    type="submit"
                    className="group relative px-6 py-3 bg-teal-500 text-black font-semibold rounded-xl hover:bg-teal-400 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message
                      <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;