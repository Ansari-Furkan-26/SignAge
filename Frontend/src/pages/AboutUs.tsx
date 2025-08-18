
import AboutHeroSection from "../components/About/AboutHeroSection";
import AboutCTA from "../components/About/AboutCTA";
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
     <>
      <Helmet>
        <title>About Us | Crafting Personalized Sign Board & Gifts</title>
        <meta name="description" content="Learn about Acrylic Sign Boards India – experts in premium acrylic signage, 3D letters & LED boards for businesses, shops & events." />
        <link rel="canonical" href="https://acrylicsignboards.in/" />
      </Helmet>

    <div className="min-h-screen bg-[#E63025] overflow-x-hidden">
      <AboutHeroSection />
      <AboutCTA />
    </div>
    </>
  );
};

export default AboutUs;