import AvailableTutors from '@/components/AvailableTutors';
import Banner from '@/components/Banner';
import OurApproach from '@/components/OurApproach';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AvailableTutors />
      <OurApproach />
    </div>
  );
};

export default HomePage;