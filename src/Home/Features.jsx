import React from 'react'
import StatsCounter from '../Components/StatsCounter'

function Features() {
  return (
    <div>
        <div className="features">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <a href="#">
            <div className="item">
              <div className="image">
                <img
                  src="assets/images/featured-01.png"
                  alt=""
                  style={{ maxWidth: 44 }}
                />
              </div>
              <h4>Free Storage</h4>
              <div className="stats">
                <span className="count-number">
                  <StatsCounter end={250} suffix="TB" />
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="#">
            <div className="item">
              <div className="image">
                <img
                  src="assets/images/featured-02.png"
                  alt=""
                  style={{ maxWidth: 44 }}
                />
              </div>
              <h4>User More</h4>
              <div className="stats">
                <span className="count-number">
                  <StatsCounter end={16500} suffix="+" />
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="#">
            <div className="item">
              <div className="image">
                <img
                  src="assets/images/featured-03.png"
                  alt=""
                  style={{ maxWidth: 44 }}
                />
              </div>
              <h4>Reply Ready</h4>
              <div className="stats">
                <span className="count-number">
                  <StatsCounter end={97} suffix="%" />
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="#">
            <div className="item">
              <div className="image">
                <img
                  src="assets/images/featured-04.png"
                  alt=""
                  style={{ maxWidth: 44 }}
                />
              </div>
              <h4>Easy Layout</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Features