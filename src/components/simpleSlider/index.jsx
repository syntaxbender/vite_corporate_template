import React from 'react'
import Slider from "react-slick";

const SimpleSlider = (props) => {
  const SliderComponent = Slider.default ? Slider.default : Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div className="slider-container">
      <SliderComponent {...settings}>
        {props.children}
      </SliderComponent>
    </div>
  )
}

export default SimpleSlider