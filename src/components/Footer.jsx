// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#4F93ED] text-white py-4 mt-auto md:block hidden">
      <div className="container mx-auto text-center flex justify-between">
        <div className="flex flex-col justify-center space-x-4 mt-2">
          <p>contacto@healthsos.com</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="" className=""><img className="h-16 w-16" src="./src/assets/share.png" alt="share logo" /></Link>
            <Link to="" className=""><img className="h-16 w-16" src="./src/assets/yt.png" alt="youtube logo" /></Link>
            <Link to="" className=""><img className="h-16 w-16" src="./src/assets/in.png" alt="linkedin logo" /></Link>
            <Link to="" className=""><img className="h-16 w-16" src="./src/assets/fb.png" alt="facebook logo" /></Link>
          </div>
        </div>
        <p className="relative top-20">©2024 por HealthSOS.</p>
      </div>
    </footer>
  );
};

export default Footer;
