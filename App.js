import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Splash from './src/components/Splash/Splash';
import AuthScreen from './src/components/Login';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      timePassed: false,
      isLoggedIn: false, // Is the user authenticated?
      isLoading: false, // Is the user loggingIn/signinUp?
      isAppReady: false // Has the app completed the login animation?
    }
  }

  _simulateLogin = (username, password) => {
    this.setState({ isLoading: true })
    setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false }), 1000)
  }

  _simulateSignup = (username, password, fullName) => {
    this.setState({ isLoading: true })
    setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false }), 1000)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setTimePassed();
    }, 3000);
  }

  setTimePassed() {
     this.setState({timePassed: true});
  }

  render() {
    // if (this.state.isAppReady) {
    //   return (
    //     <HomeScreen
    //       logout={() => this.setState({ isLoggedIn: false, isAppReady: false })}
    //     />
    //   )
    // } else {
    //   return (
    //     <AuthScreen
    //       login={this._simulateLogin}
    //       signup={this._simulateSignup}
    //       isLoggedIn={this.state.isLoggedIn}
    //       isLoading={this.state.isLoading}
    //       onLoginAnimationCompleted={() => this.setState({ isAppReady: true })}
    //     />
    //   )
    // }
    if (!this.state.timePassed){
      return (
        <Splash/>
      )
    }else{
      return (
        <AuthScreen/>
      )
    }
  }
}
