import React, { Component } from 'react'
import { Text, View, Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native'

export default class Parallel extends Component {
    state = {
        animationScale: new Animated.Value(1),
        animationOpacity: new Animated.Value(0.4)
    };

    startAnimation = () => {
      Animated.parallel([
        Animated.timing(this.state.animationScale, {
            duration: 120,
            toValue: 1.3,
            useNativeDriver:false
        }),

        Animated.timing(this.state.animationOpacity, {
            duration: 500,
            toValue: 1,
            
            useNativeDriver:false
        })
      ]).start(()=>{
        console.log('bitti');
      });
    }



    render() {
        const animatedStyles = {
            transform: [{
                scale: this.state.animationScale
            }],
            opacity: this.state.animationOpacity
        };
        return (
            <TouchableWithoutFeedback onPress={this.startAnimation}>
                <Animated.View style={[styles.myBox, animatedStyles]}>
                    <Text>React Native</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
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