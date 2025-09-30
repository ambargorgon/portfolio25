import Banner from '../components/Banner'
import Timeline from '../components/TimeLine'
import Hero from '../components/Hero'
import Projects from '../components/ProjectSection'
import Tecnologias from '../components/Tecnologias'
import About from '../components/About'


function Home() {  
  return (
      <div className='flex-col gap-32
      '>
        <Hero />
        <Banner />
        <Timeline />
        <Projects />
        <Tecnologias />
        <About />
      </div>
    )
}

export default Home
