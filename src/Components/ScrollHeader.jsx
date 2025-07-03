import React, { useState, useEffect } from 'react';

function ScrollHeader({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Check if mobile menu is open to add background styles
  useEffect(() => {
    // Set up a mutation observer to detect changes in menu-trigger class
    const observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (mutation.attributeName === 'class') {
          const menuTrigger = document.querySelector('.menu-trigger');
          if (menuTrigger) {
            const isMenuOpen = menuTrigger.classList.contains('active');
            setMenuOpen(isMenuOpen);
          }
        }
      }
    });
    
    const menuTrigger = document.querySelector('.menu-trigger');
    if (menuTrigger) {
      observer.observe(menuTrigger, { attributes: true });
    }
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const headerText = document.querySelector('.header-text');
      const header = document.querySelector('header');
      
      if (headerText && header) {
        const boxHeight = headerText.offsetHeight;
        const headerHeight = header.offsetHeight;
        const scroll = window.scrollY;
        
        if (scroll >= boxHeight - headerHeight) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      } else {
        // If .header-text doesn't exist, use a simpler calculation
        const scroll = window.scrollY;
        if (scroll >= 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Call it once on component mount to set initial state
    handleScroll();
    
    // Clean up on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={
        scrolled || menuOpen 
          ? "header-area header-sticky background-header" 
          : "header-area header-sticky"
      }
    >
      {children}
    </header>
  );
}

export default ScrollHeader;
