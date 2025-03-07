import Cart from '@/components/card'
import React from 'react'


function CleaningServiceLayout() {
    const CartDetails = [
        {
            Header: "Deep cleaning",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="#1A6FA8" d="M18 20.5V20m0 .5a3 3 0 0 1-3 3h-2.5v-.25l.22-.357a12 12 0 0 0 1.78-6.29V16.5H18m0 4a3 3 0 0 0 3 3h2.5v-.25l-.22-.357a12 12 0 0 1-1.78-6.29V16.5H18m0 0V0M3.5 13.5V11a2.5 2.5 0 0 1 5 0v2.5m-6 10v-1.03a20 20 0 0 0-1.904-8.515L.5 13.75v-.25h11v.25l-.096.205A20 20 0 0 0 9.5 22.47v1.03z" strokeWidth="1.7" /></svg>,
            herdersize: "Xl",
            discription: "Transform your space with our deep cleaning service! We tackle every corner, removing dirt and grime for a spotless, refreshed environment!",
            bold: false,
            textsize: "text-lg font-light"
        }
        , {
            Header: "Normal cleaning",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="#1A6FA8" strokeWidth="1" stroke="#1A6FA8"><path fillRule="evenodd" d="M22.062 25.602L11.33 5.416a1 1 0 1 1 1.766-.939l10.733 20.186l1.522-.81a4 4 0 0 1 5.41 1.655l.648 1.219l6.87 10.054l-8.738 4.645l-3.027-5.983l-1.784.903l3.045 6.02l-3.746 1.991l-4.495-11.318l-.647-1.218a4 4 0 0 1 1.654-5.41zm4.227.018l-4.81 2.557a2 2 0 0 0-.827 2.705l.647 1.218l8.343-4.436l-.648-1.217a2 2 0 0 0-2.705-.827" clipRule="evenodd" /><path d="M17.768 35.36a1 1 0 0 0-1.408-.129h.002l-.011.008l-.062.048a6 6 0 0 1-.275.194c-.248.165-.618.39-1.094.616A9.15 9.15 0 0 1 11 37a1 1 0 1 0 0 2a11.15 11.15 0 0 0 4.78-1.097a11 11 0 0 0 1.344-.758a8 8 0 0 0 .47-.34l.03-.023l.01-.008l.003-.004h.002l.001-.002a1 1 0 0 0 .128-1.408m2.064 5.085a1 1 0 0 1-.277 1.387l-.002.002l-.004.002l-.01.006l-.031.02l-.114.073a16 16 0 0 1-1.862.979C16.35 43.439 14.701 44 13 44a1 1 0 1 1 0-2c1.298 0 2.65-.439 3.719-.914a14 14 0 0 0 1.618-.85q.059-.035.086-.054l.02-.012l.002-.002a1 1 0 0 1 1.387.277" /></g></svg>,
            herdersize: "Xl",
            discription: "Enjoy a clean, refreshed space with our normal cleaning service! We handle everyday cleaning tasks, leaving your home neat and tidy!",
            bold: false,
            textsize: "text-lg font-light"
        }, {
            Header: "Post Construction cleaning",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32"><path fill="#1A6FA8" d="M29.34 16.06a1 1 0 0 0-1.108.3l-3.772 4.526l-5.435-.988l-3.602-8.952A3.01 3.01 0 0 0 12.612 9h-4.06a3 3 0 0 0-1.543.428L2 12.434v6.4l5 .91V30h2v-9.893l3.565.648L14 24.2V30h2v-6.2l-1.091-2.618l8.081 1.469l-4.758 5.709A1 1 0 0 0 19 30h10a1 1 0 0 0 1-1V17a1 1 0 0 0-.66-.94M4 17.166v-3.6l3-1.8v5.945zm5 .909V11h3.614a1.01 1.01 0 0 1 .945.67l3.14 7.805zM28 28h-6.865L28 19.762zM12.5 8A3.5 3.5 0 1 1 16 4.5A3.504 3.504 0 0 1 12.5 8m0-5A1.5 1.5 0 1 0 14 4.5A1.5 1.5 0 0 0 12.5 3" strokeWidth="1" stroke="#1A6FA8" /></svg>,
            herdersize: "Xl",
            discription: "Let us handle the mess with our post-construction cleaning service! We remove dust, debris, and residue, leaving your space spotless!",
            bold: false,
            textsize: "text-lg font-light"
        }, {
            Header: "Kitchen cleaning",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#1A6FA8" d="M18 10V7c0-1.66-1.34-3-3-3s-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1v3H8c1.1 0 2-.9 2-2V4H4v4c0 1.1.9 2 2 2H2v2h2v8h16v-8h2v-2zm-5 8h-2v-6h2z" strokeWidth="0.5" stroke="#1A6FA8" /></svg>,
            herdersize: "Xl",
            discription: "Revitalize your kitchen with our kitchen cleaning service! We tackle grease, grime, and spills, leaving your kitchen sparkling clean!",
            bold: false,
            textsize: "text-lg font-light"
        }, {
            Header: "Window cleaning",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="#1A6FA8" d="M25 66.75V425.8l78-26V92.74zm462 0l-78 25.99V399.8l78 26V267.5c-1 3.2-2.4 6.2-4.2 8.8c-4.1 6.1-10.7 11-18.8 11s-14.7-4.9-18.8-11s-6.2-13.8-6.2-22s2.1-15.9 6.2-22s10.7-11 18.8-11s14.7 4.9 18.8 11c1.8 2.6 3.2 5.6 4.2 8.8zm-366 28.5V397.3h126V95.25zm144 0V397.3h126V95.25zM135 109.3h98v274h-98v-265zm144 0h98v274h-98v-265zm-126 18v110h62v-110zm144 0v110h62v-110zm167 112c-.8 0-2.1.4-3.8 3s-3.2 7-3.2 12s1.5 9.4 3.2 12s3 3 3.8 3s2.1-.4 3.8-3s3.2-7 3.2-12s-1.5-9.4-3.2-12s-3-3-3.8-3m-311 16v110h62v-110zm144 0v110h62v-110zm-184 160v30h286v-30z" strokeWidth="13" stroke="#1A6FA8" /></svg>,
            herdersize: "Xl",
            discription: "Let your windows shine with our window cleaning service! We remove dust and streaks, leaving your windows crystal clear and spotless!",
            bold: false,
            textsize: "text-lg font-light"
        }, {
            Header: "Tank cleaning",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="#1A6FA8" d="M288 133v18h160v-18zm41 34v16h78v-16zM64 201c-5.75 0-10.406 1.939-15.074 6.023c-4.668 4.085-9.078 10.48-12.701 18.631C28.978 241.96 25 265 25 288s3.978 46.041 11.225 62.346c3.623 8.152 8.033 14.546 12.7 18.63C53.595 373.062 58.25 375 64 375h5.055l2-17.994l.89-8.006h80.11l2.888 26H183V201zm137 0v46h46v-46zm64 0v174h28.055l2-17.994l.89-8.006h80.11l2.888 26H448c5.75 0 10.406-1.94 15.074-6.023c4.668-4.085 9.08-10.48 12.703-18.631c7.247-16.304 11.225-39.343 11.225-62.342c0-23-3.976-46.04-11.223-62.344c-3.623-8.152-8.034-14.55-12.703-18.635c-4.668-4.084-9.326-6.024-15.076-6.025zm-64 64v46h46v-46zm0 64v46h46v-46zM88.057 367l-14 126h75.886l-13.998-126zm224 0l-14 126h75.886l-13.998-126zM183 384v110h18v-37h46v37h18V384h-18v55h-46v-55zm226 9v30h30v-30zm6.803 48c5.844 19.928 16.417 32.884 28.318 40.563C462.214 493.235 482 493 490 493v-18c-8 0-23.214-.235-36.121-8.563c-7.548-4.87-14.772-12.42-19.473-25.437z" strokeWidth="13" stroke="#1A6FA8" /></svg>,
            herdersize: "Xl",
            discription: "Ensure clean, safe water with our tank cleaning service! We thoroughly remove residue and debris, leaving your tank pristine and hygienic!",
            bold: false,
            textsize: "text-lg font-light"
        },
        {
            Header: "Floor cleaning",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="#1A6FA8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="#1A6FA8"><path d="M11 9h8.995c.496 0 .744 0 .89.16c.145.16.126.413.088.917l-.621 8.23c-.132 1.752-.198 2.628-.763 3.16c-.564.533-1.426.533-3.15.533h-4.504c-1.723 0-2.585 0-3.15-.533C7.947 20.675 8.082 19.07 8 18" /><path d="M11 8.91v5.454c0 1.714 0 2.57-.586 3.104C9.828 18 8.886 18 7 18s-2.828 0-3.414-.532C3 16.935 3 16.078 3 14.364v-.91c0-2.57 0-3.856.879-4.655C4.757 8 6.172 8 9 8h1c.471 0 .707 0 .854.133c.146.133.146.348.146.776" /><path d="M19 9c0-3.866-2.25-7-5.025-7C11.443 2 9.348 4.608 9 8m-6 6h8m0-1h9" /></g></svg>,
            herdersize: "Xl",
            discription: "Transform your floors with our floor cleaning service! We remove dirt, stains, and debris, leaving your floors spotless and shining!",
            bold: false,
            textsize: "text-lg font-light"
        },
        {
            Header: "Exterior cleaning",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="#1A6FA8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19.258 10.258L12 3l-9 9h2v7a2 2 0 0 0 2 2h4" /><path d="M9 21v-6a2 2 0 0 1 2-2h1.5m5.3 7.817l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411l-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352l1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193l2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707l.414 2.41a.39.39 0 0 1-.567.411z" /></g></svg>,
            herdersize: "Xl",
            discription: "Enhance your property's curb appeal with our exterior cleaning service! We remove dirt, grime, and stains, leaving your exterior pristine!",
            bold: false,
            textsize: "text-lg font-light"
        },
        {
            Header: "Restaurant cleaning",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="#1A6FA8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12v5m0 0h2c1.414 0 2.121 0 2.56.44C8 17.878 8 18.585 8 20v1m-5-4v4M4 7l5.317-2.917C10.633 3.361 11.292 3 12 3s1.367.361 2.683 1.083L20 7m-2-1v4M6 6v4m15 2v5m0 0h-2c-1.414 0-2.121 0-2.56.44C16 17.878 16 18.585 16 20v1m5-4v4M7 14h5m5 0h-5m0 0v7m0 0h-1m1 0h1" color="#1A6FA8" /></svg>,
            herdersize: "Xl",
            discription: "Keep your restaurant spotless with our expert cleaning service! We tackle every corner, ensuring a hygienic, inviting environment for your guests!",
            bold: false,
            textsize: "text-lg font-light"
        },
        {
            Header: "Office cleaning",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#1A6FA8" d="M22 10v3h-3v-3zM2 13h3v-3H2zm15-8c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v8h10zM7 15H6v2h5v1l-4 4h2.8l2.2-2.2l2.2 2.2H17l-4-4v-1h5v-2z" strokeWidth="0.5" stroke="#1A6FA8" /></svg>,
            herdersize: "Xl",
            discription: "Create a productive, clean workspace with our office cleaning service! We ensure your office is spotless, organized, and welcoming every day!",
            bold: false,
            textsize: "text-lg font-light"
        },


    ]



    return (
        <div className='h-full w-full'>
            <div className="w-full h-ful">
                <Cart CartDetails={CartDetails} Divcol={3} CardGap={2} />
            </div>

        </div>
    )

}

export default CleaningServiceLayout