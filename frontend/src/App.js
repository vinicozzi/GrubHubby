import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignUpForm from './components/SignUpForm';
// import Navigation from './components/Navigation';
import SplashPage from './components/SplashPage';
// import Restaurants from './components/Restaurant/restaurantList';
// import MenuDisplay from './components/Menu/';
// import RestaurantMenu from './components/Menu/index';
import RestaurantMenu from './components/Menu/index';
import MainComponent from './components/MainPage/index';
// import NavBar from './components/MainNavigation/navigation';

function App() {
  return (
   <>
   {/* <Navigation/> */}
    <Switch>
    <Route exact path="/">
          <SplashPage />
      </Route>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route exact path="/restaurants">
          <MainComponent />
      </Route>
      <Route exact path="/restaurants/:id">
          <RestaurantMenu />
      </Route>
    </Switch>
    </>
  );
}

export default App;