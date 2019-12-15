import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  
} from 'react-native';

import axios from 'axios'
import ComicItem from '../components/ComicItem'

export default class HomeScreen extends React.Component {
  _isMounted = false;
  constructor(props) {
    super()
    this.state = {
      comics: [],
      loading: true
    }
    this.handleClick = this.handleClick.bind(this)

  }

  async componentDidMount() {
    this._isMounted = true;
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
    console.log('data length is now', data.length)
    return data
  }

  handleClick(img) {
    this.props.navigation.push('Links',img)
    console.log(" IMG IN HANDLE CLICK", img)
  }


  render() {
    const comicItems = this.state.loading ? <ActivityIndicator size="large" color="#00ff00" /> : this.state.comics.map(item => <ComicItem key={item.num} item={item} handleClick={this.handleClick}/>);

    return (
      <ScrollView style={styles.container}>
        {/* <View style={styles.welcomeContainer}>
          <Image source={require('../assets/images/xkcd_logo.png')} style={styles.welcomeImage} />
        </View> */}

        <View  contentContainerStyle={styles.contentContainer}>
          {comicItems}
        </View>
      </ScrollView>
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
  },

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
    textAlign: 'center'
  }

});
