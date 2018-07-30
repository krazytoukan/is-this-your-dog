import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import httpClient from "./httpClient";
import SignUp from './views/SignUp';
import LogIn from './views/LogIn';
import Home from './views/Home';
import LogOut from './views/LogOut';
import NavBar from './views/Navbar';
import DogFound from './views/DogFound';
import DogInfo from './views/DogInfo';
import DogEdit from './views/DogEdit';
// import ProfileEdit from './views/ProfileEdit'
import './App.css';
import Footer from './partials/Footer'

class App extends Component {
  state = {
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
      <NavBar  currentUser={this.state.currentUser} />
       <Switch>
         <Route exact path="/dogfound" render={(routeProps) => {
           return this.state.currentUser
           ? <DogFound  {...routeProps} />
           : <Redirect to='/' />
         }} />
         {/* <Route exact path ='profile'render={(routeProps) => {
           return this.state.currentUser
           ? <ProfileEdit {...routeProps} currentUser={this.state.currentUser} 
              onUpdateProfileSuccess={this.onAuthSuccess.bind(this)}
              onDeleteProfileSuccess={this.onLogOutSuccess.bind(this)}/>
           : <Redirect to='/' />
         }} /> */}
          <Route exact path ='/signup' render={(routeProps) => {
            return <SignUp {...routeProps} onSignUpSuccess={this.onAuthSuccess.bind(this)} />
          }} />
          <Route exact path='/login' render={(routeProps) => {
            return <LogIn {...routeProps} onLogInSuccess={this.onAuthSuccess.bind(this)} />
          }} />
          <Route exact path='/logout' render={(routeProps) => {
            return <LogOut {...routeProps} onLogOutSuccess={this.onLogOutSuccess.bind(this)} />
          }} />
          <Route exact path="/dogs/:id/edit"  render={(routeProps) => {
            return this.state.currentUser
            ? <DogEdit {...routeProps} />
            : <Redirect to='/' />
          }} />
          <Route exact path="/dogs/:id"  render={(routeProps) => {
            return  <DogInfo {...routeProps} currentUser={this.state.currentUser} />
          }} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
