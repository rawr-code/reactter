import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './styles.scss';

// Organisms
import { NavBar } from './components/Organisms';

// Routes
import { Home } from './views';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/explore" render={() => <div>Error 404</div>} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
