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
      .then(res => this.setState({ comics: res, loading: false }))
    console.log("see the state in componendDidMount", this.state.comics)
  }




  get8Comics = async (lastNumber) => {
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
    console.log("Clicked: ", id)
  }

  render() {
    const comicItems = this.state.loading ? <ActivityIndicator size="large" color="#00ff00" /> : this.state.comics.map(item => <ComicItem key={item.num} item={item} handleClick={this.handleClick} />)

    return (
      <View style={styles.container}>
        {/* <View style={styles.welcomeContainer}>
          <Image source={require('../assets/images/xkcd_logo.png')} style={styles.welcomeImage} />
        </View> */}
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          
            {comicItems}
      

        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  headerShown:true,
  headerTitle:'XKCD',
  headerLeft:null,
  headerTitleStyle:{
    textAlign:'center',
  },
  headerStyle:{
    textAlign:'center'
  },
  tabBarVisible:false,
  headerTitleStyle:{
   fontSize:40,
   textAlign:'center'
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
    borderBottomColor:'gray'

  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3
  },
  headerStyle:{
    textAlign:'center'
  }

});
