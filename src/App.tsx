import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import ThemeManager, { useTheme } from './themes';

import Header from './components/Header';
import ModelPanel from './components/ModelPanel';
import Mode from './components/Mode';
import Power from './components/Power';
import Map from './components/Map';
import Planner from './components/Planner';
import Settings from './components/Settings';

import Info from "./components/Settings/Items/Info"
import ManageVacuum from "./components/Settings/Items/ManageVacuum"
import Reset from "./components/Settings/Items/Reset"
import Update from "./components/Settings/Items/Update"


const Stack = createStackNavigator();

const MainScreen = ({navigation}: any, theme: any) => {
  console.log(theme, styles.container);
  return(
    <View style={[styles.container, theme.homeContainer]}>
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
  const {theme, isDark} = useTheme();
  // const [isLoading, setLoading] = useState(true);
  let [fontsLoaded] = useFonts({
    'Gilroy': require('../assets/fonts/Gilroy-Medium.ttf'),
  });
  useEffect(()=>{
    console.log(theme);
  },[theme])
  if(!fontsLoaded){
    return(
    <View style={[styles.container, theme.homeContainer, styles.loader]}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
    );
  } else {
    return (
    <ThemeManager>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
          name="MainScreen">{(props:any) => <MainScreen theme={theme} {...props} />}</Stack.Screen>
          <Stack.Screen name="Settings">{(props:any) => <Settings text={styles.text} {...props} />}</Stack.Screen>
          <Stack.Screen name="Info">{(props:any) => <Info text={styles.text} {...props} />}</Stack.Screen>
          <Stack.Screen name="ManageVacuum">{(props:any) => <ManageVacuum text={styles.text} {...props} />}</Stack.Screen>
          <Stack.Screen name="Reset">{(props:any) => <Reset text={styles.text} {...props} />}</Stack.Screen>
          <Stack.Screen name="Update">{(props:any) => <Update text={styles.text} {...props} />}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeManager>
  );
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black"
  },
  loader: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    fontFamily: "Gilroy"
  }
});

export default App;