import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

interface Props {
  onAddRandom(): void;
}

const Generator = (props: Props) => {
  const {onAddRandom} = props;

  return (
    <View style={styles.generator}>
      <Button title="Add Number" onPress={() => onAddRandom()} />
    </View>
  );
};

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#782347',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Generator;
