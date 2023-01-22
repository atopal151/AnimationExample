import React, { Component } from 'react'
import { Text, Animated, StyleSheet, TouchableWithoutFeedback,Alert } from 'react-native'

export default class Loop extends Component {
    state = {
       topValue:new Animated.Value(0)
    };

    startAnimation = () => {
       Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.topValue,{
                    duration:1000,
                    toValue:300,
                    useNativeDriver:false
                   }),
                   Animated.timing(this.state.topValue,{
                    duration:1000,
                    toValue:0,
                    useNativeDriver:false
                   }),

            ])
       ).start()
    }

    render() {
        const animatedStyles = {
          top:this.state.topValue
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
        position:'absolute',
        left:0,
        top:0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});