import React from 'react'
import '../slider/Slider.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from '../../images/img-1.png'
import img2 from '../../images/img-2.png'
import img3 from '../../images/img-3.png'
const Slider = () => {
  const items=[
   <img src={img1} style={{textAlign:"center",marginLeft:"auto",marginRight:"auto",display:"block",marginTop:"30px"}} onDragStart={Slider}/> ,
    <img src={img2}  style={{textAlign:"center",marginLeft:"auto",marginRight:"auto",display:"block"}} onDragStart={Slider}/>,
    <img src={img3} style={{textAlign:"center",marginLeft:"auto",marginRight:"auto",display:"block"}} onDragStart={Slider}/>,

  ]

  return (
    <div className="slider-container">
      <h2 style={{textAlign:"center"}} >What our Student Saying</h2>
      <AliceCarousel mouseTracking items={items} />
    </div>
  )
}

export default Slider
