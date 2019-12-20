import React from 'react';
import { ScrollView, StyleSheet, View, ActivityIndicator, RefreshControl, Image } from 'react-native';
import axios from 'axios'
import ComicItem from '../components/ComicItem'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comics: [],
      loading: true,
      refreshing: false,
    }
  }

  async componentDidMount() {
    axios.get('http://xkcd.com/info.0.json')
      .then(res => this.get8Comics(res.data.num))
      .then(res => this.setState({ comics: res, loading: false }))
  }

  get8Comics = async (lastNumber) => {
    let data = []
    for (let i = 0; i < 8; i++) {
      let comic = await axios.get(`http://xkcd.com/${lastNumber - i}/info.0.json`)
        .then(res => res.data)
      data.push(comic)
    }
    return data
  }

  handleClick = (img) => {
    this.props.navigation.push('Image', img)
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.componentDidMount().then(() => {
      this.setState({ refreshing: false });
    });
  }

  render() {
    const backgroundImage = '../assets/images/background.jpg'
    const comicItems = this.state.loading ?
      <ActivityIndicator size="large" color="#00ff00" /> :
      this.state.comics.map(item =>
        <ComicItem key={item.num} item={item} handleClick={this.handleClick} />);
    return (
      <View style={styles.container}>
        <Image style={{ ...StyleSheet.absoluteFill }} source={require(backgroundImage)} />
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
  headerStyle: {
    backgroundColor: "#96A8C8",
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
