import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoole } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component
{
    constructor( props )
    {
        super( props );
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event =>
    {
        event.preventDefault();

        this.setState( {
            email: '',
            password: '',
        } );
    }

    handleChange = event =>
    {
        const { value, name } = event.target;
        this.setState( { [name]: value } );
    }

    render()
    {
        return (
            <div className="sign-in">
                <h2 className="title">I Already Have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type='email'
                        handleChange={this.handleChange}
                        label='Email'
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        name="password"
                        type='password'
                        handleChange={this.handleChange}
                        label='Password'
                        value={this.state.password}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type='submit' value='Submit Form'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoole} isGoogleSignIn>
                            {' '}
                            SignIn with google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;