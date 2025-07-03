import React from 'react'
import { Link } from 'react-router-dom'

function RelatedGames() {
  return (
    <div>
         <div className="section categories related-games">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <h6>Action</h6>
            <h2>Related Games</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-button">
            <Link to="/shop">View All</Link>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <h4>Action</h4>
            <div className="thumb">
              <Link to="/shop">
                <img src="assets/images/categories-01.jpg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <h4>Action</h4>
            <div className="thumb">
              <Link to="/shop">
                <img src="assets/images/categories-05.jpg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <h4>Action</h4>
            <div className="thumb">
              <Link to="/shop">
                <img src="assets/images/categories-03.jpg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <h4>Action</h4>
            <div className="thumb">
              <Link to="/shop">
                <img src="assets/images/categories-04.jpg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <h4>Action</h4>
            <div className="thumb">
              <Link to="/shop">
                <img src="assets/images/categories-05.jpg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default RelatedGames