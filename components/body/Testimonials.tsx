import Image from 'next/image'
import React from 'react'
import CardSlider from '../CardSlider'

function Testimonials() {

    return (
        <div className='w-full h-full grid-cols-1 visiblity'>
            <div className=" lg:text-[44px] text-[30px] space-x-1  font-extrabold p-2 lg:p-4">
                What Our Customers Say !
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <Image
                    src="/images/Feedback.gif"
                    alt='Question gif'
                    height={900}
                    width={500}


                />
                <div className="flex ">
                    <CardSlider />
                </div>
            </div>
        </div>
    )
}

export default Testimonials