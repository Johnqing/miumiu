var React = require('react-native');
var Video = require('react-native-video');
var {
    Image,
    PixelRatio,
    TouchableOpacity,
    StyleSheet,
    Text,
    View
    } = React;

var styles = StyleSheet.create({
    backgroundVideo: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: 'rgba(0, 0, 0)',
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    textcontainer: {
        paddingLeft: 10,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        fontWeight: 'bold',
        color: '#000'
    },
    start: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderTopWidth: 10,
        borderRightWidth: 0,
        borderBottomWidth: 10,
        borderLeftWidth: 20,
        borderLeftColor: '#fff',
    },
    paused: {
        width: 20,
        height: 20,
        backgroundColor: '#fff'
    }
});

var Player = React.createClass({
    loadStart() {

    },

    onEnd() {
    },

    setDuration() {
    },

    videoError() {
    },

    getInitialState() {
        return {
            playing: true
        }
    },

    play() {
        this.setState({
            playing: !this.state.playing
        });
    },

    renderVideo() {
        return (
            <Video source={{uri: this.props.url}} // Can be a URL or a local file.
                   rate={1.0}                   // 0 is paused, 1 is normal.
                   volume={1.0}                 // 0 is muted, 1 is normal.
                   muted={false}                // Mutes the audio entirely.
                   paused={!this.state.playing}               // Pauses playback entirely.
                   resizeMode="contain"           // Fill the whole screen at aspect ratio.
                   repeat={false}                // Repeat forever.
                   onLoadStart={this.loadStart} // Callback when video starts to load
                   onLoad={this.setDuration}    // Callback when video loads
                   onProgress={this.setTime}    // Callback every ~250ms with currentTime
                   onEnd={this.onEnd}           // Callback when playback finishes
                   onError={this.videoError}    // Callback when video cannot be loaded
                />
        )
    },

    render() {
        return (
            <View>
                <View style={styles.backgroundVideo}>
                    <View style={[styles.row, {padding: 5}]}>
                        <TouchableOpacity style={this.state.playing ? styles.paused : styles.start} onPress={this.play}/>
                    </View>
                </View>
                {
                    this.props.url && this.renderVideo()
                }
            </View>
        );
    }
});

module.exports = Player;