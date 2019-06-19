import React from 'react';

// Icons
import { Settings } from 'react-feather';

// Atoms
import { Divider } from '../../Atoms';

// Molecules
import { RightContent, Trend } from '../../Molecules';

const TrendLists = () => {
  return (
    <RightContent title="Tendencias para ti" icon={Settings}>
      <Divider />
      <Trend />
      <Divider />
      <Trend />
      <Divider />
      <Trend />
    </RightContent>
  );
};

export default TrendLists;
