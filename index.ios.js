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


var Head = React.createClass({
    render: function(){
      return (
        <View style={styles.hd}>
            <Text>{this.props.children}</Text>
          </View>
        )
    }
});

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
  
  renderLoadingView: function(){
      return <View style={styles.wrap}>
          <Text>
              Loading...
          </Text>
      </View>
  },
  renderList: function(music){
      return (

        <View style={styles.wrap}>
          <Image
            source={{uri: music.picture}}
            style={styles.picture}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{music.title}</Text>
            <Text style={styles.artist}>{music.artist}</Text>
          </View>
        </View>
      );
  },

  render: function() {

    if (!this.state.loaded) 
        return this.renderLoadingView();
    return (
        <View style={styles.container}>
          <Head>随机推荐</Head>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderList}
            style={styles.listView} />
        </View>
      );
  }

});

var styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#fff',
  },
  hd: {
    marginLeft: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  listView: {
    textAlign: 'center',
    margin: 10,
  },
  picture: {
    borderRadius: 53,
    width: 53,
    height: 53,
  },
  rightContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1'
  },
  title: {
    fontSize: 14,
    marginBottom: 2,
  },
  artist: {
    fontSize: 12,
  }
});

AppRegistry.registerComponent('miumiu', () => Miumiu);
