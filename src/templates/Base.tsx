import { useState } from 'react';

import { DispatcherModal } from '@/form';
import { Navbar } from '@/navigation/Navbar';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import Counter from './Counter';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { HowItWork } from './HowItWorks';
import { PricingV2 } from './PricingV2';
import { RegisterFamily } from './RegisterFamily';
import { Service } from './Services';

const Base = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSubscriptionModal, setOpenSubscriptionModal] = useState(false);
  const [subscriptionPaquet, setSubscriptionPaquet] = useState('' as string);

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <DispatcherModal
        onClose={() => {
          setOpenSubscriptionModal(false);
        }}
        show={openSubscriptionModal}
      />

      {openModal && (
        <RegisterFamily
          subscriptionPaquet={subscriptionPaquet}
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      )}
      <Navbar />
      <Hero />
      <HowItWork />
      <Service />
      <PricingV2
        setOpenModal={setOpenModal}
        setSubscriptionPaquet={setSubscriptionPaquet}
      />
      <Counter />
      <Footer />
    </div>
  );
};

export { Base };
