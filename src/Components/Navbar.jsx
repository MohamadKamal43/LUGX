import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import ScrollHeader from './ScrollHeader';
import MobileMenu from './MobileMenu';

function Navbar() {
  const {totalItems} = useCart();
  return (
    <div>
      <ScrollHeader>
        <div className="container">
          <div className="row ">
            <div className="col-12 ">
              <nav className="main-nav justify-content-between align-items-center d-flex">
                {/* ***** Logo Start ***** */}
                <NavLink to="/" className="logo">
                  <img src="assets/images/logo.png" alt="" style={{ width: 158 }} />
                </NavLink>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <MobileMenu>
                  <ul className="nav">
                    <li>
                      <NavLink to="/" end>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop">Our Shop</NavLink>
                    </li>
                    <li>
                      <NavLink to="/details">Product Details</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                    <li className='cart-items'>
                      <NavLink to="/cart"><i className='fa fa-cart-shopping'></i><span>{totalItems}</span> Cart</NavLink>
                    </li>
                  </ul>
                </MobileMenu>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </ScrollHeader>
    </div>
  )
}

export default Navbar