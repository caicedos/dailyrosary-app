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
  firstName: '',
  lastName: '',
  email: '',
  prayed: 0,
  level: 1,
  joined: '',
  streak: 0,
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

  prayerCount = () => {
    let prayed = this.state.users.prayed
    prayed++
    const userObj = this.state.users
    const level = this.levelCalculator(prayed)
    const users = Object.assign({}, userObj, { prayed, level })
    this.setState({ users })
  }

  levelCalculator = (prayed) => {
    if (prayed >= 13 && prayed < 18) {
      return 2
    } else if (prayed >= 18 && prayed < 23) {
      return 3
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
  nameInputHandler = (event, name) => {
    if (name === 'first') {
      const firstName = event.target.value
      const userObj = this.state.users
      const users = Object.assign({}, userObj, { firstName })
      this.setState({ users })
    } else if ('last') {
      const lastName = event.target.value
      const userObj = this.state.users
      const users = Object.assign({}, userObj, { lastName })
      this.setState({ users })
    }
  }

  updateDbStats = () => {
    const { id, level, prayed, streak } = this.state.users
    console.log(id, level, prayed, streak)
    if (id > 0) {
      fetch('http://localhost:3000/profile', {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id, level, prayed, streak })
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((err) => console.log('error here', err))
    }
  }

  registrationHandler = () => {

    const { firstName, lastName, email } = this.state.users;
    const { signedin, password } = this.state;

    if (!signedin && firstName && lastName && email && password) {
      fetch('http://localhost:3000/register', {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password })
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
            console.log(data)
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
  
  componentDidUpdate() {
    this.updateDbStats()
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
            <Route exact path="/pray-app">
              <PrayApp levelCalculator={this.levelCalculator} prayerCount={this.prayerCount} />
            </Route>
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
            <Route exact path="/" component={Home}>
              <Redirect to='/pray-app' />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;