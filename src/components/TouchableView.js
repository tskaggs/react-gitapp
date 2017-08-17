import React, { PropTypes } from 'react'
import { Platform, View, TouchableNativeFeedback, TouchableOpacity } from 'react-native'

const TouchableView = ({ isRippleDisabled, rippleColor, children, style, ...props }) => {
    return (
      <TouchableOpacity {...props} style={style}>
        {children}
      </TouchableOpacity>
    )
}

TouchableView.propTypes = {
  isRippleDisabled: PropTypes.bool,
  rippleColor: PropTypes.string,
  children: PropTypes.any,
  style: View.propTypes.style
}

export default TouchableView
