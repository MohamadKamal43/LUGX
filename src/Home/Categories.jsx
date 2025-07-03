import React, { useContext } from 'react'
import { apiValue } from '../Data/AllData';
import { Link } from 'react-router-dom';

function Categories() {
  const data = useContext(apiValue);
  
  // Get unique categories from the data
  const uniqueCategories = [...new Set(data.map(item => item.category))];
  
  // Map category to a fixed image
  const categoryImages = {
    "Shooter": "assets/images/categories-01.jpg",
    "MMOARPG": "assets/images/categories-02.jpg",
    "Action RPG": "assets/images/categories-03.jpg"
  };
  
  return (
    <div>
      <div className="section categories">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Categories</h6>
                <h2>Top Categories</h2>
              </div>
            </div>
            {uniqueCategories.map((category, index) => (
              <div className="col-lg-4 col-sm-6 col-xs-12" key={index}>
                <div className="item">
                  <h4>{category}</h4>
                  <div className="thumb">
                    <Link to={`/shop?category=${category}`}>
                      <img src={categoryImages[category] || `assets/images/categories-0${index + 1}.jpg`} alt={category} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories