import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Splash from './src/components/Splash/Splash';
import AuthScreen from './src/components/Login';
import MotionScreen from './src/components/Motion';
import VrScreen from './src/components/Vr';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
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

  render() {
    if (this.state.isAppReady) {
      return (
        <Splash
          logout={() => this.setState({ isLoggedIn: false, isAppReady: false })}
        />
      )
    } else {
      return (
        <VrScreen />
      )
    }
  }
}
