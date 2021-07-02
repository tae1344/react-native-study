import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = () => {
  const [textInput, setTextInput] = useState('aaaaaaa');

  const onChangeText = (event: any) => {
    setTextInput(event);
  };

  return (
    <View style={styles.mainView}>
      <TextInput
        value={textInput}
        style={styles.input}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});

export default Input;
