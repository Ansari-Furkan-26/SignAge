import HeroSection from "../components/Custom/hero"
import ProductsSection from "../components/Custom/products"
import AboutSection from "../components/Custom/about"
import { Helmet } from 'react-helmet';

export default function HomePage() {
    return (
        <>
         <Helmet>
        <title>Online Product Designer | Customize Neon Sign & More</title>
        <meta name="description" content="Custom Neon Signage Board made with high-quality acrylic signage experience. Personalize with ease for events, branding & promotions." />
        <link rel="canonical" href="https://acrylicsignboards.in/" />
        </Helmet>
        
        <div className="min-h-screen bg-[#E63025]">            
            <main>
                <HeroSection />
                <ProductsSection />
                <AboutSection />
            </main>           
        </div>
        
        </>
    )
}
