import React from 'react';
import { StyleSheet, View } from 'react-native';
import UniversalSlider from "./UniversalSlider";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  return (
  <LinearGradient colors={["violet", "darkcyan"]} style={styles.container}>
    <UniversalSlider height={400} width={42} min={42} max={84} step={1} style={styles.slider}/>
  </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:"blue",
    flex: 1,
  },
  slider: {
    marginTop:"50%",
    alignSelf: "center"
  }
});

export default App;