import React, { Component } from 'react';
import { Animated, StyleSheet, Easing, Dimensions, Text, TouchableWithoutFeedback, View } from 'react-native';

export default class EasingExample extends Component {
    state = {
        animation: new Animated.Value(0)
    };

    startAnimation = () => {
        Animated
            .timing(this.state.animation, {
                duration: 1000,
                toValue: Dimensions.get('window').width - 200,
                useNativeDriver: false,
                // easing: Easing.bounce,
                easing: Easing.back(4),
                // easing: Easing.elastic(20),
            })
            .start(() => {
                Animated
                    .timing(this.state.animation, {
                        duration: 1000,
                        toValue: 0,
                        useNativeDriver: false,
                        easing: Easing.bounce,
                    })
                    .start(() => {
                        this.startAnimation()
                    })
            });
    };

    render() {
        const animatedStyles = {
            transform: [{
                translateX: this.state.animation
            }]
        };

        return (
            <TouchableWithoutFeedback onPress={this.startAnimation}>
                <Animated.View style={[styles.myBox, animatedStyles]}>
                    <Text>React Native</Text>
                </Animated.View>
            </TouchableWithoutFeedback>

        );
    }
}

const styles = StyleSheet.create({

    myBox: {
        width: 200,
        height: 200,
        backgroundColor: '#FFC107',
        justifyContent: 'center',
        alignItems: 'center'
    }
});