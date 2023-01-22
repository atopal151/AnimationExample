import React, { Component } from 'react'
import { Text, Animated, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native'

export default class Spring2 extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.spring(this.state.animation, {
      toValue: 30, duration: 300,
      useNativeDriver: false
    }).start();
  }

  render() {
   const animatedStyles = {
      bottom: this.state.animation,
      left: this.state.animation,
      right: this.state.animation,
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
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    height: 200,
    backgroundColor: '#FBC02D',
    justifyContent: 'center',
    alignItems: 'center'
  }
})