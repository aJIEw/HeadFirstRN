import React, {Component} from 'react';
import {ScrollView, StyleSheet, Switch, Text, View} from 'react-native';

import TagGroup from "../../widgets/TagGroup";


const tags = ['React Native', 'Flutter', 'Ionic', 'Cordova', 'Weex', 'Taro', 'VasSonic', 'WeChat Mini Program'];

class TagGroupDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      singleChoiceMode: false,
      consoleText: '',
    };
  }

  render() {

    return <View style={styles.container}>

      <TagGroup source={tags}
                ref={ref => this.tagGroup = ref}
                style={styles.tagGroup}
                singleChoiceMode={this.state.singleChoiceMode}
                onSelectedTagChange={(param) => this.onTagPress(param)}/>

      <View style={styles.controller}>
        <Text style={styles.modeText}>{'singleChoiceMode'}</Text>
        <Switch style={styles.switch}
                value={this.state.singleChoiceMode}
                onValueChange={(value) => this.onSwitchChange(value)}/>
      </View>

      <ScrollView style={styles.console}
                  ref={ref => this.scrollView = ref}
                  directionalLockEnabled={false}
                  onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}>
        <Text style={styles.consoleText}>{this.state.consoleText}</Text>
      </ScrollView>
    </View>
  }

  onTagPress(param) {
    if (!this.state.singleChoiceMode && Array.isArray(param)) {
      this.setState(state => {
        return {
          consoleText: (state.consoleText ? state.consoleText + '\n' : state.consoleText) + `selected tags = ${param}`
        }
      });
    } else {
      this.setState(state => {
        return {
          consoleText: (state.consoleText ? state.consoleText + '\n' : state.consoleText) + `selected one = (${param.index}, ${param.value})`
        }
      });
    }
  }

  onSwitchChange(value) {
    if (value) {
      for (let i = 0; i < tags.length; i++) {
        this.tagGroup.unselect(i);
      }
    }

    this.setState(state => {
      return {
        singleChoiceMode: value,
        consoleText: state.consoleText + '\n\nsingleChoiceMode = ' + (value ? 'on' : 'off'),
      };
    })
  }
}

const styles = StyleSheet.create({
  container: {},
  content: {
    alignItems: 'center',
  },

  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 200,
  },

  tagGroup: {
    marginHorizontal: 10,
    marginVertical: 16,
  },

  controller: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopColor: '#ccc',
    borderTopWidth: 0.8,
    paddingTop: 10,
  },
  modeText: {
    color: '#333',
    fontSize: 18,
  },
  switch: {
  },

  console: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 16,
    backgroundColor: '#ccc',
    minHeight: 300,
  },
  consoleText: {
    color: '#333',
    fontSize: 16,
  },
});

export default TagGroupDemo;