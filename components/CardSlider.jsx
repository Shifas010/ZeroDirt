"use client"

import React, { useEffect, useState } from 'react';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This laundry service is amazing! They always get my clothes looking brand new, and they are quick too!",
      name: "Saleena",
      place:"(Nilambur)",
      imageUrl:"images/women.png",
      starcout: 3
    },
    {
      quote: "Clothes returned spotless, fresh smelling, neatly folded, delivered on time, prices fair, staff polite, service reliable, exceeded expectations consistently always.",
      name: "mani",
      place:"(Akampadam)",
      imageUrl:"images/man.png",
      starcout: 4
    },
    {
      quote: "Quick turnaround, hygienic washing, eco friendly detergents, courteous team, flexible scheduling, zero complaints, trustworthy laundry partner overall for families daily.",
      imageUrl:"images/man.png",
      name: "Mathews",
      place:"(Nilambur)",
      starcout: 2
    }, {
      quote: "Thorough sanitization, dust eliminated, furniture refreshed, allergens reduced, process smooth, pricing fair, will book again without hesitation, highly trusted service.",
      imageUrl:"images/man.png",
      name: "Sajeer babu",
      place:"(chakkalakkuth)",
      starcout: 4
    },
     {
      quote: "Kitchen and bathrooms sparkling, grease removed, tiles shining, team respectful, safety followed, results visible immediately, impressed with thoroughness, care, professionalism.",
      imageUrl:"images/women.png",
      name: "Rabia",
      place:"(kallempadam)",
      starcout: 3
    },
         {
      quote: "Home looked brand new, deep corners spotless, odors gone, professionals punctual, equipment advanced, attention detailed, satisfaction guaranteed truly beyond expectations.",
      imageUrl:"images/man.png",
      name: "Dr. Varun",
      place:"(Nilambur)",
      starcout: 4
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
                  <div className="justify-center flex  w-[100px]">
                    <img src={testimonials[currentIndex].imageUrl}/>
                  </div>
                  <div className="justify-center font-bold text-[#1A6FA8] flex">{testimonials[currentIndex].name}</div>
                  <div className="justify-center font-bold text-[#1A6FA8] flex">{testimonials[currentIndex].place}</div>
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
