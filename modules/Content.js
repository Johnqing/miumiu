var React = require('react-native');
var {
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

var styles = StyleSheet.create({
  hd: {
    marginLeft: 10,
    fontSize: 20,
    textAlign: 'center',
  },
});

var REQUEST_LIST_URL = 'http://www.douban.com/j/app/radio/channels';
var REQUEST_CHANNEL_URL = 'http://douban.fm/j/mine/playlist?channel=2';

// 模块集合
var Loading = require('./Loading');
var Head = require('./Head');
var MusicCell = require('./MusicCell');
var MusicScreen = require('./MusicScreen');


var Content = React.createClass({
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
    selectMusic: function(music: Object){
      this.props.navigator.push({
        title: music.title,
        component: MusicScreen,
        passProps: {music},
      });
    },
    renderRow: function(music){
        return (
          <MusicCell 
          onSelect={() => this.selectMusic(music)}
          music={music}
          />
        );
    },
    render: function(){
      if (!this.state.loaded) 
        return <Loading />;
      return (
        <View>
          <Head>随机推荐</Head>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            style={styles.listView} 
          />
        </View>
        )
    }
});

module.exports = Content;