import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { useColorScheme } from 'react-native-appearance';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

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
import checkTheme from "./actions/checkTheme";
import { getMode } from "./redux/actions";
import { nightColors, dayColors } from "./components/themes";

const Stack = createStackNavigator();

const MainScreen = ({ navigation }: any) => {
  let theme = useSelector(getMode);
  let mode: any;
  if (theme) {
    mode = nightColors;
  } else {
    mode = dayColors;
  }

  return (
    <View style={[styles.container, mode.home]}>
      <View style={styles.rect} />
      <Image source={require("../assets/img/cleaner.png")} style={styles.cleaner} />
      <Header theme={mode.header} nav={navigation} />
      <ModelPanel text={styles.text} />
      <Mode theme={mode.radio} text={styles.text} />
      <Power theme={mode.radio} text={styles.text} />
      <Map theme={mode.map} text={styles.text} />
      <Planner theme={mode.planner} text={styles.text} />
    </View>
  )
}

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState<any>(useColorScheme());

  useEffect(() => {
    // dispatch({type:"CHANGE_MODE", data: theme});
  }, []);

  if (isLoading) checkTheme().then((value: boolean | undefined) => {
    let res: boolean;
    if(value === undefined){
      res = (theme === 'dark')
    } else {
      res = value;
    }
    dispatch({ type: 'CHANGE_MODE', data: res });
    setLoading(false);
    setTheme(res);
  });

  if (isLoading) {
    return (
      <View style={[styles.container, styles.loader]}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="MainScreen">{(props: any) => <MainScreen {...props} />}</Stack.Screen>
          <Stack.Screen name="Settings">{(props: any) => <Settings {...props} />}</Stack.Screen>
          <Stack.Screen name="Info">{(props: any) => <Info {...props} />}</Stack.Screen>
          <Stack.Screen name="ManageVacuum">{(props: any) => <ManageVacuum {...props} />}</Stack.Screen>
          <Stack.Screen name="Reset">{(props: any) => <Reset {...props} />}</Stack.Screen>
          <Stack.Screen name="Update">{(props: any) => <Update {...props} />}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  // theme={scheme === 'dark' ? DarkTheme : DayTheme}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    fontFamily: "Gilroy-Medium"
  },
  rect: {
    zIndex: 2,
    top: vh(11.6),
    position: "absolute",
    width: vh(12.44),
    right: vw(8.3),
    height: vh(12.68),
    alignSelf: "flex-end",
    backgroundColor: "#59A1F6",
    borderTopEndRadius: vh(2.4),
    borderBottomStartRadius: vh(2.4),
  },
  cleaner: {
    zIndex: 3,
    top: vh(13.133),
    left: vw(49.5),
    position: "absolute",
    resizeMode: "contain",
    height: vh(17.6),
    width: vw(54.93),
    alignSelf: "center"
  },
});

export default App;