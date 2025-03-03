import { Link } from '@heroui/link'
import Image from 'next/image'
import React from 'react'



function Footer() {
  const Menus = [
    {
      Link: "#",
      text: "About"
    },
    {
      Link: "https://wa.me/message/SGU4HYPMAQRHG1",
      text: "Link"
    },
    {
      Link: "#CleaningServiceLayout",
      text: "Dry-Cleaning Services"
    },
    {
      Link: "#LaundryServiceLayout",
      text: "Laundy Services"
    }
  ]


  return (
    <div className='bg-opacity-5 p-14 bg-[#1A6FA8] grid lg:grid-cols-7  w-full min-h-[400px]  text-gray-600 '>
      <div className
        ="h-fit md:flex md:col-span-3 justify-center items-center ">
        <Image
          src={"/images/logo.png"}
          width={400}
          height={200}
          alt='logo'
        />
        <div className=' text-center h-full text-lg '>
          <h1 className='text-lg font-bold text-black w-full text-center'>Contact Us</h1>
          <div className="flex p-4">
            <Link href="https://maps.google.com/maps?q=11.27851%2C76.2238372&z=17&hl=en" className="gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 12 12"><path fill="#00ABF0" d="M6 .5A4.5 4.5 0 0 1 10.5 5c0 1.863-1.42 3.815-4.2 5.9a.5.5 0 0 1-.6 0C2.92 8.815 1.5 6.863 1.5 5A4.5 4.5 0 0 1 6 .5m0 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" /></svg>
              <div className="">Door No.1-533/B, Kovilakathumuri Palace Road Nilambur, Malapuram</div>
            </Link>
          </div>
          <div className="flex p-4">
            <Link href='mailto:zerodirt.nbr@gmail.com ' className='gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60" /><path fill="#4285f4" d="M41.636 203.039h31.818v-77.273L28 91.676v97.727c0 7.545 6.114 13.636 13.636 13.636" /><path fill="#34a853" d="M182.545 203.039h31.819c7.545 0 13.636-6.114 13.636-13.636V91.675l-45.455 34.091" /><path fill="#fbbc04" d="M182.545 66.675v59.091L228 91.676V73.492c0-16.863-19.25-26.477-32.727-16.363" /><path fill="#ea4335" d="M73.455 125.766v-59.09L128 107.583l54.545-40.909v59.091L128 166.675" /><path fill="#c5221f" d="M28 73.493v18.182l45.454 34.091v-59.09L60.727 57.13C47.227 47.016 28 56.63 28 73.493" /></g></svg>
            <div className="pl-5">zerodirt.nbr@gmail.com</div>  
            </Link>
          </div>

          <div className="flex p-4 ">
            <Link href='https://www.instagram.com/zerodirt_nbr?igsh=ampwMzY2Z2N2c2g2' className='gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60" /><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60" /><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334" /><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stopColor="#fd5" /><stop offset=".1" stopColor="#fd5" /><stop offset=".5" stopColor="#ff543e" /><stop offset="1" stopColor="#c837ab" /></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stopColor="#3771c8" /><stop offset=".128" stopColor="#3771c8" /><stop offset="1" stopColor="#60f" stopOpacity="0" /></radialGradient></defs></g></svg>
             <div className="pl-5">ZeroDirt</div> 
            </Link>
          </div>
          <div className="flex p-4">
          </div>
        </div>
      </div>
      <div className=" justify-center h-full flex w-full lg:col-start-4 lg:col-span-2 md:p-4 ">
        <div className="">
          <h1 className='text-lg font-bold text-black w-full text-center'>Quick Link</h1>

          {
            Menus.map((item, index) => {

              return (
                <Link key={index} aria-current="page" href={item.Link} className='w-full justify-center flex p-2 text-[#1A6FA8] font-semibold text-lg'>{item.text}</Link>
              )

            })
          }

        </div>
      </div>
      <div className="w-full lg:col-span-2 p-4  md:p-4 md:border-l-1 ">
        <h1 className='text-lg font-bold text-black w-full text-start '>Service Time</h1>
        <div className="flex w-full  border-b-2 ">
          <p className=''>Monday to Saturday</p>
          <p className='end-14 absolute'>9 to 20</p>

        </div>

      </div>
    </div>
  )
}

export default Footer