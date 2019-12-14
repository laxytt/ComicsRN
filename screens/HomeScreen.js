import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

import axios from 'axios'
import ComicItem from '../components/ComicItem'
import { TouchableOpacity } from 'react-native-gesture-handler';
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
      .then(res => this.setState({comics:res, loading:false}))
      console.log("see the state in componendDidMount", this.state.comics)
}
  

  

get8Comics = async(lastNumber)=> {
  console.log("see the state function top", this.state.comics)

    let data = []
    for (let i = 0; i < 8; i++) {
      console.log('getting comic', i + 1)
      let comic = await axios.get(`http://xkcd.com/${lastNumber - i}/info.0.json`)
      .then(res => res.data)
      console.log(comic)
      data.push(comic)
    }
    console.log('data length is now', data.length)
    console.log("see the state function bottom", this.state.comics)
   
    return data
  }
  
  handleClick(id) {
  }

  render() {
    const comicItems =this.state.loading ? <ActivityIndicator size="large" color="#00ff00"/> : this.state.comics.map(item => <ComicItem key={item.num} item={item} />)

    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
            <Image source={require('../assets/images/xkcd_logo.png')} style={styles.welcomeImage} />
          </View>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('Links')}>
            {comicItems}
          </TouchableOpacity>
          
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
  
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
    marginTop: 10,
    paddingTop:20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
