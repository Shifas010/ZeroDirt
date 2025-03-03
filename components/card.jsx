
'use client'

import React, { useEffect } from 'react'
import gsap from 'gsap';



function Cart({ CartDetails, Height, Divcol, CardGap, BackgroundColor, Border, cartBody }) {





  const height = `h-[${Height}]`
  const divCol = `lg:grid-cols-${Divcol}`
  const cardGap = `gap-${CardGap}`
  const backgroundColor = `bg-[${BackgroundColor}]`
  return (
    <div className={` grid   ${Divcol ? divCol : 'grid-cols-2 lg:grid-cols-3'} ${CardGap ? cardGap : "gap-4"} p-1 lg:p-4`}>
      {CartDetails?.map((data, index) => {
        return (
          <div key={index} className={`  p-4  ${Height ? height : 'h-[288px]'} rounded-md  ${BackgroundColor ? backgroundColor : 'bg-[#1A6FA8]'} shadow-md ${Border ? "border" : " "} border-[#1a6fa821] bg-opacity-5 justify-center items-center flex`}>
            {cartBody ?
              <div className="h-full w-full">
                <cartBody />
              </div>
              :
              <div className="h-full">
                <div className="h-1/4 p-2 justify-center flex">
                  <div className="">
                    {data.Icon &&
                      <div className="justify-center flex ">
                        {data.Icon}
                      </div>
                    }
                    <div className={`items-center text-center  flex font-black ${data.herdersize ? data.herdersize : "text-xl lg:text-4xl"}  text-[#1A6FA8] p-2`}>{data.Header}</div>
                  </div>
                </div>
                <div className="h-3/4 overflow-y-scroll scrollbar-hide  flex justify-center lg:pt-2 mt-3 p-4">
                  {data?.discription && <div   className={`justify-center    text-center p-4   ${data.bold ? "text-black font-bold" : ""} flex ${data?.textsize ? data?.textsize : "text-base"}`}>{data.discription}</div>}
                </div>
              </div>
            }
          </div>
        )

      })
      }
    </div>

  )
}

export default Cart