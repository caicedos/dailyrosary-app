import React from 'react';
import { Link } from 'react-router-dom';

const SigninButton = ({signedinState, signinHandler}) => {
    if(signedinState) {
       return <Link to='/signin' onClick={() => signinHandler()} className="f6 link dib white dim mr3 mr4-ns">Sign Out</Link> 
    } else {
        return <Link to='/signin' onClick={() => signinHandler()} className="f6 link dib white dim mr3 mr4-ns">Sign In</Link>
    }
}

export default SigninButton;