import React from 'react';
import { StyleSheet, View, Text, Image, Linking } from 'react-native';
import { SingleImage } from 'react-native-zoom-lightbox';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ImageScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { title, year, month, day, img, alt } = this.props.navigation.state.params;
    return (
      <View style={styles.container} >
        <Image style={{ ...StyleSheet.absoluteFill }} source={require('../assets/images/background.jpg')} />
        <Text style={styles.title}>{title}</Text>
        <SingleImage uri={img} style={styles.image} />
        <View style={{}}>
          <Text style={styles.published}>Published: {year}.{month}.{day}</Text>
          <Text style={styles.description}>{alt}</Text>
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
    fontSize: 12,
    marginLeft: 15,
    color: 'white'
  }
});
