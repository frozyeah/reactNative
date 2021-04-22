import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

import HomeNight from "../../../assets/svg/night/home.svg";
import HomeDay from "../../../assets/svg/day/home.svg";

import BackNight from "../../../assets/svg/night/left-arrow.svg";
import BackDay from "../../../assets/svg/day/left-arrow.svg";

const SubHeader = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity activeOpacity={0.7} onPressOut={() => props.nav.navigate('Settings')}>
          <View style={[styles.back, {backgroundColor: props.theme ? "#212121" : "#F8F8F8"}]}>
            {props.theme ? <BackNight height={vw(5.07)} width={vw(5.07)} style={{ height: "100%", width: "100%", alignSelf: "center" }} /> :
              <BackDay height={vw(5.07)} width={vw(5.07)} style={{ height: "100%", width: "100%", alignSelf: "center" }} />}
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={[styles.right, {backgroundColor: props.theme ? "#212121" : "#F8F8F8"}]} onPressOut={() => props.nav.navigate('MainScreen')}>
        {props.theme ? <HomeNight height={vw(5.07)} width={vw(5.07)} /> : <HomeDay height={vw(5.07)} width={vw(5.07)} />}
      </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between"
  },
  back: {
    height: vw(10.9),
    width: vw(10.9),
    borderRadius: vw(5.45),
    justifyContent: "center"
  },
  edit: {
    backgroundColor: "#212121",
    height: 35.38,
    width: 35.38,
    borderRadius: 17.69,
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: vw(6.13)
  },
  button: {
    backgroundColor: "#212121",
    height: vw(10.9),
    width: vw(10.9),
    borderRadius: vw(5.45),
  },
  left: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  text: {
    marginLeft: "3%",
    alignSelf: "center",
  },
  right: {
    height: vw(10.9),
    width: vw(10.9),
    borderRadius: vw(5.45),
    justifyContent: "center",
    alignItems: "center",
    // alignSelf:"flex-end"
  }
});

export default SubHeader;