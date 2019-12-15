import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

export default class LinksScreen extends React.Component {
  constructor(props) {
    super()
    this.state = {
      isRotated: false
    }

  }
  handleRotate() {
    this.setState({ isRotated: true })
  }

  // console.log("THISIS IMGGG", props.navigation.state.params)
  render() {
    return (
      <View style={styles.container} >
        <Image
          // style={{ width: 100 + '%', height: 100 + '%', resizeMode: 'contain' }}
          style={styles.image}
          source={{ uri: this.props.navigation.state.params }}
        />
        <Button
          title="Press me"
          color="#f194ff"
          onPress={this.handleRotate}
        />
      </View>
    );
  }
}


LinksScreen.navigationOptions = {
  // headerShown: true,
  headerTitle: 'XKCD',
  // headerLeft: null,
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
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#fff'
  },
  image: {
    width: 100 + '%',
    height: 100 + '%',
    resizeMode: 'contain',
    // width:100+'%',
    // height:100 +'%',
    // resizeMode:'contain',
    
  }
});
