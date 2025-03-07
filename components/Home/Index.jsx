'use client'

import NavBar from '../nav/Index'
import Footer from "../footer/Index"
import AppBody from "../body/Index"




import React from 'react';
import './Home.css';



const Home = () => {


  return (
    <div className="grid h-screen grid-cols-1 pt-4">
      <div>
        <div className='fixed top-0 w-full z-50'><NavBar /></div>
        <div className='pt-10 md:pt-0 flex'><AppBody /></div>
        <div><Footer /></div>
      </div>
    </div>
  );
};

export default Home;
