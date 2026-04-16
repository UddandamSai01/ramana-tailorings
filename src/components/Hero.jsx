import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpeg"
import img5 from "../assets/img5.jpeg"
import img6 from "../assets/img6.jpeg"
import img7 from "../assets/img7.jpeg"
import img8 from "../assets/img8.jpeg"

function Hero() {
  const Navigate = useNavigate()
  const images = [
    img8,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    
  ]

  const [current, setCurrent] = useState(0)

  // Auto change images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="min-h-[70vh]  bg-gradient-to-r from-gray-100 to-gray-200 px-5 py-10 mt-20 md:px-12">
  
    {/* MAIN FLEX CONTAINER */}
    <div className="flex flex-col items-center md:flex-row mx-auto max-w-7xl">
      
      {/* LEFT CONTENT */}
      <div className="md:w-1/2 text-center md:text-left">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
        >
          Welcome to Ramana’s Tailoring
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[15px] md:text-2xl text-gray-600 mb-6"
        >
          Crafting Style That Fits You Perfectly
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-500 text-[15px] md:text-lg mb-8"
        >
          We design stylish, comfortable, and perfectly fitted clothes that enhance your personality.
        </motion.p>

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Perfect Stitching ✂️
        </h2>

        <p className="text-gray-600 mb-6">
          Experience the art of tailoring with us. We create garments that not only fit perfectly but also reflect your unique style and personality.
        </p>
        <p className="text-gray-600 mb-6">
          👇 you can explore our services by clicking the button below.
        </p>

        <button
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          <a href="#services">Explore Services</a>
        </button>
      </div>

      {/* RIGHT IMAGE SLIDER */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          key={current}
          src={images[current]}
          alt="tailoring"
          className="w-80 h-80 md:w-[400px] md:h-[400px] object-cover rounded-xl shadow-xl"
        />
      </div>

    </div>
</div>
    </>
  )
}

export default Hero