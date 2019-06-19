import React from 'react';
import './styles.scss';

// Icons
import { Star } from 'react-feather';

// Atoms
import { MainContainer, Toolbar, Divider } from '../../components/Atoms';

// Molecules
import { Tweet } from '../../components/Molecules';

// Organisms
import { TrendLists, Follow } from '../../components/Organisms';

const HomeView = () => {
  return (
    <MainContainer>
      <div className="homepage_left">
        <Toolbar title="Inicio" icon={Star} />
        <Divider />
        <Tweet />
        <Divider />
        <Tweet />
        <Divider />
        <Tweet />
        <Divider />
        <Tweet />
      </div>
      <div>
        <TrendLists />
        <Follow />
      </div>
    </MainContainer>
  );
};

export default HomeView;
