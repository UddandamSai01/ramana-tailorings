import React from 'react';

function Services() {

  const data = {
    mens: [
      { name: "Printed Shirt", img: "./src/assets/shirt_image.png" },
      { name: "Formal Shirt Pant", img: "./src/assets/shirt_pant_formal.png" },
      { name: "Formal Pant", img: "./src/assets/pant.png" },
      { name: "Modern Shirt", img: "./src/assets/shirt.png" },
      
    ],

    womens: [
      { name: "Round Neck", img: "./src/assets/b1.jpeg" },
      { name: "V-Shape Neck", img: "./src/assets/b2.jpeg" },
      { name: "Square Neck", img: "./src/assets/b3.jpeg" },
      { name: "Off-Shoulder", img: "./src/assets/b4.jpeg" },
    ],

    child: [
      { name: "Kids Short", img: "./src/assets/short.png" },
      { name: "Uniform Shirt", img: "./src/assets/uniform.png" },
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