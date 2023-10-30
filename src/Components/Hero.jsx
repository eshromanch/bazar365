import React from 'react'
import HeroImg from "/Food Background 2 1.png"
import HeroImgSplash from "/Splash food 1.png"

function Hero() {
  return (
    <main className='hero'>
        <div >
            <h1>Experience food <span>Delivery</span> like no other</h1>
            <p>We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more.</p>
        </div>
        <div >
           <div className='hero-img-section'>
           <img className='main-img' src={HeroImg} alt="" />
           <img className='splash-img' src={HeroImgSplash} alt="" />
           </div>
        </div>
    </main>
  )
}

export default Hero