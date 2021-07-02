import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
}

function ProfileView(props: Props): JSX.Element {
  const {navigation} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile View</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to Setting"
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
}

export default ProfileView;
