import React, { useState, useEffect } from 'react';

function FilterableGallery({ items, renderItem, filterCategories }) {
  const [activeFilter, setActiveFilter] = useState('*');
  const [filteredItems, setFilteredItems] = useState(items);
  
  useEffect(() => {
    if (activeFilter === '*') {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.category === activeFilter));
    }
  }, [activeFilter, items]);
  
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  
  return (
    <div>
      {filterCategories && (
        <ul className="trending-filter">
          <li>
            <a 
              href="#" 
              className={activeFilter === '*' ? 'is_active' : ''} 
              onClick={(e) => { e.preventDefault(); handleFilterClick('*'); }}
              data-filter="*"
            >
              Show All
            </a>
          </li>
          {filterCategories.map((category, index) => (
            <li key={index}>
              <a 
                href="#" 
                className={activeFilter === category ? 'is_active' : ''} 
                onClick={(e) => { e.preventDefault(); handleFilterClick(category); }}
                data-filter={category}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      )}
      
      <div className="trending-box">
        {filteredItems.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
}

export default FilterableGallery;
