import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignUpForm from './components/SignUpForm';
import Navigation from './components/Navigation';
import SplashPage from './components/SplashPage';
import RestaurantList from './components/Restaurant/restaurantList';

function App() {
  return (
   <>
   {/* <Navigation/> */}
    <Switch>
    {/* <ConnectedRestaurantList /> */}
    <Route exact path="/">
          <SplashPage />
      </Route>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route path="/restaurants">
        <RestaurantList />
      </Route>
    </Switch>
    </>
  );
}

export default App;