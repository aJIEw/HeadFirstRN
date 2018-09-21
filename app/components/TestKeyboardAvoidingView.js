import React, {Component} from "react";
import {Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View} from "react-native";

class TestKeyboardAvoidingView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      remarks: ''
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={(Platform.OS === 'android') ? null : 'padding'}
                            >
        <View style={styles.realContainer}/>

        <View style={styles.section1}/>

        <View style={styles.section2}/>

        <View style={styles.inputContainer}>
          <TextInput style={styles.remark}
                     multiline={true}
                     placeholder={'请输入'}
                     placeholderTextColor={'#CCCCCC'}
                     underlineColorAndroid='rgba(0,0,0,0)'
                     onChangeText={(text) => this.setState({remarks: text})}/>
        </View>
        <Button style={styles.btn} title={'Button'}/>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  realContainer: {
    height: 200,
    marginTop: 50,
    backgroundColor: 'red',
  },
  section1: {
    height: 100,
    backgroundColor: '#fff',
    margin: 10,
  },
  section2: {
    height: 100,
    backgroundColor: '#fff',
    margin: 10,
  },
  inputContainer: {
    height: 120,
    backgroundColor: '#fff',
    marginTop: 8,
    marginHorizontal: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    justifyContent: 'flex-start',
  },
  remark: {
    textAlign: 'left',
  },
  btn: {
    alignSelf: 'center',
    width: 200,
    height: 30,
    backgroundColor: 'yellow',
  }
});

export default TestKeyboardAvoidingView;