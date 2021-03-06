import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animation from './src/animation/Animation';

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Animation />
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

export default App;
