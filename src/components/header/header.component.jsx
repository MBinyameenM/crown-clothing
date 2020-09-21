import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (

    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>

        <div className="options">
            <Link to='/shop' className="option" >
                SHOP
            </Link>

            <Link to='/contact' className="option" >
                CONTACT
            </Link>

            {
                !currentUser?
                <Link to='/signin' className="option" >
                    SIGN IN
                </Link>
                :
                <li  style={{ listStyle: 'none', cursor:'pointer' }} className="option" onClick={ () => auth.signOut() } >
                    SIGN OUT
                </li>
            }

            <CartIcon />
            { hidden? null : <CartDropdown /> }

        </div>

    </div>

); 

const mapStatetToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});

export default connect(mapStatetToProps)(Header);