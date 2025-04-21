import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <div>
           <footer className="bg-[#111] text-gray-400 py-6 px-4 md:px-12 mt-10">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
    <p className="text-center">
      © {new Date().getFullYear()}  All rights reserved.
    </p>
    <p className="text-center text-gray-500">
      Made with 💖 by Maulik Vijay
    </p>
    <div className="flex gap-4 text-xl">
      <a
        href="https://www.linkedin.com/in/maulik-4"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors duration-200"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:maulikvijay4@gmail.com"
        className="hover:text-white transition-colors duration-200"
      >
        <MdEmail />
      </a>
      <a
        href="https://github.com/maulik-4"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors duration-200"
      >
        <FaGithub />
      </a>
    </div>
  </div>
</footer>

        </div>
    )
}

export default Footer