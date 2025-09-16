import Banner from './components/Banner'
import Timeline from './components/TimeLine'
import Hero from './components/Hero'
import Projects from './components/ProjectSection'
import Tecnologias from './components/Tecnologias'
import About from './components/About'
import Footer from './components/Footer'
import "./i18n.js";

function App() {

  return (
    <div className='flex-col gap-32 bg-[linear-gradient(104deg,_#b7603b_-0.73%,_#a8af78_43.97%,_#d7c99a_94.33%)]
'>
      <Hero />
      <Banner />
      <Timeline /> 
      <Projects />
      <Tecnologias />
     <About />
     <Footer />
    </div>
  )
}

export default App
