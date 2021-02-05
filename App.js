import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Pressable } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  const [multiClickTimer, setMultiClickTimer] = useState();
  const [multiClickCount, setMultiClickCount] = useState(1);
  const [timerRunning, setTimerRunning] = useState(false);
  const [testText, setTestText] = useState();

  const onTimeUp = () => {
    setTestText("Time up: multiclicks " + multiClickCount);
    setCount(count => count + 1);
    setMultiClickCount(1);
    setTimerRunning(false);
  }

  const onPress = (event) => {
    console.log("Button press!");
    clearTimeout(multiClickTimer);
    console.log("mcc before update: ", multiClickCount)
    setMultiClickCount(multiClickCount => multiClickCount + 1);
    setMultiClickTimer(setTimeout(onTimeUp, 500));
    console.log(multiClickCount);
  }
  const onLongPress = (event) => {
    setCount(prevCount => prevCount + 5);
  }

  const focusButton = React.createRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
        <Text>{testText}</Text>
      </View>
      <TouchableOpacity
        style={styles.firstButton}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        ref={focusButton}
      >
        <Text>Second Press</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  firstButton: {
    position: "absolute",
    top: -40,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default App;