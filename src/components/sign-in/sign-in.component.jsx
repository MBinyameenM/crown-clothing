import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component{

    constructor()
    {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => { 
        event.preventDefault();
        this.setState( {  email: '', password: '' } ); 
    };
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render(){

        return(

            <div className="sign-in">
                <h2>I already have an account</h2>
                 <span>Sign in with your email and password</span>
                
                    <form onSubmit={this.handleSubmit}>
                        <FormInput 
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="email"
                        required
                        onChange={this.handleChange}
                        />
                        <FormInput 
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="password"
                        required
                        onChange={this.handleChange}
                        />
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton type='button' onClick={SignInWithGoogle} className="btn btn-lg btn-primary ml-3">
                            Sign In With Google
                        </CustomButton>

                    </form>
            </div>

        );

    }
    

};

export default SignIn;