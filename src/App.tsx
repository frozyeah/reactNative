import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { useFonts } from 'expo-font';

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

const Stack = createStackNavigator();

const nightColors = {
  home: {
    backgroundColor: "black"
  },
  header: {
    circles: {
      backgroundColor: "#212121",
    },
    topText: {
      color: "rgba(255, 255, 255, 0.4)"
    },
    bottomText: {
      color: "#fff"
    },
    text: {
      color: "rgba(255, 255, 255, 1)"
    },
    back: {
      backgroundColor: "rgba(79, 79, 79, 1)"
    },
    blur: {
      backgroundColor: "rgba(38, 38, 38, 0.6)"
    },
    theme: true
  },
  radio: {
    text: {
      color: "rgba(255, 255, 255, 1)"
    },
    back: {
      backgroundColor: "rgba(37, 37, 37, 1)"
    },
    radio: "rgba(79, 79, 79, 1)",
    theme: true
  },
  map: {
    text: {
      color: "rgba(255, 255, 255, 1)"
    },
    back: {
      backgroundColor: "rgba(37, 37, 37, 1)"
    },
    theme: true
  },
  planner: {
    text: {
      color: "rgba(255, 255, 255, 1)"
    },
    back: {
      backgroundColor: "rgba(37, 37, 37, 1)"
    },
    theme: true
  },
}

const dayColors = {
  home: {
    backgroundColor: "#fff"
  },
  header: {
    circles: {
      backgroundColor: "rgba(248, 248, 248, 1)",
    },
    topText: {
      color: "rgba(0, 0, 0, 0.4)"
    },
    bottomText: {
      color: "rgba(0, 0, 0, 1)"
    },
    text: {
      color: "rgba(0, 0, 0, 1)"
    },
    back: {
      backgroundColor: "rgba(242, 242, 242, 1)"
    },
    blur: {
      backgroundColor: "rgba(248, 248, 248, 0.6)"
    },
    svgs: false
  },
  radio: {
    text: {
      color: "rgba(0, 0, 0, 1)"
    },
    back: {
      backgroundColor: "rgba(248, 248, 248, 1)"
    },
    radio: "rgba(255, 255, 255, 1)",
    theme: false
  },
  map: {
    text: {
      color: "rgba(0, 0, 0, 1)"
    },
    back: {
      backgroundColor: "rgba(248, 248, 248, 1)"
    },
    theme: false
  },
  planner: {
    text: {
      color: "rgba(0, 0, 0, 1)"
    },
    back: {
      backgroundColor: "rgba(248, 248, 248, 1)"
    },
    theme: false
  },
}

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
  const [theme, setTheme] = useState(useSelector(getMode));
  const [isLoading, setLoading] = useState(true);
  console.log(theme)
  const dispatch = useDispatch();

  // "https://github.com/ReWWeR/teleset/blob/master/src/fonts/Radomir%20Tinkov%20-%20Gilroy-Medium.otf?raw=true"

  let [fontsLoaded, error] = useFonts({
    Gilroy: require('../assets/fonts/Gilroy-Medium.ttf'),
  });

  useEffect(() => {
    // dispatch({type:"CHANGE_MODE", data: theme});
  }, []);

  if (isLoading) checkTheme().then((value: boolean) => {
    setTheme(value);
    dispatch({ type: 'CHANGE_MODE', data: value });
    setLoading(false);
  });

  if (!fontsLoaded && isLoading) {
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
    fontFamily: "Gilroy"
  }
});

export default App;