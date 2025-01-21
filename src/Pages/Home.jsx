import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Navigation from '../Navigation/Navigation'
import backgroundImage from '../../src/assets/bg-imaage.jpg';
import Footer from '../Share/Footer'

const Home = () => {
  return (
    <>
    <div>
    <div
  className="relative w-full h-[100vh] bg-cover bg-center"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black opacity-80"></div>

  {/* Content: Both Navigation and Banner will share the same background */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Navigation />
    <Banner />
  </div>
</div>
     <About></About>
    <Skills></Skills>
    <Services></Services>
    <Portfolio></Portfolio>
    <Contact></Contact> 
    <Footer></Footer>

    </div>

    </>
  )
}

export default Home