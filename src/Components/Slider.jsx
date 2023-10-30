import React, { useRef, useState, useEffect } from "react";
import Ratings from "../Components/Icons/Ratings"
import Stars from "../Components/Icons/Stars"
import LeftArrow from "../Components/Icons/LeftArrow"
import RightArrow from "../Components/Icons/RightArrow"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css';

import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';



const dummyItems = [
    {
      id: 1,
      name: 'Pepperoni Pizza',
      description: 'Di napoles',
      price: "11,99",
      rating: 5,
      image: '/pizza 2 1.png',
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      description: 'Di napoles',
      price:"$13,99",
      rating: 5,
      image: '/3-35083_pepperoni-pizza-slice-png-pepperoni-pizza-transparent-background 1.png',
    },
    {
        id: 3,
        name: 'Vegetarian Pizza',
        description: 'Cosa di Mario',
        price: "$11,99",
        rating: 5,
        image: '/pizza 2 1.png',
      },
      {
        id: 4,
        name: 'Pepperoni Pizza',
        description: 'Di napoles',
        price:"$12,99",
        rating: 5,
        image: '/3-35083_pepperoni-pizza-slice-png-pepperoni-pizza-transparent-background 1.png',
      },
      {
        id: 5,
        name: 'Pepperoni Pizza',
        description: 'Di napoles',
        price: "11,99",
        rating: 5,
        image: '/pizza 2 1.png',
      },
      {
        id: 6,
        name: 'Pepperoni Pizza',
        description: 'Di napoles',
        price:"$13,99",
        rating: 5,
        image: '/3-35083_pepperoni-pizza-slice-png-pepperoni-pizza-transparent-background 1.png',
      },
      {
          id: 7,
          name: 'Vegetarian Pizza',
          description: 'Cosa di Mario',
          price: "$11,99",
          rating: 5,
          image: '/pizza 2 1.png',
        },
        {
          id: 8,
          name: 'Pepperoni Pizza',
          description: 'Di napoles',
          price:"$12,99",
          rating: 5,
          image: '/3-35083_pepperoni-pizza-slice-png-pepperoni-pizza-transparent-background 1.png',
        },
       
     
   
  ];


  const CustomPagination = ({ swiper }) => {
    return (
      <div className="custom-pagination">
        <LeftArrow onClick={() => swiper.slidePrev()}></LeftArrow>
        <RightArrow onClick={() => swiper.slideNext()}></RightArrow>
      </div>
    );
  };
  
  const CustomNavigation = ({ swiper, totalSlides, activeIndex }) => {
    return (
      <div className="custom-navigation">
        {Array.from({ length: totalSlides }, (_, index) => (
          <div
            key={index}
            className={`pagination-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => swiper.slideTo(index)}
          ></div>
        ))}
      </div>
    );
  };
  
  export { CustomPagination, CustomNavigation };


export default function App() {

  
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 900) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(4);
      }
    };

    window.addEventListener("resize", updateSlidesPerView);
    updateSlidesPerView();

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

    
  return (
    <>
<Swiper

onSwiper={setSwiperRef}
slidesPerView={slidesPerView}
centeredSlides={false}
spaceBetween={8}
navigation={true}
pagination={true}
modules={[Navigation, Pagination]}
className="mySwiper mySwiperSlide"
>
  {
    dummyItems.map(items=>{
        return       <SwiperSlide className="mySwiperSlideElement" key={items.id}>
        <div className='card'>
            <Ratings className="ratings"/>
            <Stars className="stars"/>
            <h1 className='points'>{items.rating}</h1>
            <img src={items.image} alt="" />
            <div>
            <h1>{items.name}</h1>
            <p>{items.description}</p>
            <h2>{items.price}</h2>
            </div>
            <button>Add to cart</button>
        </div>
    </SwiperSlide>
    })
  }

      </Swiper>
 
        <CustomPagination swiper={swiperRef} />
    </>
  );
}
