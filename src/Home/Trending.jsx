import React, { useContext } from 'react'
import { apiValue } from '../Data/AllData';
import { Link } from 'react-router';

function Trending() {
  const data = useContext(apiValue);
  const trendingGames = data?.slice(0, 4) || [];

  return (
    <div>
        <div className="section trending">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <h6>Trending</h6>
            <h2>Trending Games</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-button">
            <Link to="/shop">View All</Link>
          </div>
        </div>
        {trendingGames.map((game, index) => (
          <div key={game.id} className="col-lg-3 col-md-6">
            <div className="item">
              <div className="thumb">
                <a href="product-details.html">
                  <img 
                    src={game.thumbnail || game.images[0] || 'assets/images/default-game.jpg'} 
                    alt={game.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'assets/images/default-game.jpg';
                    }}
                  />
                </a>
                <span className="price">
                  {game.price === 0 ? (
                    <span style={{color: '#fff', fontWeight: 'bold'}}>FREE</span>
                  ) : (
                    <>
                      {game.originalPrice > game.price && <em>${game.originalPrice}</em>}
                      ${game.price}
                    </>
                  )}
                </span>
              </div>
              <div className="down-content">
                <span className="category">{game.category}</span>
                <h4>{game.title}</h4>
                <Link to="/shop">
                  <i className="fa fa-shopping-bag" />
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

export default Trending