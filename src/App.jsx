import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Support from './components/Support'
import AllInOne from './components/AllInOne'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero />
     <About/>
     <Support/>
     <AllInOne/>
     <Pricing/>
     <Footer/>
    </>
  )
}

export default App
