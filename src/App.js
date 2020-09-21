import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { auth, CreateUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import HomePage from './pages/home/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInAndOutPage from './pages/sign-in-and-out/sign-in-and-out.component';
import Header from './components/header/header.component';

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount()
  {
    const { setCurrentUser } = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async AuthUser => {
        if(AuthUser)
        {
          const userRef = CreateUserProfileDocument(AuthUser);
          (await userRef).onSnapshot( snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });

          });
        }
        else
        {
         setCurrentUser(AuthUser);
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
          <Header />
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={Shop} />
              <Route path="/signin" render={ () => this.props.currentUser ? <Redirect path='/' /> : <SignInAndOutPage /> } />
          </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)) 
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
