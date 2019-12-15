import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'blue',
      },
    }
  },
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Links:LinksScreen,
  },
  config

);

HomeStack.navigationOptions = {
  tabBarVisible:false,
  title:"XKCD",
  headerTitleStyle: {
    textAlign: 'center',
    backgroundColor: 'red',
    flexGrow:1,
    alignSelf:'center',
},
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarVisible:false
};

LinksStack.path = '';



const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,

},);

tabNavigator.path = '';

export default tabNavigator;
