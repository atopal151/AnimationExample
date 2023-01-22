import React, { Component } from 'react'
import { Easing, Animated, StyleSheet, TouchableWithoutFeedback, Alert, Image } from 'react-native'

export default class Loop2 extends Component {
    state = {
        animation: new Animated.Value(0)
    };

    startAnimation = () => {
        Animated.loop(
            Animated.timing(this.state.animation, {
            duration: 2400, toValue: 1, useNativeDriver: false,
            easing:Easing.linear
        })).start()
    }

    render() {
        const interpolation = this.state.animation.interpolate(
            {
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
            }
        );
        const animatedStyles = {
            transform: [{
                rotate: interpolation
            }]
        };
        return (
            <TouchableWithoutFeedback onPress={this.startAnimation}>
                <Animated.Image
                    source={require('../../assets/SystemPref.png')}
                    style={[styles.myBox, animatedStyles]} />
            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({

    myBox: {
        width: 200,
        height: 200,

        justifyContent: 'center',
        alignItems: 'center'
    }
});