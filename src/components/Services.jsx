import React from 'react';
import shirtImage from "../assets/shirt_image.png"
import shirtPantFormal from "../assets/shirt_pant_formal.png"
import pant from "../assets/pant.png"
import shirt from "../assets/shirt.png"
import b1 from "../assets/b1.jpeg"
import b2 from "../assets/b2.jpeg"
import b3 from "../assets/b3.jpeg"
import b4 from "../assets/b4.jpeg"
import short from "../assets/short.png"
import uniform from "../assets/uniform.png"

function Services() {

  const data = {
    mens: [
      { name: "Rounded Neck Shirt", img: shirtImage },
      { name: "Formal Shirt Pant", img: shirtPantFormal },
      { name: "Formal Pant", img: pant },
      { name: "Modern Shirt", img: shirt },
    ],

    womens: [
      { name: "Round Neck", img: b1 },
      { name: "V-Shape Neck", img: b2 },
      { name: "Square Neck", img: b3 },
      { name: "Off-Shoulder", img: b4 },
    ],

    child: [
      { name: "Kids Short", img: short },
      { name: "Uniform Shirt", img: uniform },
    ]
  };

  const renderSection = (title, items) => (
    <div className="mb-14">
      <h2 className="text-3xl text-left font-bold mb-6 ">{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-3 text-center">
              <p className="font-semibold">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>

      <div
        id="services"
        className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-24 md:px-12"
      >
        <div>
      <h1 className="text-3xl font-bold text-center mb-6">Services</h1>
    </div>

        {renderSection("Men Collection", data.mens)}
        {renderSection("Women Collection", data.womens)}
        {renderSection("Kids Collection", data.child)}

      </div>
    </>
  );
}

export default Services;