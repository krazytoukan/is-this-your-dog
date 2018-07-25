import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import httpClient from "./httpClient";
import SignUp from './views/SignUp';
import LogIn from './views/LogIn';
import Home from './views/Home';
import LogOut from './views/LogOut';
import NavBar from './views/Navbar'

import './App.css';

class App extends Component {
  state ={
    currentUser: httpClient.getCurrentUser()
  }


  onAuthSuccess() {
    this.setState({currentUser: httpClient.getCurrentUser() })
  }

  onLogOutSuccess(){
    this.setState({currentUser: null})
  }

  render() {
    return (
      <div className="App">
      <NavBar />
       <Switch>
       <Route exact path ='/signup' render={(routeProps) => {
            return <SignUp {...routeProps} onSignUpSuccess={this.onAuthSuccess.bind(this)} />
          }} />
          <Route exact path='/login' render={(routeProps) => {
            return <LogIn {...routeProps} onLogInSuccess={this.onAuthSuccess.bind(this)} />
          }} />
          <Route exact path='/logout' render={(routeProps) => {
            return <LogOut {...routeProps} onLogOutSuccess={this.onLogOutSuccess.bind(this)} />
          }} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
