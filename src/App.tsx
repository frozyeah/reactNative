import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import ModelPanel from './components/ModelPanel';
import Mode from './components/Mode';
import Power from './components/Power';
import Map from './components/Map';
import Planner from './components/Planner';
import Settings from './components/Settings';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

const MainScreen = ({navigation}:any) => {
  return(
    <View style={styles.container}>
      <Header text={styles.text} nav={navigation} />
      <ModelPanel text={styles.text} />
      <Mode text={styles.text} />
      <Power text={styles.text} />
      <Map text={styles.text} />
      <Planner text={styles.text} />
    </View>
  )
}

const App = () => {
  let [fontsLoaded] = useFonts({
    'Gilroy-Bold': require('../assets/fonts/Gilroy-Light.ttf'),
  });
  if(!fontsLoaded){
    return(
    <View style={[styles.container, styles.loader]}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
    );
  } else {
    return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
          name="MainScreen"
          component={MainScreen}
      />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
    </NavigationContainer>
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