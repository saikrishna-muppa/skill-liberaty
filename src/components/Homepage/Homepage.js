import React from 'react'
import Banner from '../banner/Banner'
import Blog from '../blog/Blog'
import Cards from '../cards/Cards'
import CommunityModal from '../communityModal/CommunityModal'
import Slider from '../slider/Slider'
import Faq from '../faq/Faq'
import Feature from '../feature/Feature'
import FeatureCard from '../feature/FeatureCard'
import Navigation from '../navvigation/Navigation'
import ScoreBlock from '../scoreBlock/ScoreBlock'
import StudentTemplate from '../studentTemplate/StudnetTemplate'
import Footer from '../footer/Footer'
import NewSlider from '../slider/NewSlider'


const Homepage = () => {
  return (
    <div>
   <Navigation/>
   <Banner/>
   <CommunityModal/>
   <Cards/>
   <ScoreBlock/>
   <Feature/>
   <FeatureCard/>
   <StudentTemplate/>
   <Slider/>
   {/* <NewSlider/> */}
   {/* <Faq/> */}
   <Blog/>
   <Footer/>
    </div>
  )
}

export default Homepage
