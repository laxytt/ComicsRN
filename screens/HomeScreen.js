import React from 'react';
import { ScrollView, StyleSheet, View, ActivityIndicator, RefreshControl, Image, Dimensions } from 'react-native';
import axios from 'axios'
import ComicItem from '../components/ComicItem'

class HomeScreen extends React.Component {
  constructor(props) {
    super()
    this.state = {
      comics: [],
      loading: true,
      refreshing: false,
      screenWidth: Dimensions.get("screen").width,
      screenHeight: Dimensions.get('screen').height
    }
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    axios.get('http://xkcd.com/info.0.json')
      .then(res => this.get8Comics(res.data.num))
      .then(res => this.setState({ comics: res, loading: false }))
  }

  get8Comics = async (lastNumber) => {
    let data = []
    for (let i = 0; i < 8; i++) {
      console.log('getting comic', i + 1)
      let comic = await axios.get(`http://xkcd.com/${lastNumber - i}/info.0.json`)
        .then(res => res.data)
      console.log(comic)
      data.push(comic)
    }
    return data
  }

  handleClick(img) {
    this.props.navigation.push('Image', img)
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.componentDidMount().then(() => {
      this.setState({ refreshing: false });
    });
  }

  render() {
    const comicItems = this.state.loading ? <ActivityIndicator size="large" color="#00ff00" /> : this.state.comics.map(item => <ComicItem key={item.num} item={item} handleClick={this.handleClick} />);
    return (
      <View style={styles.container}>
        <Image style={{ width: this.state.screenWidth, height: this.state.screenHeight, position: 'absolute', resizeMode: 'cover' }} source={require('../assets/images/background.jpg')} />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />
          }>
          <View contentContainerStyle={styles.contentContainer}>
            {comicItems}
          </View>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  headerTitle: 'XKCD',
  headerTitleStyle: {
    textAlign: 'center',
    flexGrow: 1,
    alignSelf: 'center',
    fontSize: 35,
    fontFamily: 'monospace',
    fontWeight: 'bold'
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#E6E6EA',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 5,
    paddingTop: 20,
    borderBottomWidth: 0.8,
    borderBottomColor: 'gray'
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3
  },
  headerStyle: {
    textAlign: 'center',
  }
});

export default HomeScreen
