import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import BatteryButton from "./BatteryButton";
import SettingsButton from "./SettingsButton";

const Header = (props: any) => {
  console.log(props.theme)
  let theme = props.theme;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={[styles.avatar, theme.circles]}>
            <Image source={require("../../../assets/img/avatar.png")} style={{ height: "100%", width: "100%", alignSelf: "center" }} />
          </View>
        </TouchableOpacity>
        <View style={styles.text}>
          <Text style={[{ fontSize: vw(2.9), color: "rgba(255, 255, 255, 0.4)", fontFamily: "Gilroy-Medium" }, theme.topText]}>Hello</Text>
          <Text style={[{ fontSize: vw(3.5), fontFamily: "Gilroy" }, theme.bottomText]}>Nick Korzh</Text>
        </View>
      </View>
      <View style={styles.right}>
        <BatteryButton circles={theme.circles} modal={theme} theme={theme.theme} />
        <SettingsButton circles={theme.circles} theme={theme.theme} nav={props.nav} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: vh(2),
    marginLeft: vw(8.3),
    marginRight: vw(8.3),
    marginBottom: vh(4),
    alignItems: "center",
    height: vh(5.54),
    flexDirection: "row",
    justifyContent: "space-between"
  },
  avatar: {
    height: vw(10.9),
    width: vw(10.9),
    borderRadius: 27.5,
  },
  left: {
    flexDirection: "row"
  },
  text: {
    marginLeft: vw(2.7),
    alignSelf: "center"
  },
  right: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

export default Header;