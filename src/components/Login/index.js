import React, { Component } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import { Image, View } from 'react-native-animatable';

import imgLogo from '../../images/Octocat.png'

import Wrapper from './Wrapper';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          animation={'bounceIn'}
          duration={1200}
          delay={200}
          style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={imgLogo}
            />
          <Wrapper/>

        </View>
        <KeyboardAvoidingView
          keyboardVerticalOffset={100}
          behavior={'padding'}
          style={styles.formContainer}
        >
          <LoginForm />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    flex: 1,
    // height: null,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 30
  },
  title: {
    color: 'white',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
})
