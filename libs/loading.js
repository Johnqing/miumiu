var React = require('react-native');
var {
    View,
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
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

var Loading = React.createClass({
    render (){
        return (
            <View style={styles.centering}>
                <ActivityIndicatorIOS
                    animating={true}
                    style={[styles.horizontal, {height: 80}]}
                    size="large"
                    />
            </View>
        );
    }
});

module.exports = Loading;