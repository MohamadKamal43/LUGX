import React, { useState, useEffect, useCallback } from 'react';

function MobileMenu({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // Check if we're on mobile view
  useEffect(() => {
    const checkWidth = () => {
      const mobile = window.innerWidth <768;
      setIsMobile(mobile);
      
      // If we resize from mobile to desktop, ensure menu is shown
      if (!mobile && menuOpen) {
        setMenuOpen(false);
      }
    };
    
    // Initial check
    checkWidth();
    
    // Add event listener
    window.addEventListener('resize', checkWidth);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, [menuOpen]);
  
  // Close menu when clicking outside
  const closeOnClickOutside = useCallback((e) => {
    const menuTrigger = document.querySelector('.menu-trigger');
    const navElement = document.querySelector('ul.nav');
    
    if (menuOpen && 
        menuTrigger && 
        navElement && 
        !menuTrigger.contains(e.target) && 
        !navElement.contains(e.target)) {
      setMenuOpen(false);
    }
  }, [menuOpen]);
  
  useEffect(() => {
    if (menuOpen && isMobile) {
      document.addEventListener('click', closeOnClickOutside);
    } else {
      document.removeEventListener('click', closeOnClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', closeOnClickOutside);
    };
  }, [menuOpen, isMobile, closeOnClickOutside]);
  
  // Close menu when clicking a link
  useEffect(() => {
    const navLinks = document.querySelectorAll('ul.nav a');
    
    const handleLinkClick = () => {
      if (isMobile) {
        setMenuOpen(false);
      }
    };
    
    navLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });
    
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, [isMobile]);
  
  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };
  
  return (
    <>
      <a 
        href="#" 
        className={menuOpen ? "menu-trigger active" : "menu-trigger"} 
        onClick={toggleMenu}
      >
        <span>Menu</span>
      </a>
      
      {React.cloneElement(children, {
        style: { 
          display: isMobile ? (menuOpen ? 'block' : 'none') : 'flex',
          opacity: 1
        },
        className: children.props.className
      })}
    </>
  );
}

export default MobileMenu;
