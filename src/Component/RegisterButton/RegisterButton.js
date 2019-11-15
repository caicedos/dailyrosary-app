import React from 'react';
import { Link } from 'react-router-dom';

const RegisterButton = ({ registerButtonHeader, signedinState }) => {
    if (!signedinState) {
        return <Link
            to='/register'
            className="f6 grow dib bg-yellow black bg-animate hover-bg-light-blue hover-white no-underline pv2 ph4 br-pill ba b--white-20"
            onClick={() => {registerButtonHeader()}}
        >
            Register
        </Link>
    } else {
        return null
    }
}

export default RegisterButton;