
'use client'

import { Button } from '@heroui/button'
import React from 'react'



function Cart({ CartDetails, Height, Divcol, CardGap, BackgroundColor, Border, cartBody }) {





  const height = `h-[${Height}]`
  const divCol = `lg:grid-cols-${Divcol}`
  const cardGap = `gap-${CardGap}`
  const backgroundColor = `bg-[${BackgroundColor}]`
  return (
    <div className={` grid   ${Divcol ? divCol : 'grid-cols-2 lg:grid-cols-3'} ${CardGap ? cardGap : "gap-4"} p-1 lg:p-4`}>
     {CartDetails?.map((data, index) => {
  return (
    <div
      key={index}
      className={`
        relative overflow-hidden rounded-md shadow-md
        ${Height ? height : 'h-[288px]'}
        ${Border ? "border border-[#1a6fa821]" : ""}
        flex items-center justify-center
      `}
      style={{
        backgroundImage: `url(${data.imageUrl})`,
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      />

      {/* Glassmorphism Overlay */}
      <div className="
        absolute inset-0
        bg-white/20
        backdrop-blur-md
        border border-white/30
      " />

      {/* Card Content */}
      <div className="relative z-10 w-full h-full p-4 text-white">
        {cartBody ? (
          <div className="h-full w-full">
            <cartBody />
          </div>
        ) : (
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="h-1/4 p-2 flex justify-center items-center">
              <div>
                {data.Icon && (
                  <div className="flex justify-center mb-2">
                    {data.Icon}
                  </div>
                )}
                <div
                  className={`
                    text-center font-black
                    ${data.herdersize ?? "text-xl lg:text-4xl"}
                    text-white
                  `}
                >
                  {data.Header}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="h-3/4 overflow-y-scroll scrollbar-hide flex justify-center px-4">
              {data?.discription && (
                <div
                  className={`
                    text-center p-4
                    ${data.bold ? "font-bold" : ""}
                    ${data?.textsize ?? "text-base"}
                    text-white
                  `}
                >
                  {data.discription}
                </div>
              )}
            </div>
            <div className=" flex  justify-center">
            </div>
          </div>
        )}
      </div>
    </div>
  );
})}

    </div>

  )
}

export default Cart