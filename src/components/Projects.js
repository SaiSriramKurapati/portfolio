import React from 'react';
//import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {

  faGithub,

} from '@fortawesome/free-brands-svg-icons'

const Projects = () => { 
    //const navigate = useNavigate();

    // const handleProjectClick = (projectId) => {
    //   navigate(`/projects/${projectId}`);
    // };

    return (
        <section className='bg-black text-white px-5 py-20 ' id='project'>
            <div className="container mx-auto pb-6">
                <div className='project-info md:text-left'>
                    <h2 className='text-4xl font-bold mb-5 border-b-[4px] w-[180px] border-teal-500 pb-2'>
                        Projects
                    </h2>
                </div>
            </div>
            <div className="cards container mx-auto grid grid-cols-3 gap-x-4 gap-y-14  pt-6">

                    <div className='bg-white w-96 h-60 rounded-2xl relative transition-transform duration-1000 ease-in-out hover:translate-x-4 hover:-translate-y-4  '>  {/*onClick={() => handleProjectClick(1)}*/}
                        <header>
                            <div className="project-name text-black px-5 pt-8 text-lg font-bold">
                                Table Booking System
                            </div>
                            <a href='https://github.com/SaiSriramKurapati/Table-Booking-System'  style={{fontSize:"30px"}}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#4d4d4e"
                                    className="anchor-icon"
                                />
                            </a>
                            <div className="high-idea text-black px-5 "> Developed a responsive restaurant website with a React-based booking system, hosted on GitHub Pages.</div>
                        </header>
                        <footer className=''>
                            <div className='text-black text-xs opacity-60 flex px-5 pt-9'>
                                <ul className='flex space-x-4'>
                                    <li>React.js</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </footer>
                    </div>
                    <div className='bg-white w-96 h-60 rounded-2xl relative transition-transform duration-1000 ease-in-out hover:translate-x-4 hover:-translate-y-4  '>  {/*onClick={() => handleProjectClick(1)}*/}
                        <header>
                            <div className="project-name text-black px-5 pt-8 text-lg font-bold">
                                Resume Classification and Ranking
                            </div>
                            <a href="https://github.com/SaiSriramKurapati/NLP-Based-Resume-Classification-and-Ranking" style={{fontSize:"30px"}}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#4d4d4e"
                                    className="anchor-icon"
                                />
                            </a>
                            <div className="high-idea text-black px-5 ">Developed a model utilizing NLP techniques and ML algorithms, combined with TF-IDF Vectorization, achieving an accuracy of 85%.</div>
                        </header>
                        <footer className=''>
                            <div className='text-black text-xs opacity-60 flex px-5 pt-9'>
                                <ul className='flex space-x-4'>
                                    <li>Python</li>
                                    <li>Machine Learning</li>
                                    <li>NLP</li>
                                </ul>
                            </div>
                        </footer>
                    </div>

                    <div className='bg-white w-96 h-60 rounded-2xl relative transition-transform duration-1000 ease-in-out hover:translate-x-4 hover:-translate-y-4  '>  {/*onClick={() => handleProjectClick(1)}*/}
                        <header>
                            <div className="project-name text-black px-5 pt-8 text-lg font-bold">
                                Advanced TAGE Branch Prediction
                            </div>
                            <a href="https://github.com/SaiSriramKurapati/ACA-Branch-Prediction" style={{fontSize:"30px"}}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#4d4d4e"
                                    className="anchor-icon"
                                />
                            </a>
                            <div className="high-idea text-black px-5 ">Led TAGE branch prediction research, enhancing CPU efficiency with a Java simulator, achieving a 7.74% misprediction rate.</div>
                        </header>
                        <footer className=''>
                            <div className='text-black text-xs opacity-60 flex px-5 pt-9'>
                                <ul className='flex space-x-4'>
                                    <li>Java</li>
                                    <li>Multi Threading</li>
                                    <li>Computer Architecture</li>
                                </ul>
                            </div>
                        </footer>
                    </div>
                    
            </div>

            <div className=' more flex justify-center items-center py-28'> {/*nedd to modify padding when more projects are added*/}
                <a href="https://github.com/SaiSriramKurapati" className='border-2 border-teal-500 px-4 py-2'>See More</a>
            </div>
        </section>
    
    )
}

export default Projects