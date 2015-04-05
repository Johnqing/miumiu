var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});

var Loading = React.createClass({
  render: function(){
      return <View style={styles.wrap}>
          <Text>
              Loading...
          </Text>
      </View>
  }
});

module.exports = Loading;