/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, Button, Image, Platform, StyleSheet, Text, TextInput, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends Component {

  // region 实例化期
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {text: 'Useless Placeholder'};
  }

  render() {
    console.log('render');
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={{flex: 1}}>
        <Text style={styles.welcome}>Welcome to My React Native!</Text>

        <Image source={pic} style={{width: 193, height: 110}}/>

        <TextInput style={{height: 40, flexDirection: 'row', borderColor: 'gray', borderWidth: 1}}
                   placeholder="Type here to translate!"
                   onChangeText={
                     (text) => this.setState({text})
                   }
        />

        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
        />
      </View>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  // endregion

  // region 存在期
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  // render()

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  // endregion

  // region 销毁期
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // endregion
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    flex: 1,
  },

});
