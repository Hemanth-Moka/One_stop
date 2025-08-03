import { useState } from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Hero/>
     <Footer/>
     
    </>
  )
}

export default App
