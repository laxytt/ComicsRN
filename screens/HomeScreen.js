import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

import ComicItem from '../components/ComicItem'
export default class HomeScreen extends React.Component {
  _isMounted = false;
  constructor(props) {
    super()
    this.state = {
      comics: [],
      loading: false
    }
    this.handleClick = this.handleClick.bind(this)

  }

  async componentDidMount() {
    this._isMounted = true;
    this.getData();
  }


  getData = () => {
    let lastComic= '';
    let newestComic = 0;
    // if(lastComic > lastComic -8){

    // }
    this.setState({ loading: true })
     fetch(`https://xkcd.com/${lastComic}/info.0.json`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage =
            '${response.status(${response.statusText})',
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log("This is json log", data);
        if (this._isMounted) {
          this.setState({
            comics: data,
            loading: false
          })
          newestComic = data.num
          console.log("last comic num iss:", newestComic)
        }

      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  handleClick(id) {
  }

  render() {
    const comicItems = this.state.loading ? <ActivityIndicator size="large" color="#00ff00" /> : <ComicItem item={this.state.comics} handleClick={this.handleClick} />

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image source={require('../assets/images/xkcd_logo.png')} style={styles.welcomeImage} />
          </View>
          {comicItems}
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
    marginBottom: 20,
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
