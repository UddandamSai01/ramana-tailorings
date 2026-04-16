import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Address from "../components/Address"
import Contact from "../components/Contact"
import Services from "../components/Services"

function Home() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50">
        <Navbar />
      </nav>
      <Hero />
      <About />
      <Services /> 
      <Contact />
      <Address />
    </>
  )
}

export default Home