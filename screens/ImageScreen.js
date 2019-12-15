import React from 'react';
import { StyleSheet, View, Text, Image, Linking, Button, Dimensions } from 'react-native';
import { SingleImage } from 'react-native-zoom-lightbox';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ImageScreen extends React.Component {

  constructor(props) {
    super()
    this.state = {
      isRotated: false,
      screenWidth: Dimensions.get("window").width
    }
    console.log(this.state.screenWidth)

  }
  handleRotate() {
    this.setState({ isRotated: true })
  }

  render() {
    return (

      <View style={styles.container} >
        <Text style={styles.title}>{this.props.navigation.state.params.title}</Text>
        <SingleImage
          uri={this.props.navigation.state.params.img}
          // style={styles.image} />
          style={[{ width: this.state.screenWidth }, styles.image]} />
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.description}>{this.props.navigation.state.params.alt}</Text>
          <Text style={styles.published}>Published: {this.props.navigation.state.params.year}.{this.props.navigation.state.params.month}.{this.props.navigation.state.params.day}</Text>
        </View>


        <View style={styles.footer}>
          <Text style={styles.description}>A webcomic of romance, sarcasm, math, and language.</Text>
          <TouchableOpacity onPress={() => { Linking.openURL('https://google.com') }}>
            <Image
              style={[{ width: this.state.screenWidth },styles.logo]}
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
    height: 70,
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
    borderTopWidth: StyleSheet.hairlineWidth

  },
  footer: {
    bottom: 0,
    position: 'absolute',
    alignItems: 'center'
  },
  published: {
    textAlign: 'left',
    paddingHorizontal: 5,

  }
});
