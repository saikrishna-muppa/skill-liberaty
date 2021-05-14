import React from 'react'
import '../slider/Slider'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from '../../images/img-1.png'
import img2 from '../../images/img-2.png'
import img3 from '../../images/img-3.png'
const Slider = () => {
  const items=[
    <img src={img1} className="slider-container" onDragStart={Slider}/>,
    <img src={img2} className="slider-container" onDragStart={Slider}/>,
    <img src={img3} className="slider-container" onDragStart={Slider}/>,

  ]
  return (
    <div >
      <AliceCarousel mouseTracking items={items}/>
    </div>
  )
}

export default Slider
