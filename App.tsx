import 'react-native-gesture-handler';
import React from 'react';
import {Linking, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './src/Home';
import User from './src/User';
import UserDrawer from './src/UserDrawer';
import HomeDrawer from './src/HomeDrawer';
import CustomDarwer from './src/CustomDrawer';

export type RootStackParamList = {
  Home: undefined;
  User: {
    userId: number;
    userName: string;
  };
  CustomDrawer: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const App = (): JSX.Element => {
  // const CustomDrawerContent = (props: any): JSX.Element => {
  //   return (
  //     <DrawerContentScrollView {...props}>
  //       <DrawerItemList {...props} />
  //       <DrawerItem
  //         label="Help"
  //         onPress={() => Linking.openURL('http://google.com')}
  //       />
  //       <DrawerItem label="Info" onPress={() => alert('Info window')} />
  //     </DrawerContentScrollView>
  //   );
  // };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerType="front"
        drawerPosition="right"
        drawerStyle={{backgroundColor: '#c6cbef', width: 200}}
        drawerContentOptions={{
          activeTintColor: 'red',
          activeBackgroundColor: 'skyblue',
        }}
        drawerContent={props => <CustomDarwer {...props} />}>
        <Drawer.Screen name="Home" component={HomeDrawer} />
        <Drawer.Screen name="User" component={UserDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{
    //       title: 'Home Screen',
    //       headerStyle: {backgroundColor: 'pink'},
    //     }}>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen
    //       name="User"
    //       component={User}
    //       initialParams={{
    //         userId: 500,
    //         userName: '12312123123',
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
