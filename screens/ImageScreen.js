import React from 'react';
import { StyleSheet, View, Text, Image, Linking, Button } from 'react-native';
import { SingleImage } from 'react-native-zoom-lightbox';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ImageScreen extends React.Component {

  constructor(props) {
    super()
    this.state = {
      isRotated: false
    }
    console.log(props)

  }
  handleRotate() {
    this.setState({ isRotated: true })
  }

  render() {
    return (

      <View style={styles.container} >
        {/* <Text></Text>
        <Image
          style={styles.image}
          source={{ uri: this.props.navigation.state.params.img }}
        /> */}

        <Text style={styles.title}>{this.props.navigation.state.params.title}</Text>
        <SingleImage
          uri={this.props.navigation.state.params.img}
          style={{ width: 350, height: 350, resizeMode: 'contain' }} />
        <Text style={styles.published}>Published: {this.props.navigation.state.params.year}.{this.props.navigation.state.params.month}.{this.props.navigation.state.params.day}</Text>


        <View style={styles.footer}>
          <Text style={{}}>A webcomic of romance, sarcasm, math, and language.</Text>
          <TouchableOpacity onPress={() => { Linking.openURL('https://google.com') }}>
            <Image
              style={styles.logo}
              source={require('../assets/images/xkcd_logo.png')}
            />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

ImageScreen.navigationOptions = {
  headerTitle: 'XKCD',
  headerTitleStyle: {
    fontWeight:'bold',
    textAlign: 'center',
    flexGrow: 1,
    alignSelf: 'center',
    fontSize: 35,
    marginLeft: -30
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain'
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',

  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
    fontWeight:'bold'
  },
  published: {
  },
  footer: {
    bottom: 0,
    position: 'absolute',
    alignItems:'center'
  }
});
