import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const HomeDrawer = ({navigation}: Props): JSX.Element => {
  return (
    <View style={styles.view}>
      <Text>Home page</Text>
      <Button
        title="To User Screen"
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

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeDrawer;
