var React = require('react-native');
var {
    ListView,
    StyleSheet,
    Text,
    View,
} = React;

var styles = StyleSheet.create({
    hd: {
        marginLeft: 10,
        fontSize: 20,
        textAlign: 'center'
    },
    wrap: {
        marginTop: 80,
        backgroundColor: '#fff'
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#fff',
    }
});


var REQUEST_LIST_URL = 'http://www.douban.com/j/app/radio/channels';
var REQUEST_CHANNEL_URL = 'http://www.douban.com/j/app/radio/people?app_name=radio_desktop_win&version=100&channel=2&type=n';

// 模块集合
var Loading = require('./loading');
var Head = require('./head');
var List = require('./list');
var Detail = require('./detail');


var Body = React.createClass({
    fetchList () {
        fetch(REQUEST_CHANNEL_URL)
            .then((response) => response.json())
            .then((res) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(res.song),
                    loaded: true
                });
            })
            .done();
    },

    getInitialState () {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        }
    },
    componentDidMount () {
        this.fetchList();
    },
    onDetail (music) {
        this.props.navigator.push({
            title: music.title,
            component: Detail,
            passProps: {music}
        });
    },
    renderRow (music) {
        return (
            <List
                onSelect={() => this.onDetail(music)}
                music={music}
                />
        );
    },
    render () {
        if (!this.state.loaded)
            return <Loading />;
        return (
            <View style={styles.wrap}>
                <Head style={styles.hd}>随机推荐</Head>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    style={styles.listView}
                />
            </View>
        )
    }
});

module.exports = Body;