import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeView from './src/navigations/HomeView';
import ProfileView from './src/navigations/ProfileView';
import SettingView from './src/navigations/SettingView';
import DrawerComponent from './src/navigations/DrawerComponent';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Drawer: undefined;
  Main: undefined;
  Setting: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const App = (): JSX.Element => {
  const TabScreen = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeBackgroundColor: 'skyblue',
          activeTintColor: 'blue',
          inactiveTintColor: '#fff',
          style: {backgroundColor: '#c6cbef'},
          labelPosition: 'below-icon',
        }}>
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Setting" component={SettingView} />
      </Tab.Navigator>
    );
  };

  const MainScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Profile" component={ProfileView} />
      </Stack.Navigator>
    );
  };

  const DrawerScreen = (): JSX.Element => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
          activeBackgroundColor: 'skyblue',
          activeTintColor: 'blue',
          inactiveTintColor: '#fff',
          style: {backgroundColor: '#c6cbef'},
        }}>
        <Drawer.Screen name="Home" component={TabScreen} />
        <Drawer.Screen name="Setting" component={SettingView} />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <DrawerScreen />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
