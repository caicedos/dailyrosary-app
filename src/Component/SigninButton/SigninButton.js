import React from 'react';
import { Link } from 'react-router-dom';

const SigninButton = ({ signinButtonHeader, signedinState, signoutHandler }) => {
    if (!signedinState) {
        return <Link to='/signin' onClick={() => signinButtonHeader()} className="f6 link dib white dim mr3 mr4-ns">Sign In</Link>
    } else {
        return <Link to='/signin' onClick={() => signoutHandler()} className="f6 link dib white dim mr3 mr4-ns">Sign Out</Link>
    }
}

export default SigninButton;

