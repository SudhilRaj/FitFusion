import { useState } from 'react'
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Client from './components/Client';
import Gallery from './components/Gallery';
import TeamMembers from './components/TeamMembers';
import Offer from './components/Offer';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

const App = () => {
  const [nav,setNav] = useState(false)

  window.addEventListener("scroll",()=>{
    const scroll = document.documentElement.scrollTop;
    if(scroll > 405){
      setNav(true);
    }
    else{
      setNav(false);
    }
  })

  return (
    <div className='App'>
      <Nav nav={nav}/>
      <HeroSection />
      <About />
      <Services />
      <TeamMembers />
      <Offer />
      <Client />
      <Gallery />
      <Blog />
      <Contact />
      <Footer nav={nav}/>
    </div>
  )
}

export default App;