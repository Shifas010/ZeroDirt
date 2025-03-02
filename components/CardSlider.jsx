"use client"

import React, { useEffect, useState } from 'react';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This laundry service is amazing! They always get my clothes looking brand new, and they are quick too!",
      name: "Jane Doe",
      starcout: 3
    },
    {
      quote: "I love how eco-friendly this service is. My clothes feel fresh, and I’m happy they use sustainable methods.",
      name: "John Smith",
      starcout: 4
    },
    {
      quote: "Best dry cleaning service I've used in years. Fast, reliable, and the staff is always friendly!",
      name: "Alice Brown",
      starcout: 2
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const StarCount = () => {

    retun(
      <div className=""></div>
    )
  }

  const StarImage = (starCount) => {
    const Star = []
    for (let index = 0; index < starCount; index++) {
      Star.push(<svg key={index} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 20 20"><g fill="none"><path fill="url(#fluentColorStar200)" d="M9.104 2.899a1 1 0 0 1 1.794 0l1.93 3.911l4.317.627a1 1 0 0 1 .554 1.706l-3.124 3.045l.738 4.299a1 1 0 0 1-1.451 1.054l-3.86-2.03l-3.862 2.03a1 1 0 0 1-1.45-1.054l.737-4.3l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627z" /><defs><linearGradient id="fluentColorStar200" x1="18" x2="1.55" y1="18" y2="2.477" gradientUnits="userSpaceOnUse"><stop stopColor="#00ABF0" /><stop offset="1" stopColor="#00ABF0" /></linearGradient></defs></g></svg>)
    }
  
    if(starCount == Star.length){
      return Star

    }

  }


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative container mx-auto  lg:px-4 py-8">
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-xl overflow-hidden p-4">
          <div className="transition-all duration-500 h-[400px] bg-[#1A6FA8] rounded-lg  bg-opacity-5  ease-in-out justify-center items-center flex">
            <div>
              <div className="h-1/3 w-full justify-center items-center flex">
                <div className="">
                  <div className="rounded-[100%] bg-gray-400 h-[100px] w-[100px]"></div>
                  <div className="justify-center font-bold text-[#1A6FA8] flex">{testimonials[currentIndex].name}</div>
                </div>
              </div>
              <div className="justify-center flex text-center p-4 truncate text-wrap overflow-hidden"> {testimonials[currentIndex].quote}</div>
              <div className="justify-center items-center flex  p-4">{

                StarImage(testimonials[currentIndex].starcout)


              }  </div>

            </div>

          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 lg:px-2">
        <button
          onClick={prevSlide}
          className="bg-gray-300 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
        >
          &#10094;
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 lg:px-4">
        <button
          onClick={nextSlide}
          className="bg-gray-300 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
