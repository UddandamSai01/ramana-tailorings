import React from 'react'
import { PhoneIcon } from '@heroicons/react/24/outline'
import EnvelopeIcon from '@heroicons/react/24/outline/EnvelopeIcon'
import profileImg from '../assets/profileImg.jpeg'

export default function About() {
  return (
    <>
        <div id='about' className="flex flex-col items-center px-6 py-24  mx-auto max-w-6xl gap-10">
            <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
            <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
                {/* Image */}
                <div className="flex-shrink-0">
                    <img
                    src={profileImg}
                    alt="tailor"
                    className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-full shadow-xl border-4 border-white"
                    />
                </div>

                {/* Content */}
                <div className="text-center lg:text-left max-w-xl">
                    
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                    Uddandam Ramana
                    </h2>

                <p className="text-gray-600 text-sm md:text-base mb-3">
                25+ Years Experience
                </p>

                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
                I am an expert tailor with 25+ years of experience in stitching modern 
                and traditional outfits including blouses, shirts, pants, safari suits, 
                formal wear, and school uniforms. I ensure perfect fitting, comfort, 
                and style in every stitch.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                
                <a
                    href="/contact"
                    className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition text-sm md:text-base"
                >
                    Contact Us
                </a>

                <a
                    href="tel:+919951367108"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
                >
                    <PhoneIcon className="w-5 h-5 md:w-6 md:h-6" />
                </a>

                <a
                    href="mailto:ramanauddanam1976@gmail.com"
                    className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center"
                >
                    <EnvelopeIcon className="w-5 h-5 md:w-6 md:h-6" />
                </a>

                </div>
            </div>
            </div>
        </div>
    </>
  )
}
