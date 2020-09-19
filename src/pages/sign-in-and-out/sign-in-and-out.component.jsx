import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.components';

const SignInAndOutPage = () => (

    <div className="sign-in-and-out row">
        <div className="col-6">
            <SignIn />
        </div>
        <div className="col-6">
           <SignUp />
        </div>
    </div>

);

export default SignInAndOutPage;