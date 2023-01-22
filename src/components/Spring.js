import React, { Component } from 'react'
import { Text, Animated, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native'

export default class Spring extends Component {
  state = {
    animation: new Animated.Value(1)
  };

  startAnimation = () => {
    Animated.spring(this.state.animation, {
      toValue: 2, duration: 1000,
      useNativeDriver: false
    }).start();
  }

  render() {
   const animatedStyles = {
      transform: [{
        scale:this.state.animation
        //scaleX scaleY scale
      }]
    }
    return (
      
        <TouchableWithoutFeedback
          onPress={this.startAnimation}>
          <Animated.View
            style={[styles.myBox, animatedStyles]} >
            <Text> React Native </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
     
    )
  }
}
const styles = StyleSheet.create({
  myBox: {
    width: 200,
    height: 200,
    backgroundColor: '#FBC02D',
    justifyContent: 'center',
    alignItems: 'center'
  }
})