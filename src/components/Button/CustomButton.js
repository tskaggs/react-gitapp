import React, { PropTypes } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native-animatable';

import TouchableView from '../TouchableView';

const CustomButton = ({ onPress, isEnabled, isLoading, text, buttonStyle, textStyle, ...otherProps }) => {
  const onButtonPress = isEnabled && !isLoading ? onPress : () => null

  return (
    <View {...otherProps}>
      <TouchableOpacity onPress={onButtonPress} style={styles.buttonContainer}>
        {(isLoading) && <ActivityIndicator style={styles.spinner} color={'grey'} />}
        {(!isLoading) && <Text style={styles.buttonText}>{text}</Text>}
      </TouchableOpacity>
    </View>
  )

  CustomButton.propTypes = {
    onPress: PropTypes.func,
    isEnabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    text: PropTypes.string,
    buttonStyle: PropTypes.any,
    textStyle: PropTypes.any
  }

  CustomButton.defaultProps = {
    onPress: () => null,
    isEnabled: true,
    isLoading: false
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  spinner: {
    height: 26
  }
})

export default CustomButton;
