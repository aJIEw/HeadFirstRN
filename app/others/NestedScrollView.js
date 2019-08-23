import React, {Component} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';


/**
 * FlatList 嵌套 ScrollView 的时候，使得内部 FlatList 滑到底时，外部 ScrollView 才可滑动
 * */
export default class NestedScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {enableScrollViewScroll: false};
  }

  render() {
    return (
      <View>
        <ScrollView
          scrollEnabled={this.state.enableScrollViewScroll}>
          {this.renderFlatList('red')}
          {this.renderFlatList('green')}
          {this.renderFlatList('purple')}
          {this.renderFlatList('pink')}
        </ScrollView>
      </View>
    );
  }

  getRandomData = () => {
    return new Array(100).fill('').map((item, index) => {
      return {title: 'Title ' + (index + 1)};
    });
  };

  /**
   * FlatList 外部不能是可滑动的组件，否则将造成 onEndReachedThreshold 不可用
   * */
  renderFlatList(color: string) {
    return (
      <View>
        <FlatList
          data={this.getRandomData()}
          backgroundColor={color}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Text>{item.title}</Text>}
          onEndReached={() => this.setState({enableScrollViewScroll: true})}
          onEndReachedThreshold={1}
        />
      </View>
    );
  }
}