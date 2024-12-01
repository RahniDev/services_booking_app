"use client"
import { Descope } from '@descope/nextjs-sdk';

const SignIn = () => {
    return (<Descope
        flowId="sign-up-or-in"
        onSuccess={(e) => console.log('Logged in')}
        onError={(e) => console.log('Could not log in')}
        redirectAfterSuccess="/"
    // redirectAfterError="/error-page"
    />);
};

export default SignIn