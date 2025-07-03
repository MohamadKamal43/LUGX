import React from 'react';

function SmoothScrollLink({ to, children, className }) {
  const handleClick = (e) => {
    e.preventDefault();
    
    // Get the target element
    const targetId = to.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Handle mobile menu if it's open
      const mobileMenu = document.querySelector('.menu-trigger');
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.click();
      }
      
      // Calculate the target position
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
      
      // Smooth scroll to target
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

export default SmoothScrollLink;
