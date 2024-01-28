import { useState } from 'react';

import { DispatcherModal } from '@/form';
import { Navbar } from '@/navigation/Navbar';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import Counter from './Counter';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { HowItWork } from './HowItWorks';
import { Pricing } from './Pricing';
import { RegisterFamily } from './RegisterFamily';
import { Service } from './Services';

const Base = () => {
  const [openModal, setOpenModal] = useState(false);
  const [subscriptionPaquet, setSubscriptionPaquet] = useState('' as string);

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <DispatcherModal />
      {openModal && (
        <RegisterFamily
          subscriptionPaquet={subscriptionPaquet}
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      )}
      <Navbar />
      <Hero setOpenModal={setOpenModal} />
      <HowItWork />
      <Service />
      <Pricing
        setOpenModal={setOpenModal}
        setSubscriptionPaquet={setSubscriptionPaquet}
      />
      <Counter />
      <Footer />
    </div>
  );
};

export { Base };
