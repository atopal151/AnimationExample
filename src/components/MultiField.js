import React, { Component } from 'react'
import { Text, Animated, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native'

export default class MultiField extends Component {
    state = {
        animationWidth: new Animated.Value(200),
        animationHeight: new Animated.Value(200)
    };

    startAnimation = () => {
        Animated.timing(this.state.animationWidth, {
            duration: 300,
            toValue: 350,
        }).start()

        Animated.timing(this.state.animationHeight, {
            duration: 500,
            toValue: 350
        }).start()
    }

    render() {
        const animatedStyles = {
            width: this.state.animationWidth,
            height: this.state.animationHeight
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
        backgroundColor: '#FBC02D',
        justifyContent: 'center',
        alignItems: 'center'
    }
})