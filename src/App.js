import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInAndOutPage from './pages/sign-in-and-out/sign-in-and-out.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={Shop} />
            <Route path="/signin" component={SignInAndOutPage} />
        </Switch>
    </div>
  );
}

export default App;
