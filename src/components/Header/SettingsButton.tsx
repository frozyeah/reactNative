import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import SettingNight from "../../../assets/svg/night/settings-link.svg";
import SettingDay from "../../../assets/svg/day/settings-link.svg";

const SettingsButton = (props: any) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} onPressOut={() => props.nav.navigate('Settings')}>
      <View style={[styles.button, props.circles]}>
        {props.theme ? <SettingNight height={25} width={25} /> : <SettingDay height={25} width={25} />}
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
    height: 55,
    width: 55,
    borderRadius: 27.5,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SettingsButton;