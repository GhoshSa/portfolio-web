import About from "./components/about"
import Contact from "./components/contacts"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Projects from "./components/projects"
import Services from "./components/services"
import Skill from "./components/skill"
import Testimonials from "./components/testimonials"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App