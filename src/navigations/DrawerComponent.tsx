import 'react-native-gesture-handler';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Logo from '../assets/images/atom.png';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {CommonActions} from '@react-navigation/native';

import {RootStackParamList} from '../../App';

interface Props {
  navigation: DrawerNavigationProp<RootStackParamList, 'Drawer'>;
}

const CustomDarwer = (props: Props): JSX.Element => {
  const {navigation} = props;

  const navigateToScreen = (route: string) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {},
      }),
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.imageContainer}>
            <Image source={Logo} style={{width: 50, height: 50}} />
          </View>
          <Text style={styles.sectionHeading}>Section 1</Text>
          <View style={styles.navSection}>
            <Text
              style={styles.navItem}
              onPress={() => navigateToScreen('Home')}>
              Home
            </Text>
            <Text
              style={styles.navItem}
              onPress={() => navigateToScreen('Profile')}>
              User
            </Text>
            <Text
              style={styles.navItem}
              onPress={() => navigateToScreen('Setting')}>
              Setting
            </Text>
            <Text style={styles.navItem}>Info</Text>
          </View>
        </View>
      </ScrollView>
      <View style={{paddingLeft: 10, paddingBottom: 30}}>
        <Text>Copyright @ 2021.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 50,
  },
  sectionHeading: {
    color: '#fff',
    backgroundColor: '#ef9de4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: '600',
  },
  navSection: {
    backgroundColor: '#04b6ff',
  },
  navItem: {
    padding: 10,
    color: '#fff',
  },
});

export default CustomDarwer;
