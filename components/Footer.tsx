'use client';

import { useState } from 'react';
import { FaArrowDown, FaArrowUp, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const [isTechOpen, setIsTechOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isInvestorsOpen, setIsInvestorsOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Technology Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 hover:text-blue-400 transition-colors duration-300 hidden sm:block">
              Technology
            </h3>
            <ul className="space-y-2 hidden sm:block">
              <li className="hover:text-blue-400 transition-colors duration-300">SSi Mantra</li>
              <li className="hover:text-blue-400 transition-colors duration-300">SSi Mudra</li>
              <li className="hover:text-blue-400 transition-colors duration-300">SSi Maya</li>
              <li className="hover:text-blue-400 transition-colors duration-300">SSi Yantra</li>
              <li className="hover:text-blue-400 transition-colors duration-300">SSi Sutra</li>
            </ul>

            {/* Mobile Dropdown */}
            <div className="sm:hidden">
              <h3 className="text-xl font-semibold mb-4 hover:text-blue-400 transition-colors duration-300 flex justify-between items-center cursor-pointer"
                   onClick={() => setIsTechOpen(!isTechOpen)}>
                Technology
                {isTechOpen ? <FaArrowUp /> : <FaArrowDown />}
              </h3>
              {isTechOpen && (
                <ul className="space-y-2">
                  <li className="hover:text-blue-400 transition-colors duration-300">SSi Mantra</li>
                  <li className="hover:text-blue-400 transition-colors duration-300">SSi Mudra</li>
                  <li className="hover:text-blue-400 transition-colors duration-300">SSi Maya</li>
                  <li className="hover:text-blue-400 transition-colors duration-300">SSi Yantra</li>
                  <li className="hover:text-blue-400 transition-colors duration-300">SSi Sutra</li>
                </ul>
              )}
            </div>
          </div>

          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 hover:text-blue-400 transition-colors duration-300 hidden sm:block">
              About Us
            </h3>
            <ul className="space-y-2 hidden sm:block">
              <li className="hover:text-blue-400 transition-colors duration-300">Company</li>
              <li className="hover:text-blue-400 transition-colors duration-300">News</li>
              <li className="hover:text-blue-400 transition-colors duration-300">Media Assets</li>
            </ul>

            {/* Mobile Dropdown */}
            <div className="sm:hidden">
              <h3 className="text-xl font-semibold mb-4 hover:text-blue-400 transition-colors duration-300 flex justify-between items-center cursor-pointer"
                   onClick={() => setIsAboutOpen(!isAboutOpen)}>
                About Us
                {isAboutOpen ? <FaArrowUp /> : <FaArrowDown />}
              </h3>
              {isAboutOpen && (
                <ul className="space-y-2">
                  <li className="hover:text-blue-400 transition-colors duration-300">Company</li>
                  <li className="hover:text-blue-400 transition-colors duration-300">News</li>
                  <li className="hover:text-blue-400 transition-colors duration-300">Media Assets</li>
                </ul>
              )}
            </div>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 hover:text-blue-400 transition-colors duration-300 hidden sm:block">
              Legal
            </h3>
            <ul className="space-y-2 hidden sm:block">
              <li className="hover:text-blue-400 transition-colors duration-300">Safety Information</li>
              <li className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</li>
              <li className="hover:text-blue-400 transition-colors duration-300">POSH Policy</li>
            </ul>

            {/* Mobile Dropdown */}
            <div className="sm:hidden">
              <h3 className="text-xl font-semibold mb-4 hover:text-blue-400 transition-colors duration-300 flex justify-between items-center cursor-pointer"
                   onClick={() => setIsLegalOpen(!isLegalOpen)}>
                Legal
                {isLegalOpen ? <FaArrowUp /> : <FaArrowDown />}
              </h3>
              {isLegalOpen && (
                <ul className="space-y-2">
                  <li className="hover:text-blue-400 transition-colors duration-300">Safety Information</li>
                  <li className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</li>
                  <li className="hover:text-blue-400 transition-colors duration-300">POSH Policy</li>
                </ul>
              )}
            </div>
          </div>

          {/* Investors Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 hover:text-blue-400 transition-colors duration-300 hidden sm:block">
              Investors
            </h3>
            <ul className="space-y-2 hidden sm:block">
              <li className="hover:text-blue-400 transition-colors duration-300">SEC Filings</li>
            </ul>

            {/* Mobile Dropdown */}
            <div className="sm:hidden">
              <h3 className="text-xl font-semibold mb-4 hover:text-blue-400 transition-colors duration-300 flex justify-between items-center cursor-pointer"
                   onClick={() => setIsInvestorsOpen(!isInvestorsOpen)}>
                Investors
                {isInvestorsOpen ? <FaArrowUp /> : <FaArrowDown />}
              </h3>
              {isInvestorsOpen && (
                <ul className="space-y-2">
                  <li className="hover:text-blue-400 transition-colors duration-300">SEC Filings</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Certifications & Legal Info */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">EN ISO 13485:2016 Certified</p>
          <p className="text-sm">CDSCO Manufacturing License No : MFG/MD/2024/000827</p>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://facebook.com" className="text-white hover:text-blue-500 transition-colors duration-300">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-blue-500 transition-colors duration-300">
            <FaTwitter size={20} />
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-blue-500 transition-colors duration-300">
            <FaLinkedin size={20} />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-blue-500 transition-colors duration-300">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Footer Legal Text */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            © 2025 SS Innovations International, Inc. | © 2025 Sudhir Srivastava Innovations Pvt. Ltd. | All products and product names are registered trademarks or pending trademarks of Sudhir Srivastava Innovations Pvt. Ltd. | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}