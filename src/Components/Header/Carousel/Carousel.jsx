import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { imagesToLoop } from './img/data';
import classes from './Carousel.module.css'

const CarouselEffect = () => {
  return (
    <div>
      <Carousel
autoPlay ={true}
infiniteLoop ={true}
showThumbs = {false}
showIndicators = {false}
showStatus ={false}
showArrows = {true}
      >
{
    imagesToLoop.map((imageLiks)=>{
        return <img src={imageLiks}/>
    })
}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  )
}

export default CarouselEffect