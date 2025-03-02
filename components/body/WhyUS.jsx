import React, { useEffect, useRef } from 'react'
import Cart from "../card"


function WhyUS() {




    const CartDetails = [
        {
            Header: "Fast and Reliable ",
            discription: "Service",
            textsize: "lg:text-4xl text-xl font-bold"


        }
        , {
            Header: "Expert Care for",
            discription: "All Fabrics",
            textsize: "lg:text-4xl text-xl font-bold"


        }, {
            Header: "Happy clients",
            discription: "1000 + ",
            discriptionAnimation:true,
            textsize: "lg:text-4xl text-xl font-bold"

        }
    ]
    return (
        <div className="h-[400px] bg-white items-center details " >

            <div className="text-3xl lg:text-5xl flex font-bold text-[#1A6FA8] text-wrap items-center">  Why&thinsp;  <p className='text-[#00ABF0] text-5xl lg:text-7xl &nbsp'>  Choose&thinsp;  </p> US</div>
            <Cart CartDetails={CartDetails} Height={"150px"} DivCol={3} BackgroundColor={"#ffff"} Border={true} />

        </div>
    )
}

export default WhyUS