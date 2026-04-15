import React from 'react'
export default function Contact() {
  return (
    <>
        <div id='contact' className="bg-gradient-to-r from-gray-100 to-gray-200  flex px-4 py-24 md:px-12">
        <div className="bg-white shadow-lg rounded-xl px-10 py-3 w-full max-w-lg mx-auto my-10">
          
          <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

          <form className="flex flex-col gap-5 w-full ">

            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter Your Message"
                className="border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition rounded-lg py-3 text-white font-semibold text-lg"
            >
              Submit
            </button>

          </form>
        </div>
        </div>
    </>
  )
}
