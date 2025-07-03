import React, { useContext, useState, useEffect } from 'react';
import { apiValue } from '../Data/AllData';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import FilterableGallery from '../Components/FilterableGallery';

function Shop() {
  const [search, setSearch] = useState('');
  const data = useContext(apiValue);
  const { addItem } = useCart();
  const [filteredData, setFilteredData] = useState(data);
  
  // Extract unique categories for filter
  const categories = [...new Set(data.map(item => item.category))];
  
  // Handle search input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  
  // Filter data based on search term
  useEffect(() => {
    if (!search.trim()) {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => 
        item.title.toLowerCase().includes(search.toLowerCase()) || 
        item.category.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [search, data]);
  
  // Render each game item
  const renderGameItem = (item, index) => (
    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
      <div className="item">
        <div className="thumb">
          <Link to={`/details/${item.id}`}>
            <img 
              src={item.thumbnail} 
              alt={item.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "assets/images/featured-01.png"; // Fallback image
              }}
            />
          </Link>
          <span className="price">
            {item.originalPrice > item.price && item.price > 0 ? (
              <>
                <em>${item.originalPrice}</em>${item.price}
              </>
            ) : item.price === 0 ? (
              'Free'
            ) : (
              `$${item.price}`
            )}
          </span>
        </div>
        <div className="down-content">
          <span className="category">{item.category}</span>
          <h4>{item.title}</h4>
          <Link 
            to="#" 
            onClick={(e) => {
              e.preventDefault();
              addItem(item);
            }}
          >
            <i className="fa fa-shopping-bag"></i>
          </Link>
        </div>
      </div>
    </div>
  );
  
  return ( 
    <div className="section trending">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto mb-4 d-flex align-items-center justify-content-center flex-column">
            <input 
              type="text" 
              className="form-control m-2" 
              placeholder="Search for games..." 
              onChange={handleSearch}
              value={search}
            />
          </div>
        </div>
        
        <FilterableGallery
          items={filteredData}
          filterCategories={categories}
          renderItem={renderGmeItem}
        />
      </div>
    </div>
  );
}

export default Shop;
