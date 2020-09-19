import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignOut extends React.Component{

    constructor()
    {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirm_password: ''
        };
    }

    handleChange = event =>
    {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event =>
    {
        event.preventDefault();
    }


    render(){
        return(
            <div className="row">
                <div className="col-12">
                    <h3> Create a new Account </h3>
                </div>
                <div className="col-8">
                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                    type="text"
                    className="form-input"
                    name="displayName"
                    value={this.state.displayName}
                    onChange={this.handleChange}
                    label="Name"
                    />

                    <FormInput 
                    type="email"
                    className="form-input"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    label="email"
                    />

                    <FormInput 
                    type="password"
                    className="form-input"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    label="Password"
                    />

                    <FormInput 
                    type="password"
                    className="form-input"
                    name="confirm_password"
                    value={this.state.confirm_password}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    />

                    <CustomButton type="submit">
                        Sign up 
                    </CustomButton>
                    

                </form>
                </div>                
            </div>
        );
    }


}

export default SignOut;