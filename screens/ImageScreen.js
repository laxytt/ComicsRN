import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { SingleImage } from 'react-native-zoom-lightbox';

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

        <Image
          style={styles.logo}
          source={require('../assets/images/xkcd_logo.png')}
        />
  <Text>Published: {this.props.navigation.state.params.year}.{this.props.navigation.state.params.month}</Text>
      </View>
    );
  }
}

ImageScreen.navigationOptions = {
  headerTitle: 'XKCD',
  headerTitleStyle: {
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
    bottom:0, 
    position:'absolute'
  },
  title: {
    fontSize: 40
  }
});
