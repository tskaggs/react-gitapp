import React, { Component, PropTypes } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Text, View } from 'react-native-animatable'

export default class LoginForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onLoginPress: PropTypes.func.isRequired,
    onSignupLinkPress: PropTypes.func.isRequired
  }

  state = {
    email: '',
    password: '',
    fullName: ''
  }

  hideForm = async () => {
    if (this.buttonRef && this.formRef && this.linkRef) {
      await Promise.all([
        this.buttonRef.zoomOut(200),
        this.formRef.fadeOut(300),
        this.linkRef.fadeOut(300)
      ])
    }
  }

  render() {
    const { email, password } = this.state
    const { isLoading, onSignupLinkPress, onLoginPress } = this.props
    const isValid = email !== '' && password !== ''

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          />
        <TextInput
          placeholder="username or email"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
          />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
    color: 'white',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
})
