var React = require('react-native');
var {
    StyleSheet,
    Text,
    View
} = React;

var styles = StyleSheet.create({
    hd: {
        marginLeft: 10,
        fontSize: 20,
        textAlign: 'center'
    }
});


var Head = React.createClass({
    render () {
        return (
            <View style={styles.hd}>
                <Text>{this.props.children}</Text>
            </View>
        )
    }
});

module.exports = Head;