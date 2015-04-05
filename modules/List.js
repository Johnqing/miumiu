var React = require('react-native');
var {
  StyleSheet,
  Image,
  Text,
  ListView,
  View,
} = React;

var styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  listView: {
    textAlign: 'center',
    margin: 10,
  },
  picture: {
    borderRadius: 53,
    width: 53,
    height: 53,
  },
  rightContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1'
  },
  title: {
    fontSize: 14,
    marginBottom: 2,
  },
  artist: {
    fontSize: 12,
  }
});




var List = React.createClass({
    renderList: function(music){
        return (

          <View style={styles.wrap}>
            <Image
              source={{uri: music.picture}}
              style={styles.picture}
            />
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{music.title}</Text>
              <Text style={styles.artist}>{music.artist}</Text>
            </View>
          </View>
        );
    },
    render: function(){
        return <ListView
            dataSource={this.props.dataSource}
            renderRow={this.renderList}
            style={styles.listView} />
    }
})
module.exports = List;