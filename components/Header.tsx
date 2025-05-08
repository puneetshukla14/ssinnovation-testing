'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [sticky, setSticky] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);  // Track the hovered menu item
  const headerRef = useRef<HTMLElement | null>(null);
  const [hidden, setHidden] = useState(false); // Track header visibility
  const lastScrollY = useRef(0);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setHidden(true); // Hide header when scrolling down
      } else {
        setHidden(false); // Show header when scrolling up
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: 'Technology',
      subItems: [
        { label: 'SSi Mantra 3', href: '/ssi-mantra-3' },
        { label: 'SSi Mudra', href: '/ssi-mudra' },
        { label: 'SSi Maya', href: '/ssi-maya' },
        { label: 'SSi Yantra', href: '/ssi-yantra' },
        { label: 'SSi Sutra', href: '/ssi-sutra' },
        
      ],
    },
    {
      title: 'About Us',
      subItems: [
        { label: 'Company', href: '/company' },
        { label: 'Publications', href: '/publications' },
        { label: 'Legal', href: '/legal' },
        { label: 'Media Assets', href: '/media-assets' },
      ],
    },
    {
      title: 'Investors',
      subItems: [
        { label: 'SEC Filings', href: '/sec-filings' },
        { label: 'News', href: '/news' },
      ],
    },
    { title: 'Demo', href: '#demo' },
    {
      title: 'Login',
      subItems: [
        { label: 'Email Login', href: '/login/email' },
        { label: 'ERP Login', href: '/login/erp' },
      ],
    },
    { title: 'Contact Us', href: '#contact' },
  ];

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
    setHoveredMenu(title); // Set the hovered menu
  };

  const handleMouseLeave = () => {
    if (!headerRef.current?.contains((event as MouseEvent).relatedTarget as Node)) {
      setActiveDropdown(null);
      setHoveredMenu(null); // Reset the hovered menu
    }
  };

  return (
    <motion.header
      initial={false}
      animate={{
        y: hidden ? -100 : 0, // Moves header off-screen when hidden
        height: activeDropdown ? 310 : sticky ? 78 : 78,
        backgroundColor: 'black',
        backdropFilter: 'none',
      }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden shadow-lg"
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-[72px] md:h-[88px]">
        <Link href="/">
          <Image src="/logo.png" alt="SS Innovations" width={90} height={30} className="cursor-pointer" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-white font-medium">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => item.subItems && handleMouseEnter(item.title)}
              style={{fontFamily:"sans-serif"}}
            >
              {item.href ? (  
                <Link
                  href={item.href}
                  className={`group relative text-white transition hover:text-blue-400 ${hoveredMenu && hoveredMenu !== item.title ? 'opacity-50' : ''}`}
                  style={{ fontFamily: "'Bebas Neue', sans-serif"

                   }}
                   

                >
                  {item.title}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (


              
                <button className={`group relative flex items-center gap-2 text-white transition hover:text-blue-400 ${hoveredMenu && hoveredMenu !== item.title ? 'opacity-50' : ''}`}>
                  {item.title} <FaChevronDown size={12} />
                  <span className="absolute left-[-2] -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              )}

              {item.subItems && activeDropdown === item.title && (
                <motion.div
                  className="absolute left-0 mt-5 w-48 bg-transparent text-white rounded-md shadow-lg overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setActiveDropdown(activeDropdown)}
                >
                  
                  <ul className="space-y-2 p-3 relative">
                    <motion.div
                      className="absolute top-0 left-[-0px] w-[2px]"
                      style={{ 
                        background: 'linear-gradient(to bottom, white, rgb(0, 0, 0)) rounded curve 20px',
                      }}
                      initial={{ height: 100 }}
                      animate={{
                        height:
                          activeDropdown === 'Technology' ||
                          activeDropdown === 'About Us' ||
                          activeDropdown === 'Investors' ||
                          activeDropdown === 'Login'
                            ? '100%'
                            : '0%',
                      }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>

                    {menuItems
                      .find((menu) => menu.title === activeDropdown)
                      ?.subItems?.map((subItem, i) => (
                        <li key={i} className="rounded-md">
                          <Link
                            href={subItem.href}
                            className="block py-2 px-0 text-sm hover:text-blue-400 transition"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden px-4 py-2 bg-black absolute top-full left-0 right-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <ul className="space-y-4 text-white font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-4 hover:bg-gray-700"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.title ? null : item.title)
                      }
                      className="w-full flex justify-between items-center py-2 px-4"
                    >
                      {item.title}
                      <FaChevronDown
                        className={`transition-transform ${
                          activeDropdown === item.title ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.title && (
                      <motion.ul
                        className="mt-2 pl-4 space-y-2 text-sm text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.subItems?.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
