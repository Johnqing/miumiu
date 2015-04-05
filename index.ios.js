'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Image,
  ListView,
  Text,
  View,
} = React;


var REQUEST_LIST_URL = 'http://www.douban.com/j/app/radio/channels';
var REQUEST_CHANNEL_URL = 'http://douban.fm/j/mine/playlist?channel=2';

// 模块集合
var Loading = require('./modules/Loading');
var Head = require('./modules/Head');
var List = require('./modules/List');

// 启动
var Miumiu = React.createClass({
  
  fetchList: function(){
      fetch(REQUEST_CHANNEL_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.song),
            loaded: true
        });
      })
      .done();
  },

  getInitialState: function(){
      return {
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        loaded: false
      }
  },
  componentDidMount: function(){
      this.fetchList();
  },
  
  render: function() {

    if (!this.state.loaded) 
        return <Loading />;
    return (
        <View style={styles.container}>
          <Head>随机推荐</Head>
          <List dataSource={this.state.dataSource} />
        </View>
      );
  }

});
// 公共样式
var styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#fff',
  },
});

AppRegistry.registerComponent('miumiu', () => Miumiu);
