import React from 'react'
import bgImage from "../../public/assets/images/header.jpg"
import { Link } from 'react-router-dom';
const BreadCrumbs = ({ route }) => {
  const lists = [];
  for (let i = 0; i < route.length; i++) {
    let text = (route[i].text === "home_icon") ? <i className="fa fa-home breadcrumb-home-icon" aria-hidden="true"></i> : route[i].text;
    lists.push(
      <div key={i} className={i == route.length - 1 ? "active" : ""}>
        <Link to={route[i].link}>{text}</Link>
      </div>
    );
    if (i != route.length - 1)
      lists.push(
        <div key={`sep-${i}`}>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      );
  }
  return (
    <div className="page-heading">
      <div className="page-heading-overlay">
        <img src={bgImage} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <div className="header-text">
            <h2>{route[route.length-1].text}</h2>
          </div>
            <div className="breadcrumb">
              {lists}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumbs