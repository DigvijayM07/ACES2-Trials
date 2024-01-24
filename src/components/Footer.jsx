import React from "react";
import logo from "../assets/pwa/icon.png";

const locationUrl =
  "https://www.google.com/maps/place/D.Y.+Patil+College+of+Engineering/@18.6449794,73.7562764,16.5z/data=!4m9!1m2!2m1!1sD.+Y.+Patil+College+of+Engineering,+D.+Y.+Patil+Educational+Complex,+Sector+29,+Nigdi+Pradhikaran,+Akurdi,+Pune+411044.!3m5!1s0x3bc2b9f1ca8dab03:0x6237cfbd36f9acf9!8m2!3d18.6448378!4d73.7582119!15sCndELiBZLiBQYXRpbCBDb2xsZWdlIG9mIEVuZ2luZWVyaW5nLCBELiBZLiBQYXRpbCBFZHVjYXRpb25hbCBDb21wbGV4LCBTZWN0b3IgMjksIE5pZ2RpIFByYWRoaWthcmFuLCBBa3VyZGksIFB1bmUgNDExMDQ0LlptImtkeSBwYXRpbCBjb2xsZWdlIG9mIGVuZ2luZWVyaW5nIGR5IHBhdGlsIGVkdWNhdGlvbmFsIGNvbXBsZXggc2VjdG9yIDI5IG5pZ2RpIHByYWRoaWthcmFuIGFrdXJkaSBwdW5lIDQxMTA0NJIBB2NvbGxlZ2WaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUnZNM010VEdGbkVBRQ";

const Footer = () => {
  return (
    <div className="bg-opacity-90 bg-gray-800 p-8 flex flex-col items-center">
      <a href="/creators" className="cursor-pointer">
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            src={logo}
            className="w-20 h-20 mb-2"
            alt="DRAIC Logo"
          />
          <h1 className="text-xl font-bold text-white">ACES DYPCOE</h1>
          <p className="text-sm text-white">Let's get ready to dive into Tech</p>
        </div>
      </a>
      
      <div className="flex flex-col md:flex-row mt-8 w-full justify-between">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-lg font-bold text-white">aS</h1>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:space-y-0">
            <li>
              <a href="/" className="text-white hover:text-blue-500">Home</a>
            </li>
            <li>
              <a href="/project" className="text-white hover:text-blue-500">Projects</a>
            </li>
            <li>
              <a href="/achievements" className="text-white hover:text-blue-500">Newsletter</a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-blue-500">About</a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-blue-500">Contact</a>
            </li>
            <li>
              <a href="/team" className="text-white hover:text-blue-500">Team</a>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
          <h1 className="text-lg font-bold text-white">DEPARTMENTS</h1>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:space-y-0">
            <li>
              <a href="/programmingDepartment" className="text-white hover:text-blue-500">Technical</a>
            </li>
            <li>
              <a href="/MechanicalDepartment" className="text-white hover:text-blue-500">Cultural</a>
            </li>
            <li>
              <a href="/ElectricalDepartment" className="text-white hover:text-blue-500">Management</a>
            </li>
            <li>
              <a href="/PublicRelations" className="text-white hover:text-blue-500">Sports</a>
            </li>
            <li>
              <a href="/Creators" className="text-white hover:text-blue-500">Creators</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col items-center mt-8 w-full md:w-auto">
        <div className="flex items-center">
          <img
            loading="lazy"
            decoding="async"
            alt=" "
            className="w-6 h-6 mr-2"
            src="https://img.icons8.com/color-glass/48/4a90e2/google-maps-new.png"
          />
          <h1 className="text-lg font-bold text-white">Locate Us</h1>
        </div>
        <a
          href={locationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 text-center"
        >
          D. Y. Patil College of Engineering, Dr. D. Y. Patil
          <br />
          Educational Complex, Sector 29, Nigdi
          <br />
          Pradhikaran, Akurdi, Pune 411044.
        </a>
      </div>
      
      <div className="flex mt-8">
        <a
          href="https://www.instagram.com/draicdypcoe/"
          target="_blank"
          rel="noreferrer"
          className="mr-4 hover:scale-110 transform transition-transform"
        >
          <img
            loading="lazy"
            decoding="async"
            className="w-8 h-8"
            src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
            alt="Instagram"
          />
        </a>
        <a
          href="https://twitter.com/DraicDypcoe"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transform transition-transform"
        >
          <img
            loading="lazy"
            decoding="async"
            className="w-8 h-8"
            src="https://img.icons8.com/color/48/000000/twitter-squared.png"
            alt="Twitter"
          />
        </a>
      </div>
      
      <div className="w-full mt-8 text-center">
        <div className="w-4/5 mx-auto h-1 bg-white"></div>
        <p className="text-white mt-4">
          © 2022 D.Y. Patil Robotics & AI Club. <br />
          All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
