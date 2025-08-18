import ContactHero from '@/components/Contact/ContactHero';
import ContactMethods from '@/components/Home/ContactMethods';
import ContactCTA from '@/components/Home/ContactCTA';
import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <>
        <Helmet>
        <title>Contact Us | Start Your Custom Order Today</title>
        <meta name="description" content="Contact Acrylic Sign Boards for custom signage solutions. Get quotes for acrylic boards, LED signs, 3D letters & branding needs in India." />
        <link rel="canonical" href="https://acrylicsignboards.in/" />
        </Helmet>

        <div className="bg-[#E63025]">
            {/* Hero Section */}
            <ContactHero />

            {/* Contact Methods */}
            <ContactMethods />

            {/* Final CTA */}
            <ContactCTA />
        </div>
        </>
    );
};

export default Contact;