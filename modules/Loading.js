var React = require('react-native');
var {
  StyleSheet,
  ActivityIndicatorIOS,
} = React;

var styles = StyleSheet.create({
  centering: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

var Loading = React.createClass({
  render: function(){
      return <ActivityIndicatorIOS
        animating={true}
        style={[styles.centering, {height: 80}]}
        size="large"
      />
  }
});

module.exports = Loading;