import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'User'>;
  route: RouteProp<RootStackParamList, 'User'>;
}

const UserDrawer = ({navigation, route}: Props) => {
  return (
    <View style={styles.view}>
      <Text>User page</Text>
      <Button
        title="To Home Screen"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserDrawer;
