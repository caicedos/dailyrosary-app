import React from 'react';
import { Link } from 'react-router-dom'
import Error from '../Error/Error';

const Signin = ({ error, errorMessage, passwordInputHandler, emailInputHandler, authenticationHandler }) => {

    return (
        <div>
        {error ? <Error errorMessage={errorMessage} /> : null}
            <main className="pa4 black-80 shadow-5">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={(event) => emailInputHandler(event)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={(event) => passwordInputHandler(event)} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <Link to='/signin' onClick={() => authenticationHandler()} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Sign in</Link>
                    </div>
                    <div className="lh-copy mt3">
                        <Link to='Register' className="f6 link dim black db">Register</Link>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Signin;
