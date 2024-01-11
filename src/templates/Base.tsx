import { Navbar } from '@/navigation/Navbar';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { HowItWork } from './HowItWorks';
import { Pricing } from './Pricing';
import { Service } from './Services';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Hero />
    <HowItWork />
    <Service />
    <Pricing />
    <Footer />
  </div>
);

export { Base };
