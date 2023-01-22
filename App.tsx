import React, { Component } from 'react'
import { View,StyleSheet } from 'react-native'
import AbsolutePosition from './src/components/AbsolutePosition'
import Delay from './src/components/Delay'
import EasingExample from './src/components/EasingExample'
import InterpolationRotate from './src/components/InterpolateRotate'
import Interpolation from './src/components/Interpolation'
import Loop from './src/components/Loop'
import Loop2 from './src/components/Loop2'
import MultiField from './src/components/MultiField'
import Parallel from './src/components/Parallel'
import Scale from './src/components/Scale'
import Sequence from './src/components/Sequence'
import Spring from './src/components/Spring'
import Spring2 from './src/components/Spring2'
import Stagger from './src/components/Stagger'
import Timing from './src/components/Timing'
import TimingPosition from './src/components/TimingPosition'

export default class App extends Component {
 

  render() {
    
    return (
      <View style={styles.container}>
       <Loop2/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',

  },
 
})