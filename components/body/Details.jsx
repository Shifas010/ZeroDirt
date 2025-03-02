"use client"

import React, { useEffect, useRef, useState } from 'react'
import "./Details.css";
import Image from 'next/image';
import gsap from 'gsap';
import { Gsap } from '../utils/gsaphandler';



function Details() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null)
  const images = [
    "/images/cleaning-serviceccc.jpeg",
    "/images/laundry.png"
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    Gsap().GsapTB()
    Gsap().GsapVisiblity()

    if (textRef.current) {
      const text = textRef.current.textContent;
      textRef.current.innerHTML = text.split('').map(char => `<span class="char">${char}</span>`).join('');

      const chars = textRef.current.querySelectorAll('.char');

      const tl = gsap.timeline({ repeat: -1, repeatRefresh: true });

      tl.fromTo(chars, { opacity: 0 }, {
        opacity: 1,
        duration: 0.1,
        stagger: 0.1,
      });

      tl.to(chars, {
        opacity: 0, 
        duration: 0.5,
        stagger: 0.05,
        ease: "power4.inOut",
      });
    }
  }, []);





  return (
    <div className="lg:h-[650px] h-[400px] text-center grid lg:grid-cols-2 items-center  ">
      <div className='font-bold text-xl lg:text-2xl text-[#00ABF0] text-pretty lg:p-14'>
        <div className='quote' ref={textRef}>
          "Experience hassle-free Laundry and Cleaning Services with
          <b className='text-[#1A6FA8] text-3xl'>ZeroDirt</b>. We deliver top-quality, fresh results, ensuring your wardrobe and home stay spotless, so you can enjoy more time and comfort."</div>
      </div>
      <div className="p-10 hidden justify-center items-center lg:flex visiblity gsapTB ">
        <Image
          src="/images/home.png"
          width={600}
          height={400}
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}

export default Details