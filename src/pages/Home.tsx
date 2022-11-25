import Hero from '../components/Homepage/Hero';
import BenefitsSection from '../components/Homepage/BenefitsSection';
import FeaturesSection from '../components/Homepage/FeaturesSection';
import Gradient from '../components/customComponents/Gradient';
import Testimonials from '../components/Homepage/Testimonials';

const Home = () => {
  return (
    <Gradient>
      <Hero />
      <BenefitsSection />
      <FeaturesSection />
      <Testimonials />
      {/* <SecondSection /> */}
    </Gradient>
  );
};

export default Home;
