import React, { Component } from 'react'
import { Text, Animated, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native'

export default class Interpolation extends Component {
    state = {
		animation: new Animated.Value(0)
	};

    startAnimation = () => {
        Animated.timing(this.state.animation,{
            duration:500,toValue:1,
            useNativeDriver:false
        }).start()
    }

    render() {
        const boxInterpolate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['red', 'black']
        });
        const textInterpolate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['yellow', 'orange']
        });
        const boxAnimatedStyles = { 
            backgroundColor: boxInterpolate, }
        
        const textAnimatedStyles = { 
            color: textInterpolate, }
        return (

            <TouchableWithoutFeedback
                onPress={this.startAnimation}>
                <Animated.View
                    style={[styles.myBox, boxAnimatedStyles]} >
                    <Animated.Text style={[textAnimatedStyles]}> React Native </Animated.Text>
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
        alignItems: 'center',

    }
})