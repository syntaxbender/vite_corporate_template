import React from 'react'
import { Link } from 'react-router-dom'

const ColoredCard = ({title,link,img}) => {
  return (
    <div className="col-lg-4 col-xxl-3 col-12 p-1 p-xxl-2">
    <Link to={link}>
      <div className="card-container">
        <div className="card-container-content">
          <img src={img} alt="#" />
          <div className="content-area">
            <div className="content-text">
              <span className="content-header">{title}</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
  )
}

export default ColoredCard