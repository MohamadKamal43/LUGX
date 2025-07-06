import React, { useContext, useState } from 'react'
import { apiValue } from '../Data/AllData';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router';
function Page(){
  const [search,setSearch] = useState(0);
        const data =useContext(apiValue);
        const{addItem} =useCart( );
    const getValue = (e) => {
      setSearch(e.target.value);
    }
  return(
         <div className="section trending">
    <div className="container"> 
      <div className="row trending-box">
         <div className='col-md-10 m-auto mb-4 d-flex align-items-center justify-content-center flex-column'>
                            <input type="text" className='form-control m-2'  placeholder='Search' onChange={getValue}/>
          <button role="button" className='btn text-light search-btn' >Search Now</button>
                          </div>
          {data.map((item) => {
            return search == 0?(
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="item">
            <div className="thumb">
              <Link to="/details">
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'assets/images/default-game.jpg';
                  }}
                />
              </Link>
              <span className="price">
                {item.price === 0 ? (
                  <span style={{color: '#fff', fontWeight: 'bold'}}>FREE</span>
                ) : (
                  <>
                    {item.originalPrice > item.price && <em>${item.originalPrice}</em>}
                    ${item.price}
                  </>
                )}
              </span>
            </div>
            <div className="down-content">
              <span className="category  badge bg-dark text-light">{item.category}</span>
              <h4>{item.title}</h4>
              <p >Platforms: {item.platform}</p>
              <p >Release Date: {item.releaseDate}</p>
              <p >Size: {item.downloadSize}</p>
              <p >Type: {item.genre}</p>
              <p><i className="fa fa-star text-warning me-1"></i>{item.rating}</p>
              <button className='btn text-light' style={{background:"#042b4c"}} onClick={() => addItem(item)}>
                <i className="fa fa-shopping-cart " /> Add to Cart
              </button>
            </div>
                </div>
              </div>
            ):item.title.toLowerCase().includes(search.toLowerCase())?
            (
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="item">
            <div className="thumb">
              <a href="product-details.html">
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'assets/images/default-game.jpg';
                  }}
                />
              </a>
              <span className="price">
                {item.price === 0 ? (
                  <span style={{color: '#fff', fontWeight: 'bold'}}>FREE</span>
                ) : (
                  <>
                    {item.originalPrice > item.price && <em>${item.originalPrice}</em>}
                    ${item.price}
                  </>
                )}
              </span>
            </div>
            <div className="down-content">
              <span className="category  badge bg-dark text-light">{item.category}</span>
              <h4>{item.title}</h4>
              <p >Platforms: {item.platform}</p>
              <p >Release Date: {item.releaseDate}</p>
              <p >Size: {item.downloadSize}</p>
              <p >Type: {item.genre}</p>
              <p><i className="fa fa-star text-warning me-1"></i>{item.rating}</p>
              <button className='btn text-light' style={{background:"#042b4c"}} onClick={() => addItem(item)}>
                <i className="fa fa-shopping-cart " /> Add to Cart
              </button>
            </div>
                </div>
              </div>
            ):item.category.toLowerCase().includes(search.toLowerCase())?
            (
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="item">
            <div className="thumb">
              <a href="product-details.html">
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'assets/images/default-game.jpg';
                  }}
                />
              </a>
              <span className="price">
                {item.price === 0 ? (
                  <span style={{color: '#fff', fontWeight: 'bold'}}>FREE</span>
                ) : (
                  <>
                    {item.originalPrice > item.price && <em>${item.originalPrice}</em>}
                    ${item.price}
                  </>
                )}
              </span>
            </div>
            <div className="down-content">
              <span className="category  badge bg-dark text-light">{item.category}</span>
              <h4>{item.title}</h4>
              <p >Platforms: {item.platform}</p>
              <p >Release Date: {item.releaseDate}</p>
              <p >Size: {item.downloadSize}</p>
              <p >Type: {item.genre}</p>
              <p><i className="fa fa-star text-warning me-1"></i>{item.rating}</p>
              <button className='btn text-light' style={{background:"#042b4c"}} onClick={() => addItem(item)}>
                <i className="fa fa-shopping-cart " /> Add to Cart
              </button>
            </div>
                </div>
              </div>
            ):null
          })}
      </div>
    </div>
  </div>
    
  )
}
function Shop() {
  return (
    <div>
      <Page/>
    </div>
  )
}

export default Shop