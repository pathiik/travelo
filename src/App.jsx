import './App.css'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import DestinationSearch from './components/destinationSearch/DestinationSearch'
import PopularDestination from './components/popularDestination/PopularDestination'
import Newsletter from './components/newsletter/Newsletter'
import PopularPlaces from './components/popularPlaces/PopularPlaces'
import Video from './components/videoSection/Video'
import Features from './components/features/Features'
import Testimonials from './components/testimonial/Testimonial'
import RecentTrips from './components/recentTrips/RecentTrips'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Intro />
      <DestinationSearch />
      <PopularDestination />
      <Newsletter />
      <PopularPlaces />
      <Video />
      <Features />
      <Testimonials />
      <RecentTrips />
      <Footer />
    </>
  )
}

export default App
