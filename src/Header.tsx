import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  name: string;
}

const Header = (props: Props) => {
  const {name} = props;
  return (
    <TouchableOpacity
      style={styles.header}
      onPress={() => alert('hello world')}>
      <View>
        <Text>Hello, {name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginBottom: 10,
  },
});

export default Header;
