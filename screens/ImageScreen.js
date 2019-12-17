import React from 'react';
import { StyleSheet, View, Text, Image, Linking, Dimensions } from 'react-native';
import { SingleImage } from 'react-native-zoom-lightbox';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ImageScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screenWidth: Dimensions.get("window").width,
    }
  }

  render() {
    return (
      <View style={styles.container} >
        {/* <Image style={{ width: this.state.screenWidth, height: 200, position: 'absolute', top: -50, resizeMode: 'stretch' }} source={require('../assets/images/background.jpg')} /> */}
        <Image style={{ ...StyleSheet.absoluteFill }} source={require('../assets/images/background.jpg')} />

        <Text style={styles.title}>{this.props.navigation.state.params.title}</Text>
        <SingleImage uri={this.props.navigation.state.params.img} style={[{ width: this.state.screenWidth }, styles.image]} />
        <View style={{}}>
          <Text style={styles.published}>Published: {this.props.navigation.state.params.year}.{this.props.navigation.state.params.month}.{this.props.navigation.state.params.day}</Text>
          <Text style={styles.description}>{this.props.navigation.state.params.alt}</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => { Linking.openURL('https://xkcd.com/about/') }}>
            <Image style={styles.about} source={require('../assets/images/about.png')} />
            <Text style={{ textAlign: 'center', color: 'white' }}>A webcomic of romance, sarcasm, math, and language.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

ImageScreen.navigationOptions = {
  headerTitle: 'XKCD',
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    flexGrow: 1,
    alignSelf: 'center',
    fontSize: 35,
    marginLeft: -30
  },
  headerStyle: {
    backgroundColor: "#96A8C8",
    elevation: 50
  }
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 100 + '%',
    height: 100 + '%',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 120,
    color: '#fff'
  },
  image: {
    flexDirection: 'row',
    height: 300,
    marginTop: 0,
    resizeMode: 'contain',
  },

  description: {
    paddingHorizontal: 20,
    marginTop: 0,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 5,
    color: '#fff',
    fontSize: 20

  },
  footer: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-end'
  },
  about: {
    alignSelf: 'center'
  },
  published: {
    textAlign: 'left',
    paddingHorizontal: 5,
    fontSize: 12
  }
});
