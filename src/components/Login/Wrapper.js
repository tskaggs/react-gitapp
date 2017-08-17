import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Image, View } from 'react-native-animatable';

import CustomButton from '../Button/CustomButton';

export default class Wrapper extends Component {
  static propTypes = {
    onCreateAccountPress: PropTypes.func.isRequired,
    onSignInPress: PropTypes.func.isRequired
  }

  render () {
    return (
      <View style={styles.container}>
        <View animation={'zoomIn'} delay={600} duration={400}>
          <CustomButton
            text={'Create Account'}
            onPress={this.props.onCreateAccountPress}
          />
        </View>
        <View style={styles.separatorContainer} animation={'zoomIn'} delay={700} duration={400}>
          <Text style={styles.separatorOr}>{'Or'}</Text>
        </View>
        <View animation={'zoomIn'} delay={800} duration={400}>
          <CustomButton
            text={'Sign In'}
            onPress={this.props.onSignInPress}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  separatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20
  },
  separatorOr: {
    textAlign: 'center',
    color: '#FFFFFF',
    flex: 1
  }
})
