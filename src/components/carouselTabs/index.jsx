import React from 'react'
import Slider from "react-slick";
import slide1 from "../../assets/images/service-details-01.jpg"
// const CarouselTabs = () => {
//   return (
//     <div className="tabs">
//       <div className="row">
//         <div className="col-lg-12">
//           <div className="menu">

//           </div>
//         </div>
//         <div className="col-lg-12">
//           <ul className="nacc">

//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CarouselTabs



function CarouselTabs({ tabs, contents }) {
  const tabsJSX = [];
  const contentsJSX = [];
  const SliderComponent = Slider.default ? Slider.default : Slider
  // const menu =
  //   [<div key={1} className="gradient-border"><span>Crypto Investments</span></div>,
  //   <div key={2} className="gradient-border"><span>Cryptocurrency Market</span></div>,
  //   <div key={3} className="gradient-border"><span>Financial Planning</span></div>];
  for (const i in tabs) {
    tabsJSX.push(
      <div key={1} className="gradient-border"><span>{tabs[i]}</span></div>
    )
  }
  const settings = {
    customPaging: function (i) {
      return (
        tabsJSX[i]
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  for (const i2 in contents) {
    contentsJSX.push(
      <div>
        <div className="row">
          <div className="col-lg-5 left-image">
            <img src={contents[i2].image} />
          </div>
          <div className="col-lg-7 right-content">
            <div>
              {contents[i2].content}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="tabs-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <SliderComponent {...settings}>
              {/* <div>
                <div className="row">
                  <div className="col-lg-5 left-image">
                    <img src={slide1} alt="" />
                  </div>
                  <div className="col-lg-7 right-content">
                    <div>
                      <h4>Learn more about cryptocurrency investments</h4>
                      <p>Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.</p>
                      <span>- Top Crypto prices and charts</span>
                      <span>- Is Cryptocurrency a good investment?</span>
                      <span className="last-span">- Crypto Market Insiders and News</span>
                    </div>
                  </div>
                </div>
              </div> */}
              {contentsJSX}
            </SliderComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselTabs;