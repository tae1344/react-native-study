import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';

const Animation01 = (): JSX.Element => {
  const [mySquare, setMySquare] = useState(new Animated.Value(1));

  const runAnimation = () => {
    Animated.timing(mySquare, {
      toValue: 0,
      duration: 2000,
      delay: 1500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View>
      <Animated.View
        style={{
          opacity: mySquare,
          transform: [
            {
              rotateX: mySquare.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['0deg', '180deg', '360deg'],
              }),
            },
            {
              translateX: mySquare.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [300, 150, 0],
              }),
            },
          ],
        }}>
        <View style={styles.square}></View>
      </Animated.View>
      <Animated.Text
        style={{
          fontSize: mySquare.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [40, 30, 20],
          }),
          color: mySquare.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['red', 'green', 'blue'],
          }),
        }}>
        <Text>Animation Effects</Text>
      </Animated.Text>
      <Button title="start" onPress={runAnimation} />
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
});

export default Animation01;
