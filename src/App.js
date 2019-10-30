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
      users: [],
      id: '',
      email: '',
      password: '',
    }
  }
  emailInputHandler = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  passwordInputHandler = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  authenticationHandler = () => {
    const userEmail = this.state.users[0].email
    const userPassword = this.state.users[0].username
    const userId = this.state.users[0].id
    console.log(userId)
    if (this.state.email === userEmail && this.state.password === userPassword) {
      this.setState({
        signedin: true,
        id: userId
      })
      const newRoute = `/profile/${this.state.id}`
      console.log(newRoute)
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({
        users: data
      }))
      .catch((err) => console.log(err))
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
            <Signin id={this.state.id} authenticationHandler={this.authenticationHandler} emailInputHandler={this.emailInputHandler} passwordInputHandler={this.passwordInputHandler} />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path='/profile'>
              {!this.state.signedin ? 
              <Redirect to='/signin'/>
               : 
               <Profile signedin={this.state.signedin} id={this.state.id} />
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