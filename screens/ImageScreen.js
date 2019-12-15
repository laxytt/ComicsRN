import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

export default class ImageScreen extends React.Component {
  constructor(props) {
    super()
    this.state = {
      isRotated: false
    }

  }
  handleRotate() {
    this.setState({ isRotated: true })
  }

  render() {
    return (
      <View style={styles.container} >
        <Text></Text>
        <Image
          style={styles.image}
          source={{ uri: this.props.navigation.state.params }}
        />
        
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: 100 + '%',
    height: 100 + '%',
    resizeMode: 'contain',
  }
});
