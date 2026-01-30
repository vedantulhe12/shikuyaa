import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import PopularCoursesSection from '../components/PopularCoursesSection'
import ReviewsSection from '../components/ReviewsSection'
import StatsSection from '../components/StatsSection'
import AdditionalSections from '../components/AdditionalSections'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <PopularCoursesSection />
      <ReviewsSection />
      <StatsSection />
      <AdditionalSections />
    </div>
  )
}

export default Home