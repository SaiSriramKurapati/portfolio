import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  return (
    <header className='flex justify-between px-5 py-2 bg-black text-white fixed w-full z-10'>
      <a href="/Portfolio" className="logo mt-4 ml-4 text-5xl font-bold text-teal-500">Saisriram Kurapati</a>
      
        {/*Desk nav*/}
      <nav className='hidden md:block'>
        <ul className='flex'>
          <li><a href="/Portfolio/#about">About</a></li>
          <li><a href="/Portfolio/#experience">Experience</a></li>
          <li><a href="/Portfolio/#project">Projects</a></li>
          <li><a href="/Portfolio/#contact">Contact</a></li>
          <li><a href="https://drive.google.com/file/d/11AWVjBybeft_mcUMbtk5fvSijbRQDCoO/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
        </ul>
      </nav>
        {/*mob nav*/}
        <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
        <ul className='flex flex-col'>
          <li><a href="/Portfolio/#about">About</a></li>
          <li><a href="/Portfolio/#experience">Experience</a></li>
          <li><a href="/Portfolio/#project">Projects</a></li>
          <li><a href="/Portfolio/#contact">Contact</a></li>
          <li><a href="https://drive.google.com/file/d/11AWVjBybeft_mcUMbtk5fvSijbRQDCoO/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
        </ul>
      </nav>

        {/*Toggle*/}
        <button onClick={handleToggle} className="block md:hidden">
          {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </button>
 
    </header>
  )
}

export default Header