import HeroSection from "../components/Product/HeroSection";
import Gallery from "../components/Product/Gallery";
import CTA from "../components/Product/CTA";
import { Helmet } from 'react-helmet';

const Work = () => {
  return (
    <>
     <Helmet>
        <title>Explore Custom Products | Neon Sign</title>
        <meta name="description" content="Explore our past works in acrylic signage – custom LED signs, 3D acrylic letters & branding projects for shops, offices & events in India." />
        <link rel="canonical" href="https://acrylicsignboards.in/" />
      </Helmet>
      
       <div className="min-h-screen bg-[#E63025] overflow-x-hidden">
      <HeroSection />
      <Gallery />
      <CTA />
    </div>
      </>
   
  );
};

export default Work;
