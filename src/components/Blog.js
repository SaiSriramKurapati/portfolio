import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faTags } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Building Responsive UI Components with React',
      excerpt: 'Learn how to create reusable and responsive UI components using React hooks and modern CSS techniques.',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070',
      date: 'Oct 15, 2023',
      author: 'Saisriram Kurapati',
      category: 'React',
      tags: ['Frontend', 'React', 'CSS']
    },
    {
      id: 2,
      title: 'State Management in Modern React Applications',
      excerpt: 'Exploring different state management solutions in React: Context API, Redux Toolkit, and Zustand.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070',
      date: 'Aug 28, 2023',
      author: 'Saisriram Kurapati',
      category: 'React',
      tags: ['State Management', 'React', 'Redux']
    },
    {
      id: 3,
      title: 'Creating Beautiful Animations with Framer Motion',
      excerpt: 'A comprehensive guide to implementing smooth and attractive animations in your React projects using Framer Motion.',
      image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2071',
      date: 'Jul 10, 2023',
      author: 'Saisriram Kurapati',
      category: 'Animation',
      tags: ['Framer Motion', 'Animation', 'UX']
    }
  ];

  // Filter functionality 
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'React', 'JavaScript', 'CSS', 'Animation'];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section className="bg-black text-white pt-24 pb-20 px-5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">My Blog</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sharing my thoughts, experiences, and knowledge about frontend development
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <article 
                key={post.id} 
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span className="flex items-center mr-4">
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={faUser} className="mr-2" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 hover:text-teal-500 transition-colors duration-300">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm">
                    <FontAwesomeIcon icon={faTags} className="mr-2 text-gray-500" />
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="mr-2 text-teal-500 hover:text-teal-400 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-gray-800">
                  <a 
                    href={`/blog/${post.id}`} 
                    className="text-teal-500 hover:text-teal-400 font-medium flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Newsletter subscription */}
        <div className="mt-20 bg-gray-900 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Subscribe to My Newsletter</h3>
            <p className="text-gray-400">Get the latest articles and resources straight to your inbox</p>
          </div>
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <button 
              type="submit" 
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Blog; 