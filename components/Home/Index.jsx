'use client'

import NavBar from '../nav/Index'
import Footer from "../footer/Index"
import AppBody from "../body/Index"
import {Gsap} from "../utils/gsaphandler"




import React, { useEffect } from 'react';
import './Home.css';



const Home = () => {


  return (
    <div className="grid h-screen grid-cols-1 pt-4">
      <div>
        <div className='fixed top-0 w-full z-50'><NavBar /></div>
        <div ><AppBody /></div>
        <div><Footer /></div>
      </div>
    </div>
  );
};

export default Home;
