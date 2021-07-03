import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import ImagePicker, {
  ImagePickerResponse,
  CameraOptions,
  CameraType,
} from 'react-native-image-picker';

const App = (): JSX.Element => {
  const [avatar, setAvatar] = useState('');

  const addImage = () => {
    ImagePicker.launchCamera({}, (response: ImagePickerResponse) => {
      setAvatar(response.uri);
    });
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <Button title="Add an Image" onPress={() => addImage()} />
    </View>
  );
};

type CameraTypes = {
  options: CameraOptions;
  callback(): ImagePickerResponse;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26',
  },
  avatar: {
    width: '100%',
    height: 400,
  },
});

export default App;
