import React, {Component} from "react";
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";

import PropTypes from 'prop-types';

/**
 * 文字标签
 *
 * @author aJIEw
 * @date 2019/7/11
 */
export default class TagGroup extends Component {

  static propTypes = {
    source: PropTypes.array.isRequired, // 字符串数组
    onSelectedTagChange: PropTypes.func.isRequired, // 回调函数，其参数为选中的标签的字符串数组，
                                                    // 如果是单标签模式，则参数为对象{index, value}
    singleChoiceMode: PropTypes.bool, // 是否是单标签模式
    _tags: PropTypes.array, // 仅供组件内部使用
  };

  static defaultProps = {
    onSelectedTagChange: () => console.log('TagGroup 未绑定点击事件'),
    singleChoiceMode: false,
    _tags: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      tagState: props.source.map(value => false), // 保存标签是否选中的状态
    };
  }

  componentWillReceiveProps(nextProps) {
    // 如果数据源长度发生变化则重置选中状态
    if (nextProps.source.length !== this.props.source.length) {
      this.setState({tagState: nextProps.source.map(value => false)});
    }
  }

  render() {
    return <View style={[styles.tagContainer].concat(this.props.style)}>
      {
        this.props.source.map((value, index) => {
          return <Tag ref={component => this.props._tags[index] = component}
                      text={value} key={index}
                      noUnselect={this.props.singleChoiceMode && this.state.tagState[index]} // 单标签模式选中后不允许解选
                      onSelectStateChange={() => this.pressTag(index)}/>
        })
      }
    </View>
  }

  pressTag(index) {
    this.setState(state => {
      if (this.props.singleChoiceMode) {
        // 单标签模式下，清除其他标签选中状态
        this.props._tags.forEach((tag, tagIndex) => {
          if (tag && index !== tagIndex) {
            tag.clearState();
          }
        });

        this.props.onSelectedTagChange({index: index, value: this.props.source[index]});
        return {tagState: state.tagState.map((value, tagFlagIndex) => index === tagFlagIndex)}
      }

      let copy = state.tagState;
      copy[index] = !copy[index];
      let selectedTags = this.props.source.filter((value, index) => copy[index]);
      this.props.onSelectedTagChange(selectedTags);
      return {tagState: copy}
    })
  }

  /**
   * 选中标签，不会调用 onSelectedTagChange()
   * */
  select(index) {
    if (index < this.props._tags.length) {
      // _tags 的大小随 source 数组改变，其中的 item 此时可能已经为空
      this.props._tags[index] && this.props._tags[index].setSelected();

      this.setState(state => {
        let copy = state.tagState;
        copy[index] = true;
        return {tagState: copy}
      });
    }
  }

  /**
   * 解选标签，不会调用 onSelectedTagChange()
   * */
  unselect(index) {
    if (index < this.props._tags.length) {
      this.props._tags[index] && this.props._tags[index].clearState();

      this.setState(state => {
        let copy = state.tagState;
        copy[index] = false;
        return {tagState: copy}
      });
    }
  }

  /**
   * 获取选中的标签 index，如果无选中的标签则返回 -1。
   *
   * <i>仅限单标签模式</i>
   * */
  getSelectedIndex() {
    if (!this.props.singleChoiceMode) return -1;

    let selected = this.state.tagState.map((item, index) => {
      if (item) return index + 1;
      else return -1;
    }).filter(item => item > -1);

    return Number(selected) - 1;
  }

}

export class Tag extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    onSelectStateChange: PropTypes.func,
    noUnselect: PropTypes.bool, // 是否允许选中后解选
  };

  static defaultProps = {
    text: '标签文字',
    onSelectStateChange: () => console.log('Tag 未绑定点击事件'),
    noUnselect: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
  }

  render() {
    return <TouchableWithoutFeedback onPress={() => this.setState(state => {
      this.props.onSelectStateChange();
      if (this.props.noUnselect) {
        return {selected: true};
      }
      return {selected: !state.selected};
    })}>
      <View style={[styles.background].concat(this.state.selected ? styles.selectedBackground : null)}>
        <Text style={[styles.textStyle].concat(this.state.selected ? styles.selectedTextStyle : null)}>
          {this.props.text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  }

  /**
   * 取消已选中的状态
   * */
  clearState() {
    this.state.selected && this.setState({selected: false});
  }

  /**
   * 设为选中状态
   * */
  setSelected() {
    !this.state.selected && this.setState({selected: true});
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FCDB29',
  },
  selectedBackground: {
    backgroundColor: '#FCDB29',
  },
  textStyle: {
    color: '#666',
    fontSize: 13,
  },
  selectedTextStyle: {
    color: '#333',
  },

  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});