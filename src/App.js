import React, { Component } from 'react';
import PrayApp from './Component/PrayApp/PrayApp.js';
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import HeaderNav from './Component/HeaderNav/HeaderNav';
import Mission from './Component/Mission/Mission';
import Videos from './Component/Videos/Videos';
import Home from './Component/Home/Home';
import Signin from './Component/Signin/Signin';
import Register from './Component/Register/Register';
import Profile from './Component/Profile/Profile';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showNav: false,
      signedin: false
    }
  }

  signinHandler = () => {
    if(this.state.signedin) {
      this.setState({signedin: false})  
    } else {
      this.setState({signedin: true})
    }
    
  }
  
  openSidenav = () => {
    this.setState({showNav: true})
  }
  
  closeSidenav = () => {
    this.setState({showNav: false})
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
            <Route  exact path="/Mission" component={Mission} />
            <Route  exact path="/pray-app" component={PrayApp} />
            <Route  exact path="/videos" component={Videos} />
            <Route  exact path="/signin" component={Signin} />
            <Route  exact path="/register" component={Register} />
            <Route  exact path="/profile" component={Profile} />
            <Route exact path="/" component={Home} />
          </Switch> 
        </Router>
      </div>
    )
  }
}

export default App;
