import React, { Component } from 'react'
import { Text, Animated, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native'

export default class AbsolutePosition extends Component {
    state = {
        animation: new Animated.Value(0)
    };

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 30, duration: 500,
            useNativeDriver: false
        }).start();
    }

    render() {
        const animatedStyles = {
            left:this.state.animation,
            right:this.state.animation,
            bottom:this.state.animation
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
        height: 200,
        backgroundColor: '#FBC02D',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        bottom:0,
        left:0,
        right:0
    }
})