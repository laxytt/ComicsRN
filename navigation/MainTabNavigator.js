import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import ImageScreen from '../screens/ImageScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
    }
  },
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Image: ImageScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarVisible:false,
  title: "XKCD",
  headerTitleStyle: {
    textAlign: 'center',
    backgroundColor: 'red',
    flexGrow: 1,
    alignSelf: 'center',
  },
};

HomeStack.path = '';

const ImageStack = createStackNavigator(
  {
    Image: ImageScreen,
  },
  config
);

ImageStack.navigationOptions = {
  tabBarVisible: false
};

ImageStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ImageStack,
});

tabNavigator.path = '';

export default tabNavigator;
