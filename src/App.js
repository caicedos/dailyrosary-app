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
import moment from 'moment';
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
  lastlogouttime: '',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      signedin: false,
      password: '',
      users: initialUserObj,
      error: false,
      errorMessage: '',
      logintime: '',
      initialPrayedCount: 0
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
    if(prayed < 13) {
      return 1
    } else if (prayed >= 13 && prayed < 18) {
      return 2
    } else if (prayed >= 18 && prayed < 23) {
      return 3
    }
  }

  emailInputHandler = (event) => {
    const email = event.target.value
    const userObj = this.state.users
    const errorMessage = 'Invalid email address.'
    
    if(email.includes('@') && email.includes('.') && email.includes('com')){
      const users = Object.assign({}, userObj, { email })
      this.setState({ error:false, users })
    } else {
      this.setState({error: true, errorMessage })
    }
  }

  passwordValidation = (input) => {
    const characterArray = ['!', '@', '#', '$', '&']
    for(const e of characterArray){
      if(input.includes(e)){
        return true
      }
    }
  }

  passwordInputHandler = (event) => {
    const password = event.target.value
    const errorMessage = 'Invalid password input. Must be at least 6 characters long and include one of these characters: !, @, #, $, &.'
    if(password.length >= 6 && this.passwordValidation(password)){
      this.setState({ password, error: false })  
    } else {
      this.setState({error: true, errorMessage })
    }
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
    const { id, level, prayed } = this.state.users
    const streak = this.streakCalculation()
    console.log(streak)
    if (id > 0) {
      fetch('http://localhost:3000/profile', {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id, level, prayed, streak })
      })
        .catch((err) => console.log('error here', err))
    }
  }

  streakCalculation = () => {
    const { logintime, initialPrayedCount } = this.state
    const { lastlogouttime, prayed } = this.state.users
    const compared = moment(logintime).isBefore(lastlogouttime);
    let streak = this.state.users.streak
    if (compared && prayed > initialPrayedCount) {
      streak++
      return streak
    } else {
      return streak
    }
  }

  registrationHandler = () => {
    const { firstName, lastName, email } = this.state.users;
    const { signedin, password } = this.state;
    const joined = moment().format('L');
    
    if (!signedin && firstName && lastName && email && password && joined) {
      
      console.log(joined)
      fetch('http://localhost:3000/register', {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password, joined })
      })
        .then(response => response.json())
        .then(data => {
          if (data === 'Incorrect form submission') {
          } else {
            console.log(data)
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
            const logintime = moment().format()
            const initialPrayedCount = data.prayed
            this.setState({
              signedin: true,
              initialPrayedCount,
              logintime,
              users: data
            })
          }
        })
        .catch((err) => console.log('wrong credetntials, try again.'))
    }
  }

  lastLogoutTime = () => {
    const {id} = this.state.users
    const lastlogouttime = moment().add(1, 'days')
    fetch('http://localhost:3000/profile',{
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id, lastlogouttime })
    })
      .catch((err) => console.log('error here', err))
  }

  signoutHandler = () => {
    if (this.state.signedin) {
      this.lastLogoutTime()
      const users = Object.assign({}, initialUserObj)
      this.setState({ signedin: false, users })
    }
  }

  signinButtonHeader = () => {
    this.setState({ error: false })
  }

  registerButtonHeader = () => {
    this.setState({ error: false })
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
    const { errorMessage, error, users, signedin, showNav } = this.state
    return (
      <div>
        <Router>
          <HeaderNav
            sidenavState={showNav}
            signedinState={signedin}
            signoutHandler={this.signoutHandler}
            openSidenav={this.openSidenav}
            closeSidenav={this.closeSidenav}
            lastLogoutTime = {this.lastLogoutTime}
            signinButtonHeader={this.signinButtonHeader}
            registerButtonHeader={this.registerButtonHeader}
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
                  <Signin error={error} errorMessage={errorMessage} authenticationHandler={this.authenticationHandler} emailInputHandler={this.emailInputHandler} passwordInputHandler={this.passwordInputHandler} />
              }
            </Route>
            <Route exact path="/register">
              {
                this.state.signedin ?
                  <Redirect to='/profile' />
                  :
                  <Register error={error} errorMessage={errorMessage} registrationHandler={this.registrationHandler} emailInputHandler={this.emailInputHandler} passwordInputHandler={this.passwordInputHandler} nameInputHandler={this.nameInputHandler} />
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