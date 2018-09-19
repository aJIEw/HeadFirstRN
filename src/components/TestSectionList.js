import React, {Component} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.infoContainer}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jimmy', 'Joel', 'John', 'Jackson', 'James', 'Jillian', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#dcdcdc',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(174,174,174,0.65)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
