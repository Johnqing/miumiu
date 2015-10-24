var React = require('react-native');
var Video = require('../component/player');
var {
    Image,
    PixelRatio,
    ScrollView,
    StyleSheet,
    Text,
    View
} = React;

var styles = StyleSheet.create({
    contentContainer: {},
    musicTitle: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500'
    },
    mainSection: {
        padding: 10
    },
    detailsImage: {
        width: 400,
        height: 200,
        backgroundColor: '#fff'
    },
    backgroundVideo: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    }
});

var Detail = React.createClass({

    render () {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.wrap}>
                    <Image
                        source={{uri: this.props.music.picture}}
                        style={styles.detailsImage}
                        />
                    <View style={styles.mainSection}>
                        <Text style={styles.musicTitle}>{this.props.music.title}</Text>
                        <Text>company: {this.props.music.company}</Text>
                    </View>
                    <Video
                        url={this.props.music.url}
                        titile={this.props.music.title}
                    />
                </View>
            </ScrollView>
        );
    }
});

module.exports = Detail;
