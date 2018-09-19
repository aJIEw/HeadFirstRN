import React from 'react';
import {Animated, Text, View} from 'react-native';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  };

  render() {
    let {fadeAnim} = this.state;

    return (
      <Animated.View                 // Special animatable View as a container
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View> // display children whatever it is or they are
    );
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 3000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class TestAnimation extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style={{
          width: 250, height: 70, backgroundColor: 'powderblue',
          alignItems: 'center', flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Text style={{fontSize: 28, textAlign: 'center'}}>Fading in</Text>
        </FadeInView>
      </View>
    )
  }
}
