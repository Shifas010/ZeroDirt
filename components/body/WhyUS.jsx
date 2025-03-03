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
            <Cart CartDetails={CartDetails} Height={"150px"} DivCol={3} BackgroundColor={"#ffff"} Border={true} />

        </div>
    )
}

export default WhyUS