import React, {Component} from 'react';
import {Text} from 'react-native';


export default class ChangeableText extends Component {
  render() {
    return (
      <Text style={{color: this.props.color, borderWidth: 2, padding: 8}}>{this.props.text}</Text>
    );
  }
}