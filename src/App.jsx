import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import './styles.scss';

// Organisms
import { NavBar } from './components/Organisms';

// Routes
import { Home } from './views';

const App = () => {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/explore" render={() => <div>Error 404</div>} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
};

export default App;
