import React from 'react';

// Atoms
import { Divider } from '../../Atoms';

// Molecules
import { RightContent, FollowTrend } from '../../Molecules';

const Follow = () => {
  return (
    <RightContent title="A quién seguir">
      <Divider />
      <FollowTrend />
      <Divider />
      <FollowTrend />
    </RightContent>
  );
};

export default Follow;
