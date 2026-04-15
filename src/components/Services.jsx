import React from 'react'

function Services() {
  return (
    <>
      <div id="service" className="">
        <div id='services' className="flex flex-col items-center px-6 py-16 mx-auto max-w-6xl gap-10">
            <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
            <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
                {/* Service 1 */}
                <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm">
                    <h2 className="text-xl font-bold mb-2">Custom Tailoring</h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Expert tailoring for blouses, shirts, pants, safari suits, formal wear, and school uniforms. Perfect fitting and stylish designs.
                    </p>
                </div>  
            </div>  
          </div>                 
      </div>
      
    </>
    
  )
}

export default Services