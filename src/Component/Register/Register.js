import React from 'react';
import { Link } from 'react-router-dom';

const Register = ({ registrationHandler, emailInputHandler, passwordInputHandler, nameInputHandler }) => {
    return (
        <div>
            <main className="pa4 black-80 shadow-5">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="first-name" >First Name</label>
                            <input onChange={(event) => nameInputHandler(event, 'first')} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="firstName" id="firstName" required={true}/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="last-name" >Last Name</label>
                            <input onChange={(event) => nameInputHandler(event, 'last')} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="lastName" id="lastName" required={true}/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address" >Email</label>
                            <input onChange={(event) => emailInputHandler(event)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" required={true}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password" >Password</label>
                            <input onChange={(event) => passwordInputHandler(event)} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" required={true}/>
                        </div>
                    </fieldset>
                    
                        <Link to='/register' onClick={() => registrationHandler()} type='submit' className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Register</Link>
                    
                </form>
            </main>
        </div>
    )
}

export default Register;