import React from 'react';
import {ActivityIndicator, Button, FlatList, StyleSheet, Text, View} from 'react-native';

import {connect} from 'react-redux';
import request from "../util/request";

class TestFetch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fetching: false,
    };
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

        <Button title="Fetch Starred Libraries" onPress={() => this.getMissedStars()}/>
        <Button title="Press me" onPress={() => this.getMissedRepoFromFile()}/>

        {
          this.state.fetching ? <ActivityIndicator size='large'/> : null
        }
      </View>
    );
  }

  async getMissedStars() {
    if (this.state.fetching) return;

    this.setState({fetching: true});

    console.log(`TestFetch-getMissedStars(): ${'started, please waiting'}`);

    /*
     * use full_name or name,
     * full_name is like user/repo, name is repo nam
     * */
    const filterStr = 'full_name';

    let page = 1;
    let onePage = [];
    let result = [];
    do {
      onePage = await request.get('https://api.github.com/users/ajiew/starred', {page});
      result = result.concat(onePage);
      page++;
    } while (onePage.length > 0);

    console.log(`TestFetch-getMissedStars() starred total: ${result.length}`);

    let lib = require('../data/lib.json') || [];
    // remove duplicate
    lib = [...new Set(lib)];

    console.log(`TestFetch-getMissedStars() lib total: ${lib.length}`);

    /* use full_name */
    if (filterStr === 'full_name') {
      lib = lib.map(item => item.replace('https://www.github.com/', ''));
    }

    let missFromFile = result.filter((item) => !lib.includes(item[filterStr]));
    console.log(`TestFetch-getMissedStars() missFromFile total: ${missFromFile.length}`);
    missFromFile.forEach(item => {
      console.log(`${item.html_url}`);
    });

    result = result.map(item => item[filterStr]);

    let missFromGithub = lib.filter((item) => !result.includes(item));
    console.log(`TestFetch-getMissedStars() missFromGithub total: ${missFromGithub.length}`);
    missFromGithub.forEach(item => {
      console.log(`${item}`);
    });

    this.setState({fetching: false});
  }

  getMissedRepoFromFile() {
    let file = require('../data/lib.json') || [];
    let starred = require('../data/starred.json') || [];

    if (!file.length || !starred.length) {
      console.log(`TestFetch-getMissedRepoFromFile(): no repos ${lib.length}`);
      return;
    }

    console.log('TestFetch-getMissedRepoFromFile(): miss from starred = ' +
      `${this._filterMissedRepo(file, starred)}`);

    console.log('TestFetch-getMissedRepoFromFile(): miss from file = ' +
      `${this._filterMissedRepo(starred, file)}`);
  }

  /* missed repos in target */
  _filterMissedRepo(source, target) {
    console.log('------------------------------------------------------------');

    source = [...new Set(source)];
    console.log(`TestFetch-_filterMissedRepo(): source size  ${source.length}`);

    target = [...new Set(target)];
    console.log(`TestFetch-_filterMissedRepo(): target size ${target.length}`);

    let missed = source.filter((item) => !target.includes(item));
    missed.forEach(item => {
      console.log(`${item}`);
    });
    return missed.length
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

function mapStateToProps(state) {
  return {
    githubStars: state.util.githubStars.data
  }
}

export default connect(mapStateToProps)(TestFetch);
