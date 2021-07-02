import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const HomeForTab = ({navigation}: Props): JSX.Element => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home page</Text>
      <Button
        title="Go to User Screen"
        onPress={() => {
          navigation.navigate('User', {
            userId: 100,
            userName: 'asdasd',
          });
        }}
      />
    </View>
  );
};

export default HomeForTab;
