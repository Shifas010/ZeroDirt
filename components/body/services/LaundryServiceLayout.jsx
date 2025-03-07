import Cart from '@/components/card'
import React from 'react'

function LaundryServiceLayout() {

    const CartDetails = [
        {
            Header: "Washing & Ironing",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#1A6FA8" stroke="#D0D9F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h.01M6 11h.01M10 11h.01M6 15h.01M10 15h.01M14 19v-7C14 6 9 2 8 2S2 6 2 12v7h14a2 2 0 0 0 2-2V8a2 2 0 0 1 4 0v9M3 22h10" /></svg>,
            herdersize: "Xl",
            discription: "Transform your clothes with our expert washing and ironing services! We ensure your garments are impeccably cleaned, fresh, and wrinkle-free. Using top-quality detergents and advanced ironing techniques, we bring back the original shine and crispness of your clothes, so you always look your best with minimal effort.",
            bold: false,
            textsize: "text-xl font-light"

        }
        , {
            Header: "wash & Fold",
            herdersize: "Xl",
            discription: "Experience the convenience of our wash and folding service! We carefully wash and neatly fold your clothes, ensuring they’re fresh, organized, and ready to go. Say goodbye to laundry hassles and let us handle it for you, providing you with perfectly folded garments every time, with care and precision.",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="#1A6FA8" d="M73 41v78h110V41zm128 0v78h238V41zm199 23a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 16-16m-176 7h48v18h-48zm80 0h48v18h-48zM73 137v350h366V137zm183 30c82.7 0 150 67.3 150 150s-67.3 150-150 150s-150-67.3-150-150s67.3-150 150-150m0 18c-73 0-132 59-132 132s59 132 132 132c48.5 0 90.8-26 113.7-64.9L339.6 360a94.02 94.02 0 0 1-83.6 51a94.02 94.02 0 0 1-94-94a94.02 94.02 0 0 1 94-94a94.02 94.02 0 0 1 85.7 55.3l30.4-24.3c-22.3-41.1-65.9-69-116.1-69m-6.9 62c-50.1 1.1-76.9 51-62 93.9c-.7-37.8 30.1-78 62-93.9m130.6 23.9l-32 25.6A94 94 0 0 1 350 317a94 94 0 0 1-3.5 25.5l31.4 25.2C384.4 352.1 388 335 388 317c0-16.2-2.9-31.8-8.3-46.1" /></svg>,
            bold: false,
            textsize: "text-xl font-light",


        }, {
            Header: "Premium Laundry",
            discription: "Indulge in our Premium Laundry service for the ultimate care and quality. We use high-end detergents, gentle washing techniques, and expert handling to treat your clothes with the utmost care. Experience fresh, pristine garments that feel luxurious and look as good as new—because you deserve nothing less than premium!    ",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#1A6FA8" stroke="#fff" d="M9 14.5h6M17 4H7m10 0a3 3 0 0 0 3-3V.5H7.5a3.5 3.5 0 1 0 0 7H20V7a3 3 0 0 0-3-3ZM3.5 23.5h17c0-4 .934-7.79 2.722-11.217l.278-.533v-.25H.5v.25l.278.533C2.566 15.71 3.5 19.5 3.5 23.5Z" strokeWidth="1.7" /></svg>, bold: false,
            textsize: "text-xl font-light",
            herdersize: "Xl",
        }, {
            Header: "Dry Cleaning",
            discription: "Our dry cleaning service offers flawless care for delicate fabrics, removing stains and wrinkles, leaving your clothes fresh and pristine!",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#1A6FA8" d="M4.385 17.817q-.14-.17-.121-.374t.188-.34l1.4-1.2q.523-.441 1.18-.675q.659-.234 1.351-.234q.67 0 1.314.233q.643.233 1.176.677l2.9 2.475q.394.335.878.488t.999.152q.502 0 .978-.152t.874-.488l1.4-1.22q.171-.14.376-.126q.205.013.341.186t.117.377t-.188.339l-1.4 1.2q-.53.442-1.171.663q-.642.221-1.327.221t-1.346-.221t-1.177-.663l-2.9-2.475q-.399-.336-.874-.488t-.985-.153t-.989.154t-.881.487l-1.425 1.2q-.171.14-.36.134t-.328-.177M7 13.302v-4.02l-1.794.993q-.293.162-.616.078t-.484-.376l-1.212-2.11q-.161-.292-.078-.618q.084-.326.379-.493l4.184-2.408q.143-.072.297-.123t.321-.052t.282.088t.183.239q.42 1.123 1.377 1.812T12 7t2.159-.688q.952-.689 1.38-1.812q.067-.152.185-.24T16 4.174q.17 0 .323.052t.298.123l4.185 2.408q.294.167.375.49q.08.323-.081.615l-1.206 2.097q-.161.291-.484.385q-.323.093-.616-.068l-1.775-.992v7.088l-.632.471q-.181.112-.368.2q-.188.087-.386.087q-.193 0-.375-.055t-.317-.18l-2.843-2.428q-.78-.656-1.743-1.006q-.962-.35-1.986-.35q-.35 0-.692.048T7 13.302" strokeWidth="0.5" stroke="#1A6FA8" /></svg>,
            textsize: "text-xl font-light",
            herdersize: "Xl",

        }, {
            Header: "Shoe Cleaning",
            discription: "Revive your shoes with our expert cleaning service! We remove dirt, stains, and odors, leaving them looking brand new!",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64"><path fill="#1A6FA8" d="M4.7 13.5C2.1 13.3 2 18.6 2 21.2c.1 4.8 12.1 14.5 13.9 14.3c1.3-.1 2.8-1.8 4.7-1.5c0 0-11-20.2-15.9-20.5m18 19.5c-2.7 2.7-.7 13.3 1.7 16.3C30 56.2 46 62 54.1 62c3.9 0 7.4-1.9 7.8-5.2c.6-4.6-3.2-12.8-8.2-15.6c-7.4-4.1-25.2-14.3-31-8.2" strokeWidth="1.5" stroke="#1A6FA8" /><path fill="#1A6FA8" d="M7.4 2.6C4.2 5.4 2.8 14.8 3.9 18.8c1.2 4.3 10.7 9 13.2 12.6c2.7 3.8 4.7 13.6 8.3 16.5C31.9 53.4 50 60.6 58 57.7C69.3 53.5 41.8 21.9 31.2 15C25 11 11.4-.9 7.4 2.6" strokeWidth="1.5" stroke="#1A6FA8" /><path fill="#fff" d="M25.9 45.8c2.8 1.9 5.8 3.5 8.9 4.9s6.3 2.6 9.5 3.5c1.6.5 3.3.9 4.9 1.1c1.6.3 3.3.4 4.9.2s3.1-.8 3.4-2.1c.4-1.3 0-2.9-.6-4.4c-.2-.5 0-1 .5-1.2s1 0 1.2.5c.3.8.6 1.7.7 2.6s.1 1.9-.3 2.9s-1.2 1.8-2.1 2.2s-1.8.6-2.7.7c-1.8.1-3.5-.1-5.2-.4s-3.4-.8-5-1.4c-3.3-1.1-6.4-2.4-9.5-4c-2.9-1.4-5.9-3.1-8.6-5.1M15 29.2C22.7 40.7 26.9 42 32.6 44c1.7.6 5.7 1.1 7.2 0c1.6-1.2 1.8-7.8 1.8-7.8s7.8 4.4 9.8 2.9c2.1-1.6-9-14.2-9-14.2s3 4.3 1.8 4.7C38 31.7 33.3 17.8 31 14.9c-.7-.9-2-2.2-3.1-2.2c-1.6-.1-7 .9-6.9 2.5c.1 1.3 3.1-.6 4.2.2c2.9 2.2 7.7 10.3 7.4 13.9c-.2 2.4-4.8 9-7.2 9.4C24 39 15 29.2 15 29.2" strokeWidth="1.5" stroke="#fff" /><path fill="#a6876c" d="M8.2 2.8C6.1 4.1 7 10.3 8 12.6c.8 1.7 3.9 4.5 5.7 5c2.6.7 10.5-3.6 10.5-3.6s5.2 1.4 4.2.5C25.3 11.4 11 1.1 8.2 2.8" strokeWidth="1.5" stroke="#a6876c" /><g fill="#1A6FA8" strokeWidth="1.5" stroke="#1A6FA8"><path d="M58.6 39.4h-.2c-.2 0-5.3-1-8.3-4.6c-2.1-2.5-3.3-5.4-4.4-8.2c-1.6-3.9-3.1-7.7-7.2-9.9c-1.9-1.1-4.1-.4-4.1-.4c-.5.2-1.1-.1-1.3-.6s.1-1.1.6-1.3c.1 0 3-1 5.7.5c4.7 2.6 6.4 6.8 8.1 10.9c1.1 2.6 2.2 5.4 4.1 7.7c2.5 3 7.1 3.9 7.1 3.9c.5.1.9.6.8 1.2c0 .5-.4.8-.9.8" /><path d="M29.5 30.2c-.2 0-.4-.1-.6-.2c-.4-.3-.5-1-.2-1.4c2.1-2.7 7.6-5.9 13.4-3c.5.2.7.8.5 1.3s-.8.7-1.3.5c-5.3-2.6-9.8 1-11 2.5c-.2.1-.5.3-.8.3" /><path d="M27.3 26.9c-.2 0-.4-.1-.6-.2c-.4-.3-.5-1-.2-1.4c2.1-2.7 7.6-5.9 13.4-3c.5.2.7.8.5 1.3s-.8.7-1.3.5c-5.3-2.6-9.8 1-11 2.5c-.2.1-.5.3-.8.3" /><path d="M25 23.5c-.2 0-.4-.1-.6-.2c-.4-.3-.5-1-.2-1.4c2.1-2.7 7.6-5.9 13.4-3c.5.2.7.8.5 1.3s-.8.7-1.3.5c-5.3-2.6-9.8 1-11 2.5c-.2.2-.5.3-.8.3" /><path d="M22.9 20.9c-.2 0-.4-.1-.6-.2c-.4-.3-.5-1-.2-1.4c2.1-2.7 7.6-5.9 13.4-3c.5.2.7.8.5 1.3s-.8.7-1.3.5c-5.3-2.6-9.8 1-11 2.5c-.2.2-.5.3-.8.3" /><path d="M20.7 18c-.2 0-.4-.1-.6-.2c-.4-.3-.5-1-.2-1.4c2.1-2.7 7.6-5.9 13.4-3c.5.2.7.8.5 1.3s-.8.7-1.3.5c-5.3-2.6-9.8 1-11 2.5c-.2.2-.5.3-.8.3" /><path d="M15.8 56.2c-3.7 0-7.4-1.2-7.6-1.3c-.5-.2-.8-.7-.6-1.3s.7-.8 1.3-.6c2.2.7 8.7 2.2 11.2.1c2.9-2.4 2-6.1.1-12c-1.8-5.7-3.7-12.1-1.2-18.7c.6-1.5 2.3-7.1 2.3-7.2c.2-.5.7-.8 1.2-.7c.5.2.8.7.7 1.2c-.1.2-1.7 5.7-2.3 7.3c-2.3 6-.4 12 1.3 17.4c1.7 5.6 3.4 10.9-.8 14.2c-1.5 1.3-3.5 1.6-5.6 1.6" /></g></svg>,
            textsize: "text-xl font-light",
            herdersize: "Xl",

        }, {
            Header: "Carpet Cleaning",
            discription: "Refresh your carpets with our professional cleaning service! We remove dirt, stains, and odors, leaving your carpets spotless and fresh!",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><g fill="#1A6FA8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path stroke="#fff" d="M14.583 33.333H31.25v-12.5H14.583z" /><path stroke="#8daae3" d="M10.417 41.667H37.5a2.083 2.083 0 0 0 2.083-2.084v-25A2.083 2.083 0 0 0 37.5 12.5H14.583" /><path stroke="#8daae3" d="M43.75 35.417h-4.167m-25-22.917v25a4.167 4.167 0 1 1-8.333 0v-25a4.167 4.167 0 1 1 8.333 0m-4.166 20.833a4.166 4.166 0 1 0 0 8.333a4.166 4.166 0 0 0 0-8.333M43.75 18.75h-4.167zm0 8.333h-4.167z" /></g></svg>,
            textsize: "text-xl font-light",
            herdersize: "Xl",

        }, {
            Header: "Toys Cleaning",
            discription: "Keep your child's toys spotless and safe with our thorough cleaning service, ensuring they’re germ-free, fresh, and well-maintained!",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#1A6FA8" d="M15.75 19.13c-.83 0-1.5-.84-1.5-1.88c0-1.03.67-1.87 1.5-1.87s1.5.84 1.5 1.87c0 1.04-.67 1.88-1.5 1.88M12 11.25c-1.24 0-2.25-.84-2.25-1.87c0-1.04 1.01-1.88 2.25-1.88s2.25.84 2.25 1.88c0 1.03-1.01 1.87-2.25 1.87m-3.75 7.88c-.83 0-1.5-.84-1.5-1.88c0-1.03.67-1.87 1.5-1.87s1.5.84 1.5 1.87c0 1.04-.67 1.88-1.5 1.88M12 8.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M18.75 12c-.32 0-.63.07-.91.2c-.48-.61-1.13-1.13-1.91-1.53c.57-.8.91-1.77.91-2.82v-.06c1.09-.23 1.91-1.2 1.91-2.37c0-1.33-1.09-2.42-2.42-2.42c-.69 0-1.33.29-1.75.75a4.81 4.81 0 0 0-5.16 0C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42c0 1.16.82 2.13 1.9 2.37v.06c0 1.05.35 2.03.91 2.82c-.77.4-1.42.92-1.9 1.53A2.24 2.24 0 0 0 3 14.25c0 1.25 1 2.25 2.25 2.25h.06c-.04.24-.06.5-.06.75c0 2.07 1.34 3.75 3 3.75c1.01 0 1.9-.63 2.45-1.59c.42.06.85.09 1.3.09s.88-.03 1.3-.09c.55.96 1.44 1.59 2.45 1.59c1.66 0 3-1.68 3-3.75c0-.25-.02-.51-.06-.75h.06c1.25 0 2.25-1 2.25-2.25S20 12 18.75 12" strokeWidth="0.5" stroke="#1A6FA8" /></svg>,
            textsize: "text-xl font-light",
            herdersize: "Xl",

        }, {
            Header: "Bag Cleaning",
            discription: "Bring your bags back to life with our expert cleaning service! We carefully remove stains and restore them to perfection!",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 448 512"><path fill="#1A6FA8" d="M352 160v-32C352 57.42 294.579 0 224 0S96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24m-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24" strokeWidth="13" stroke="#1A6FA8" /></svg>,
            textsize: "text-xl font-light",
            herdersize: "Xl",

        }, {
            Header: "Helmet Cleaning",
            discription: "Keep your helmet spotless and fresh with our cleaning service! We remove dirt and grime, ensuring safety and a clean look!",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#1A6FA8" d="M2.2 11.2c-.2 2.4.5 4.4 2 6.2S7.7 20 10.1 20h10c.5 0 1-.2 1.4-.6s.6-.9.6-1.4v-.8c0-.6-.1-1.3-.2-2.2h-8.2c-1 0-1.8-.4-2.5-1.1s-1.1-1.6-1.1-2.5c0-1.6.7-2.7 2.2-3.3L17.1 6c-1.7-1.2-3.7-1.9-6-2c-2.2-.2-4.2.5-6 1.9S2.4 9 2.2 11.2m9.9.2c0 .4.2.8.5 1.1s.7.5 1.1.5h7.8c-.6-2.2-1.5-4-2.8-5.4l-5.6 2.3c-.7.2-1 .7-1 1.5" strokeWidth="0.5" stroke="#1A6FA8" /></svg>,
            textsize: "text-xl font-light",
            herdersize: "Xl",

        }, {
            Header: "Curtain Cleaning",
            discription: "Revitalize your curtains with our specialized cleaning service! We gently remove dust and stains, leaving your curtains fresh and vibrant!",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1A6FA8" d="M23 3H1V1h22zM2 22h4c0-3-2-5-2-5c6-4 7-13 7-13H2zM22 4h-9s1 9 7 13c0 0-2 2-2 5h4z" strokeWidth="0.5" stroke="#1A6FA8" /></svg>,
            textsize: "text-xl font-light",
            herdersize: "Xl",

        },

    ]



    return (
        <div className='h-full w-full' >
            <div className="w-full h-full ">
                <Cart CartDetails={CartDetails} Divcol={3} CardGap={2} />
            </div>

        </div>
    )
}

export default LaundryServiceLayout