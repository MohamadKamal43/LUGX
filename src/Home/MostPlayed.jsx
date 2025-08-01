import React from 'react'
import { Link } from 'react-router'

function MostPlayed() {
  return (
    <div>
        <div className="section most-played">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <h6>TOP GAMES</h6>
            <h2>Most Played</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-button">
            <a href="shop.html">View All</a>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <Link to="/details">
                <img src="assets/images/top-game-01.jpg" alt="" />
              </Link>
            </div>
            <div className="down-content">
              <span className="category">Adventure</span>
              <h4>Assasin Creed</h4>
              <Link to="/shop">Explore</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <Link to="/details">
                <img src="assets/images/top-game-02.jpg" alt="" />
              </Link>
            </div>
            <div className="down-content">
              <span className="category">Adventure</span>
              <h4>Assasin Creed</h4>
              <Link to="/shop">Explore</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <Link to="/details">
                <img src="assets/images/top-game-03.jpg" alt="" />
              </Link>
            </div>
            <div className="down-content">
              <span className="category">Adventure</span>
              <h4>Assasin Creed</h4>
              <Link to="/shop">Explore</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <Link to="/details">
                <img src="assets/images/top-game-04.jpg" alt="" />
              </Link>
            </div>
            <div className="down-content">
              <span className="category">Adventure</span>
              <h4>Assasin Creed</h4>
              <Link to="/shop">Explore</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <Link to="/details">
                <img src="assets/images/top-game-05.jpg" alt="" />
              </Link>
            </div>
            <div className="down-content">
              <span className="category">Adventure</span>
              <h4>Assasin Creed</h4>
              <Link to="/shop">Explore</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <Link to="/details">
                <img src="assets/images/top-game-06.jpg" alt="" />
              </Link>
            </div>
            <div className="down-content">
              <span className="category">Adventure</span>
              <h4>Assasin Creed</h4>
              <Link to="/shop">Explore</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default MostPlayed