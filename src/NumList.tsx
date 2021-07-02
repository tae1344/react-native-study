import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  num: Array<number>;
  onDeleteRandom(index: number): void;
}

const NumList = (props: Props) => {
  const {num, onDeleteRandom} = props;

  return num.map((item: number, index: number) => (
    <TouchableOpacity
      style={styles.generator}
      key={index}
      onPress={() => onDeleteRandom(index)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  ));
};

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  },
});

export default NumList;
