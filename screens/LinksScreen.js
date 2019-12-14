import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import FullScreenImage from "../components/FullScreenImage"

export default function LinksScreen() {
  return (
    <View>
      <Image></Image>
    </View>
  );
}

LinksScreen.navigationOptions = {
  headerShown:true,
  headerTitle:'xkcd',
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
 },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
