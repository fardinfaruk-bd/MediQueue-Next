import AvailableTutors from '@/components/AvailableTutors';
import Banner from '@/components/Banner';
import CallToAction from '@/components/CallToAction';
import OurApproach from '@/components/OurApproach';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AvailableTutors />
      <OurApproach />
      <CallToAction />
    </div>
  );
};

export default HomePage;