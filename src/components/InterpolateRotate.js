import React, { Component } from 'react'
import { Text, Animated, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native'

export default class InterpolationRotate extends Component {
    state = {
		animation: new Animated.Value(0)
	};

    startAnimation = () => {
        Animated.timing(this.state.animation,{
            duration:1000,toValue:360,
            useNativeDriver:false
        }).start()
    }

    render() {
        const Interpolation = this.state.animation.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
        });
       
        const animatedStyles={
            transform:[{
                rotateX:Interpolation
                //rotateX rotateY rotate
            }]
        }
        return (

            <TouchableWithoutFeedback
                onPress={this.startAnimation}>
                <Animated.View
                    style={[styles.myBox, animatedStyles]} >
                    <Animated.Text style={[animatedStyles]}> React Native </Animated.Text>
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