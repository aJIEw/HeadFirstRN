import React from 'react';
import {ActivityIndicator, Button, FlatList, StyleSheet, Text, View} from 'react-native';

export default class TestFetch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
            <View style={{backgroundColor: '#4b4b4b'}}>
              <Text style={styles.item}>{item.title}, {item.price}</Text>
            </View>
          )}
        />

        <Button
          title="Press me"
          onPress={() =>
            console.log('do nothing')
          }
        />
      </View>
    );
  }

  /*
  * 当页面元素加载完毕的时候，该方法会被调用
  * */
  componentDidMount() {
    return fetch('https://api.douban.com/v2/book/search?q=android')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.books,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    paddingTop: 10
  },
  item: {
    backgroundColor: '#eee',
    fontSize: 18,
    padding: 10,
    height: 44,
    marginBottom: 1,
  },
});
