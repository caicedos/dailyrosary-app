import React, { Component } from 'react';
import PrayApp from './Component/PrayApp/PrayApp.js';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Mission from './Component/Mission/Mission';
import Videos from './Component/Videos/Videos';
import Home from './Component/Home/Home';
import Signin from './Component/Signin/Signin';
import Register from './Component/Register/Register';
import Profile from './Component/Profile/Profile';
import HeaderNav from './Component/HeaderNav/HeaderNav';
import './App.css';

const initialUserObj =
{
  id: '',
  name: '',
  email: '',
  prayed: '',
  joined: ''
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      signedin: false,
      password: '',
      users: initialUserObj
    }
  }

  emailInputHandler = (event) => {
    const email = event.target.value
    const userObj = this.state.users
    const users = Object.assign({}, userObj, { email })
    this.setState({ users })
  }
  passwordInputHandler = (event) => {
    const password = event.target.value
    this.setState({ password })
  }
  nameInputHandler = (event) => {
    const name = event.target.value
    const userObj = this.state.users
    const users = Object.assign({}, userObj, { name })
    this.setState({ users })
  }

  registrationHandler = () => {

    const { name, email } = this.state.users;
    const { signedin, password } = this.state;

    if (!signedin && name && email && password) {
      fetch('http://localhost:3000/register', {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, password })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data === 'Incorrect form submission') {
            console.log(data)
          } else {
            this.setState({
              signedin: true,
              users: data
            })
          }
        })
        .catch((err) => console.log('there was an error'))
    } else {
      console.log('Invalid registration input')
    }
  }

  authenticationHandler = () => {

    const { email } = this.state.users;
    const { password } = this.state;

    if (email && password) {
      fetch('http://localhost:3000/signin', {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password })
      })
        .then(response => response.json())
        .then(data => {
          if (data === 'Wrong Credentials') {
          } else {
            this.setState({
              signedin: true,
              users: data
            })
          }
        })
        .catch((err) => console.log('wrong credetntials, try again.'))
    }
  }

  signoutHandler = () => {
    if (this.state.signedin) {
      const users = Object.assign({}, initialUserObj)
      this.setState({ signedin: false, users })
    }
  }
  openSidenav = () => {
    this.setState({ showNav: true })
  }
  closeSidenav = () => {
    this.setState({ showNav: false })
  }

  render() {
    const { users, signedin, showNav } = this.state
    return (
      <div>
        <Router>
          <HeaderNav
            sidenavState={showNav}
            signedinState={signedin}
            signoutHandler={this.signoutHandler}
            openSidenav={this.openSidenav}
            closeSidenav={this.closeSidenav}
          />
          <Switch>
            <Route exact path="/Mission" component={Mission} />
            <Route exact path="/pray-app" component={PrayApp} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/signin">
              {
                this.state.signedin ?
                  <Redirect to='/profile' />
                  :
                  <Signin authenticationHandler={this.authenticationHandler} emailInputHandler={this.emailInputHandler} passwordInputHandler={this.passwordInputHandler} />
              }
            </Route>
            <Route exact path="/register">
              {
                this.state.signedin ?
                  <Redirect to='/profile' />
                  :
                  <Register registrationHandler={this.registrationHandler} emailInputHandler={this.emailInputHandler} passwordInputHandler={this.passwordInputHandler} nameInputHandler={this.nameInputHandler} />
              }
            </Route>
            <Route exact path='/profile'>
              {
                this.state.signedin ?
                  <Profile user={users} signedin={signedin} />
                  :
                  <Redirect to='/signin' />
              }
            </Route>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;