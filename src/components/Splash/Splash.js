import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Splash extends Component {
  static propTypes = {
    logout: PropTypes.func
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Github App</Text>
          <TouchableOpacity
            onPress={this.props.logout}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>Powered by React Native</Text>
      </View>
    )
  }
}

 const styles = StyleSheet.create({
   wrapper: {
     backgroundColor: '#27ae60',
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },
   title: {
     color: 'white',
     fontSize: 35,
     fontWeight: 'bold'
   },
   subtitle: {
     color: 'white',
     fontWeight: '200',
     paddingBottom: 20
   },
   titleWrapper: {
     justifyContent: 'center',
     flex: 1
   },
   buttonContainer: {
     backgroundColor: '#e67e22',
     paddingVertical: 15
   },
   buttonText: {
     textAlign: 'center',
     color: '#FFFFFF',
     fontWeight: '700'
   },
 });
