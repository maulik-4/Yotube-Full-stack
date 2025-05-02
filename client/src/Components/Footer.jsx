import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-gray-400 py-8 px-4 md:px-12 border-t border-gray-800/50 backdrop-blur-sm relative z-10 lg:ml-[240px] transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Top Section with links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-800/30">
          {/* About */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4 flex items-center">
              <FaYoutube className="text-red-600 mr-2 text-xl" />
              YouTube Clone
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              A full-featured YouTube clone built with React, Node.js, and MongoDB.
              Browse, upload, and interact with videos just like the real platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="/trending" className="hover:text-blue-400 transition-colors duration-200">Trending</a>
              </li>
              <li>
                <a href="/upload" className="hover:text-blue-400 transition-colors duration-200">Upload</a>
              </li>
              <li>
                <a href="/subscriptions" className="hover:text-blue-400 transition-colors duration-200">Subscriptions</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="www.linkedin.com/in/maulik-vijay-681707283/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 text-white p-2.5 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=maulikvijay4@gmail.com&su=Hello+Maulik&body=This+is+a+pre-filled+message"
                target='blank'
                className="bg-gray-800 hover:bg-red-600 text-white p-2.5 rounded-full transition-colors duration-300"
                aria-label="Email"
              >
                <MdEmail className="text-xl" />
              </a>
              <a
                href="https://github.com/maulik-4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white p-2.5 rounded-full transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
            <p className="text-sm text-gray-500">Get in touch for opportunities or feedback</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} YouTube Clone. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-sm flex items-center">
            <span className="inline-block animate-pulse text-red-500 mr-1">❤️</span> 
            Made with passion by Maulik Vijay
          </p>
          <div className="text-sm">
            <a href="/privacy" className="text-gray-500 hover:text-white transition-colors duration-200 mr-4">
              Privacy
            </a>
            <a href="/terms" className="text-gray-500 hover:text-white transition-colors duration-200">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;