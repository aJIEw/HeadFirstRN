import React, {Component} from "react";
import {Slider, StyleSheet, View} from "react-native";

export default class TestSlider extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Slider style={styles.slider} value={2}>
        </Slider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  slider: {
    width: 100,
    height: 100,
  }
});