import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { auth, CreateUserProfileDocument } from './firebase/firebase.utils';
import HomePage from './pages/home/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInAndOutPage from './pages/sign-in-and-out/sign-in-and-out.component';
import Header from './components/header/header.component';

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount()
  {
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async AuthUser => {
        if(AuthUser)
        {
          const userRef = CreateUserProfileDocument(AuthUser);
          (await userRef).onSnapshot( snapshot => {
            this.setState({ currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            } },() => console.log(this.state.currentUser));
          });
        }
        else
        {
          this.setState({ currentUser: AuthUser });
        }
      });

  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="container-fluid">
          <Header currentUser={this.state.currentUser} />
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={Shop} />
              <Route path="/signin" component={SignInAndOutPage} />
          </Switch>
      </div>
    )
  }
}

export default App;
