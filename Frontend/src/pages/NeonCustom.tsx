import {NeonConfigurator} from "../components/NeonCustom/Herosection"
import { Helmet } from 'react-helmet';

export default function HomePage() {
    return (
    <>
        <Helmet>
        <title>Online Product Designer | Customize Neon Sign & More</title>
        <meta name="description" content="Premium Acrylic Sign Boards in India – Sleek, durable, customizable signage solutions for shops, offices & events. Request a quote today!" />
        <link rel="canonical" href="https://acrylicsignboards.in/" />
        </Helmet>
    <div className="min-h-screen">        
        <main>
            <NeonConfigurator />
        </main>        
    </div>
    </>
    )
}
