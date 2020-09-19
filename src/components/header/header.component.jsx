import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (

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
            

        </div>

    </div>

); 

export default Header;