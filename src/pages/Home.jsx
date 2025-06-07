

import MapSection from '../Components/Home/MapSection.jsx';
import PaymentPlanSection from '../Components/Home/PaymentPlanSection.jsx';
import FloorPlanSelector from '../Components/Home/FloorPlanSelector.jsx';
import IconicProperties from '../Components/Home/IconicProperties.jsx';
import Whykingfisher from '../Components/Home/WhyKingFisher.jsx';
import AmenitiesSection from '../Components/Home/AmenitiesSection.jsx';
import Gallery from '../Components/Home/Gallery.jsx';
import Hero1 from '../Components/Home/hero1.jsx';
import Hero2 from '../Components/Home/hero2.jsx';
import Hero4 from '../Components/Home/Hero4.jsx';
import PartnerLogos from '../Components/Partners/Associated-Partners.jsx';


const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Hero1/>
    <div className='mx-10'>
    <Hero2/>
    <Gallery/>
    <Hero4/>
    <Whykingfisher/>
    <IconicProperties/>
    <AmenitiesSection/>
    <MapSection/>
    <PaymentPlanSection/>
    <FloorPlanSelector/>
    <PartnerLogos/>
    </div>
        
    </>
  )
}

export default Home
