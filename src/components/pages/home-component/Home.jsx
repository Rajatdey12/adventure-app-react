import '../../hero-section-component/HeroSection'
import HeroSection from '../../hero-section-component/HeroSection'
import React from 'react'
import Cards from '../../card-component/Cards'
import Footer from '../../footer-component/Footer'


function Home() {
   return (
      <>
         <HeroSection />
         <Cards />
         <Footer
            description={'We are here to help you with your adventure needs. Contact us for more information. 000-888-666-444'}
         />
      </>
   )
}

export default Home