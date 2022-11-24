import Hero from '../components/Homepage/Hero';
import BenefitsSection from '../components/Homepage/BenefitsSection';
import FeaturesSection from '../components/Homepage/FeaturesSection';
import Gradient from '../components/customComponents/Gradient';

const Home = () => {
  return (
    <Gradient>
      <Hero />
      <BenefitsSection />
      <FeaturesSection />
      {/* <SecondSection /> */}
    </Gradient>
  );
};

export default Home;
