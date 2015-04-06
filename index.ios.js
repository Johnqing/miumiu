'use strict';

var React = require('react-native');
var {
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
} = React;


var Content = require('./modules/Content');

// 启动
var Miumiu = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: '随意听听',
          component: Content,
        }}
      />
      );
  }
});
// 公共样式
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

AppRegistry.registerComponent('miumiu', () => Miumiu);
