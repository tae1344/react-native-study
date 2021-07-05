import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animation01 from './Animation01';
import Animation02 from './Animation02';

const Animation = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/*<Animation01 />*/}
      <Animation02 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26',
  },
});

export default Animation;
