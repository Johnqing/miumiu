'use strict';

var React = require('react-native');
var {
    NavigatorIOS,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    } = React;

var Body = require('./libs/body');

// 启动
var miumiu = React.createClass({
    render () {
        return (
            <NavigatorIOS
                ref="nav"
                style={styles.container}
                initialRoute={{
                  title: '随意听听',
                  component: Body
                }}
            />
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex:1
    }
});

AppRegistry.registerComponent('miumiu', () => miumiu);
