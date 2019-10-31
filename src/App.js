import React, { Component } from 'react';
import PrayApp from './Component/PrayApp/PrayApp.js';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Mission from './Component/Mission/Mission';
import Videos from './Component/Videos/Videos';
import Home from './Component/Home/Home';
import Signin from './Component/Signin/Signin';
import Register from './Component/Register/Register';
import Profile from './Component/Profile/Profile';
import HeaderNav from './Component/HeaderNav/HeaderNav'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      signedin: false,
      password: '',
      users: {
        id: '',
        name: '',
        email: '',
        prayed: '',
        joined: ''
      }
    }
  }
  emailInputHandler = (event) => {
    const emailInput = event.target.value
    const userObj = this.state.users
    const users = Object.assign({}, userObj, { email: emailInput })
    this.setState({
      users: users
    })
  }
  passwordInputHandler = (event) => {
    const passwordInput = event.target.value
    this.setState({
      password: passwordInput
    })
  }

  authenticationHandler = () => {

    const userEmail = this.state.users.email
    const userPassword = this.state.password
    console.log(userEmail)
    console.log(userPassword)

    if (userEmail && userPassword) {
      console.log(userEmail, userPassword)
      fetch('http://localhost:3000/signin', {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            this.setState({
              signedin: true,
              users: data[0]
            })
          }
        })
        .catch((err) => console.log('wrong credetntials, try again.'))

    }


  }



  signinHandler = () => {
    if (this.state.signedin) {
      this.setState({ signedin: false })
    } else {
      this.setState({ signedin: true })
    }
  }

  openSidenav = () => {
    this.setState({ showNav: true })
  }

  closeSidenav = () => {
    this.setState({ showNav: false })
  }



  render() {
    console.log(this.state)
    console.log(this.state.users)
    return (
      <div>
        <Router>
          <HeaderNav
            sidenavState={this.state.showNav}
            signedinState={this.state.signedin}
            signinHandler={this.signinHandler}
            openSidenav={this.openSidenav}
            closeSidenav={this.closeSidenav}
          />
          <Switch>
            <Route exact path="/Mission" component={Mission} />
            <Route exact path="/pray-app" component={PrayApp} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/signin">
              {this.state.signedin ?
                  <Redirect to='/profile' />
                  :
                  <Signin authenticationHandler={this.authenticationHandler} emailInputHandler={this.emailInputHandler} passwordInputHandler={this.passwordInputHandler} />
              }
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path='/profile'>
              {this.state.signedin ?
                <Profile signedin={this.state.signedin} />
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