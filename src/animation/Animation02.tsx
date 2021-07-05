import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';

const Animation02 = (): JSX.Element => {
  const [redSquare, setRedSquare] = useState(new Animated.Value(1));
  const [greenSquare, setGreenSquare] = useState(
    new Animated.ValueXY({x: 0, y: 0}),
  );
  const [blueSquare, setBlueSquare] = useState(
    new Animated.ValueXY({x: 0, y: 0}),
  );

  const runAnimation = () => {
    Animated.sequence([
      Animated.timing(redSquare, {
        toValue: 0,
        useNativeDriver: false,
      }),
      Animated.spring(greenSquare, {
        toValue: {x: 200, y: 0},
        useNativeDriver: false,
      }),
      Animated.spring(blueSquare, {
        toValue: {x: 200, y: 200},
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <View>
      <Animated.View
        style={{
          opacity: redSquare,
        }}>
        <View style={styles.redSquare}></View>
      </Animated.View>
      <Animated.View style={greenSquare.getLayout()}>
        <View style={styles.greenSquare}></View>
      </Animated.View>
      <Animated.View style={blueSquare.getLayout()}>
        <View style={styles.blueSquare}></View>
      </Animated.View>
      <Button title="start" onPress={runAnimation} />
    </View>
  );
};

const styles = StyleSheet.create({
  redSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  greenSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  blueSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default Animation02;
