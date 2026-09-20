import AvailableTutors from '@/components/AvailableTutors';
import Banner from '@/components/Banner';
import CallToAction from '@/components/CallToAction';
import HowItWorks from '@/components/HowItWorks';
import OurApproach from '@/components/OurApproach';
import WhyLearnWithUs from '@/components/WhyLearnWithUs';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AvailableTutors />
      <WhyLearnWithUs />
      <HowItWorks />
      <OurApproach />
      <CallToAction />
    </div>
  );
};

export default HomePage;