export default function Address
() {
  return (
    <>
        <div className="bg-black text-white ">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-10">

                {/* LEFT - ADDRESS */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Our Address</h2>

                    <p className="text-gray-300 mb-2">
                        Raje Veedhi, Etikoppaka, Yelamanchili
                    </p>
                    <p className="text-gray-300 mb-2">Anakapalli</p>
                    <p className="text-gray-300 mb-3">Andhra Pradesh, India</p>

                    <p className="text-gray-300 mb-2">
                        📞 Phone: <span className="text-white font-medium">+91 9951367108</span>
                    </p>

                    <p className="text-gray-300">
                        📧 Email: <span className="text-white font-medium">ramanauddanam1976@gmail.com</span>
                    </p>
                </div>

                {/* RIGHT - LINKS */}
                <div className="md:w-1/2 flex flex-col md:items-end">
                    <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>

                    <div className="space-y-2 text-gray-300">
                        <p>
                        <a href="/" className="hover:text-green-400 transition">Home</a>
                        </p>
                        <p>
                        <a href="/about" className="hover:text-green-400 transition">About</a>
                        </p>
                        <p>
                        <a href="/service" className="hover:text-green-400 transition">Services</a>
                        </p>
                        <p>
                        <a href="/contact" className="hover:text-green-400 transition">Contact</a>
                        </p>
                    </div>
                </div>

            </div>

            {/* BOTTOM LINE */}
            <div className="text-center text-gray-400 text-sm py-4 border-t border-gray-700">
                © {new Date().getFullYear()} Ramana’s Tailoring. All rights reserved.
            </div>
        </div>
    </>
  )
}
