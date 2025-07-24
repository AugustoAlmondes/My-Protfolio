import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { WidthProvider } from './context/useWidth/WidthContext'
import Background from '/background.jpg'

function App() {
  return (
    <div className={`bg-[#070B1C] min-h-screen px-4 py-20 relative
      md:px-20
      lg:px-30 lg:py-30
      2xl:px-80`
    }>

      <div className='absolute inset-0 bg-[#070B1C] z-0'></div>
      <div

        className='absolute inset-0 z-10'
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat:'repeat',
          opacity: 0.05
        }}
      ></div>

      <div className='relative z-20 grid md:gap-10 lg:gap-10'>
        <WidthProvider>
          <Hero />
          <About/>
          <Education/>
          <Projects />
          <Skills />
          <Contact/>
        </WidthProvider>

      </div>
    </div>

  )
}

export default App