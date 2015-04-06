var React = require('react-native');
var {
  Image,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  View,
} = React;

var styles = StyleSheet.create({
	contentContainer: {
	},
	musicTitle: {
		flex: 1,
		fontSize: 16,
		fontWeight: '500',
	},
	mainSection: {
		padding: 10
	},
	detailsImage: {
		width: 400,
		height: 200,
		backgroundColor: '#fff',
	},
});

var MusicScreen = React.createClass({
	render: function(){
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
		        </View>
	      </ScrollView>
		);
	}
});

module.exports = MusicScreen;
