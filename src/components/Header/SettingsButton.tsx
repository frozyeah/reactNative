import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import SettingNight from "../../../assets/svg/night/settings-link.svg";
import SettingDay from "../../../assets/svg/day/settings-link.svg";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const SettingsButton = (props: any) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} onPressOut={() => props.nav.navigate('Settings')}>
      <View style={[styles.button, props.circles]}>
        {props.theme ? <SettingNight height={vw(5.1)} width={vw(5.1)} /> : <SettingDay height={vw(4.53)} width={vw(4.53)} />}
        {/* <Image source={require("../../../assets/img/settings.png")} style={{ marginTop: "25%", height: "50%", width: "50%", alignSelf: "center" }} /> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginLeft: "2.5%"
  },
  button: {
    backgroundColor: "#212121",
    height: vw(10.9),
    width: vw(10.9),
    borderRadius: 27.5,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SettingsButton;