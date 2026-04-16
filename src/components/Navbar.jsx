import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import "./Navbar.css"
import brandlogo from "../assets/brandlogo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black text-white px-6">
      
      <div className="flex justify-between items-center">
        <img src={brandlogo} alt="Ramana Tailorings Logo" className="w-[80px] h-[90px] object-contain" />

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8"  />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col mt-4 gap-3 md:hidden pb-5 mobile-view" onClick={() => setIsOpen(false)}>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar