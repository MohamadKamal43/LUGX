import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart';

function Navbar() {
  const {totalItems} = useCart();
  
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const $ = window.jQuery;
      if ($) {
        $('.navbar-toggler').on('click', function() {
          $($(this).data('target')).toggleClass('show');
        });
      }
    }
  }, []);
  
  return (
    <div>
      <div className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12 " style={{background: "#042b4c"}}>
              <nav className="main-nav navbar navbar-expand-lg">
                {/* ***** Logo Start ***** */}
                <NavLink to="/" className="logo">
                  <img src="assets/images/logo.png" alt="" style={{ width: 158 }} className="fade-in" />
                </NavLink>
                {/* ***** Logo End ***** */}
                
                {/* ***** Bootstrap Toggler ***** */}
                <button 
                  className="navbar-toggler shake-on-hover" 
                  type="button" 
                  data-toggle="collapse" 
                  data-target="#navbarNavDropdown" 
                  aria-controls="navbarNavDropdown" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* ***** Menu Start ***** */}
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item stagger-item">
                      <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item stagger-item">
                      <NavLink to="/shop" className={({isActive}) => isActive ? "active" : ""}>
                        Our Shop
                      </NavLink>
                    </li>
                    <li className="nav-item stagger-item">
                      <NavLink to="/details" className={({isActive}) => isActive ? "active" : ""}>
                        Product Details
                      </NavLink>
                    </li>
                    <li className="nav-item stagger-item">
                      <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>
                        Contact Us
                      </NavLink>
                    </li>
                    <li className="nav-item cart-items stagger-item">
                      <NavLink to="/cart" className={({isActive}) => isActive ? "active" : ""}>
                        <i className='fa fa-cart-shopping'></i><span className="pulse">{totalItems}</span> Cart
                      </NavLink>
                    </li>
                  </ul>
                </div>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar