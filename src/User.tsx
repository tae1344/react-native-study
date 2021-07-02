import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'User'>;
  route: RouteProp<RootStackParamList, 'User'>;
}

const User = ({navigation, route}: Props) => {
  const {params} = route;
  const userId = params ? params.userId : null;
  const userName = params ? params.userName : null;
  return (
    <View>
      <Text>User page</Text>
      <Button
        title="To Home Screen"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Text>User Id: {JSON.stringify(userId)}</Text>
      <Text>User Name: {JSON.stringify(userName)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default User;
