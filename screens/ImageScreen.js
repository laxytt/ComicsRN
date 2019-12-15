import React from 'react';
import { StyleSheet, View, Text, Image, Linking, Button, Dimensions } from 'react-native';
import { SingleImage } from 'react-native-zoom-lightbox';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ImageScreen extends React.Component {

  constructor(props) {
    super()
    this.state = {
      isRotated: false,
      screenWidth: Dimensions.get("window").width,
      screenHeight: Dimensions.get('screen').height

    }
    console.log(this.state.screenWidth)

  }
  handleRotate() {
    this.setState({ isRotated: true })
  }

  render() {
    return (

      <View style={styles.container} >
        <Image style={{ width: this.state.screenWidth, height: 500, position: 'absolute', top: -50, resizeMode: 'cover' }} source={require('../assets/images/background.jpg')} />

        <Text style={styles.title}>{this.props.navigation.state.params.title}</Text>
        <SingleImage
          uri={this.props.navigation.state.params.img}
          // style={styles.image} />
          style={[{ width: this.state.screenWidth }, styles.image]} />
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.published}>Published: {this.props.navigation.state.params.year}.{this.props.navigation.state.params.month}.{this.props.navigation.state.params.day}</Text>
          <Text style={styles.description}>{this.props.navigation.state.params.alt}</Text>
        </View>


        <View style={styles.footer}>
          <TouchableOpacity onPress={() => { Linking.openURL('https://google.com') }}>
            <Image
              style={[{ width: this.state.screenWidth }, styles.logo]}
              source={require('../assets/images/xkcd_logo.png')}
            />
            <Text style={{ textAlign: 'center' }}>A webcomic of romance, sarcasm, math, and language.</Text>
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
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    width: 100 + '%',
    height: 100 + '%',
    // alignItems:'center'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 120,
  },
  image: {
    flexDirection: 'row',
    height: 450,
    marginTop: 0,
    resizeMode: 'stretch',
  },
  logo: {
    height: 50,
    resizeMode: 'stretch',
    bottom: 0,
    alignItems: "center",
    alignContent: 'center'

  },
  description: {
    paddingHorizontal: 5,
    marginTop: 0,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 5,

    // borderTopWidth: StyleSheet.hairlineWidth

  },
  footer: {
    bottom: 0,
    position: 'absolute',
    alignItems: 'center'
  },
  published: {
    textAlign: 'left',
    paddingHorizontal: 5,
    fontSize: 12
  }
});
