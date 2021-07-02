import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Setting'>;
}

function SettingView(props: Props): JSX.Element {
  const {navigation} = props;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Setting View</Text>
      {/*<Button*/}
      {/*  title="Go to Profile"*/}
      {/*  onPress={() => navigation.navigate('Profile')}*/}
      {/*/>*/}
    </View>
  );
}

export default SettingView;
