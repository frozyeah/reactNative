import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Header from './Header';
import ModelPanel from './ModelPanel';
import Mode from './Mode';
import Power from './Power';
import Map from './Map';
import Planner from './Planner';
import { useFonts } from 'expo-font';

const App = () => {
  let [fontsLoaded] = useFonts({
    'Gilroy-Bold': require('../assets/fonts/Gilroy-Regular.ttf'),
  });
  if(!fontsLoaded){
    return(
    <View style={[styles.container, styles.loader]}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
    );
  } else {
    return (
    <View style={styles.container}>
      <Header text={styles.text}/>
      <ModelPanel text={styles.text} />
      <Mode text={styles.text} />
      <Power text={styles.text} />
      <Map text={styles.text} />
      <Planner text={styles.text} />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:"#000000",
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    fontFamily: "Gilroy-Bold"
  }
});

export default App;