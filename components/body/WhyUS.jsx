import React from 'react'

function WhyUS() {
    const CartDetails = [
        {
            Header: "Fast and Reliable",
            discription: "Service",
            icon: "",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            Header: "Expert Care for",
            discription: "All Fabrics",
            icon: "",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            Header: "Happy clients",
            discription: "100 +",
            icon: "",
            gradient: "from-green-500 to-emerald-500"
        }
    ]

    const CardImages = [
        {
            Image: "",
        }
    ]

    return (
        <div className="bg-white details h-full space-y-6 py-8 px-4 sm:px-6 lg:px-8">
            {/* Modern Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {CartDetails.map((data, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                    >
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        
                        {/* Content */}
                        <div className="relative z-10 p-6 sm:p-8 h-full min-h-[200px] sm:min-h-[220px] flex flex-col justify-center items-center text-center">
                            {/* Icon */}
                            <div className="text-5xl sm:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {data.icon}
                            </div>
                            
                            {/* Header */}
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">
                                {data.Header}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-600 group-hover:text-white transition-colors duration-300">
                                {data.discription}
                            </p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:bg-white/20 transition-all duration-300" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 group-hover:bg-white/20 transition-all duration-300" />
                    </div>
                ))}
            </div>

            {/* Image Gallery Section */}
            {CardImages.map((data, index) => (
                <div 
                    className="w-full gap-3 sm:gap-4 grid grid-cols-2 md:grid-cols-3 auto-rows-fr" 
                    key={index}
                >
                    <div className="space-y-3 sm:space-y-4 flex flex-col">
                        <div className="h-[200px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-br shadow-md hover:shadow-xl overflow-hidden">
                            <img src="images/shop1.png" alt="shop1" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-[150px] sm:h-[200px] md:h-[250px] hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-br shadow-md hover:shadow-xl overflow-hidden">
                            <img src="images/shop2.png" alt="shop2" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="space-y-3 sm:space-y-4 flex flex-col">
                        <div className="h-[150px] sm:h-[200px] md:h-[250px] hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-br shadow-md hover:shadow-xl overflow-hidden">
                            <img src="images/shop3.png" alt="shop3" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-[200px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-br shadow-md hover:shadow-xl overflow-hidden">
                            <img src="images/shop4.png" alt="shop4" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="space-y-3 sm:space-y-4 flex flex-col col-span-2 md:col-span-1">
                        <div className="h-[150px] sm:h-[200px] md:h-[250px] hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-br shadow-md hover:shadow-xl overflow-hidden">
                            <img src="images/shop5.png" alt="shop5" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-[200px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-br shadow-md hover:shadow-xl overflow-hidden">
                            <img src="images/shop6.png" alt="shop6" className="w-full h-full object-cover" />
                        </div>
                    </div>
                           <div className="space-y-3 sm:space-y-4 flex flex-col">
                        <div className="h-[200px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-br shadow-md hover:shadow-xl overflow-hidden">
                            <img src="images/hospital.png" alt="Hospital" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-[150px] sm:h-[200px] md:h-[250px] hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-br shadow-md hover:shadow-xl overflow-hidden">
                            <img src="images/kitchen.png" alt="Kitchen" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="space-y-3 sm:space-y-4 flex flex-col">
                        <div className="h-[150px] sm:h-[200px] md:h-[250px] hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-br shadow-md hover:shadow-xl overflow-hidden">
                            <img src="images/office.png" alt="Office" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-[200px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-br shadow-md hover:shadow-xl overflow-hidden">
                            <img src="images/tank.png" alt="Tank" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="space-y-3 sm:space-y-4 flex flex-col col-span-2 md:col-span-1">
                        <div className="h-[150px] sm:h-[200px] md:h-[250px] hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-br shadow-md hover:shadow-xl overflow-hidden">
                            <img src="images/toilet.png" alt="Toilet" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-[200px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-br shadow-md hover:shadow-xl overflow-hidden">
                            <img src="images/laundry.png" alt="Laundry" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default WhyUS