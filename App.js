import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Splash from './Splash';
import Login from './src/components/Login/Login';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      timePassed: false
    }
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
    if (!this.state.timePassed){
      return (
        <Splash/>
      )
    }else{
      return (
        <Login/>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
