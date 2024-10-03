import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 flex items-center justify-between shadow-lg">
      <Link to="/"><div className="text-[#4F93ED] text-2xl ml-3 w-14 h-10"><img src="./src/assets/logohealthSOS.png" alt="" /></div></Link>
      <div className="md:hidden flex flex-col justify-center items-end" onClick={toggleMenu}>
        <div className={`h-1 w-6 bg-[#4F93ED] transition transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`h-1 w-6 my-1 bg-[#4F93ED] transition ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`h-1 w-3 bg-[#4F93ED] transition transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </div>
      <ul className={`fixed shadow-xl top-0 right-0 h-full w-[50%] bg-white flex flex-col items-center justify-center p-4 space-y-4 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:flex md:flex-row md:space-x-6 md:translate-x-0`}>
        <li className="absolute top-4 right-4 md:hidden"><button onClick={toggleMenu} className="text-[#4F93ED]">X</button></li>
        <li><Link to="/" className="text-[#4F93ED] flex flex-col items-center md:flex-row"><i className="fas fa-home block md:hidden my-3"></i><span className="hidden md:block ml-3">Home</span></Link></li>
        <li><Link to="/" className="text-[#4F93ED] flex flex-col items-center md:flex-row"><i className="fas fa-info-circle block md:hidden my-3"></i><span className="hidden md:block ml-3">About</span></Link></li>
        <li><Link to="/" className="text-[#4F93ED] flex flex-col items-center md:flex-row"><i className="fas fa-concierge-bell block md:hidden my-3"></i><span className="hidden md:block ml-3">Services</span></Link></li>
        <li><Link to="/" className="text-[#4F93ED] flex flex-col items-center md:flex-row"><i className="fas fa-envelope block md:hidden my-3"></i><span className="hidden md:block ml-3">Contact</span></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
