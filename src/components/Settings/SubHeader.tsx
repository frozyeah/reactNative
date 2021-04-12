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
            {props.theme ? <BackNight height={24} width={24} style={{ height: "100%", width: "100%", alignSelf: "center" }} /> :
              <BackDay height={24} width={24} style={{ height: "100%", width: "100%", alignSelf: "center" }} />}
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={[styles.right, {backgroundColor: props.theme ? "#212121" : "#F8F8F8"}]} onPressOut={() => props.nav.navigate('MainScreen')}>
        {props.theme ? <HomeNight height={25} width={25} /> : <HomeDay height={25} width={25} />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: vh(4.9),
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: vh(3.7),
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  back: {
    height: 55,
    width: 55,
    borderRadius: 27.5,
    justifyContent: "center"
  },
  edit: {
    backgroundColor: "#212121",
    height: 35.38,
    width: 35.38,
    borderRadius: 17.69,
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: "12.3%"
  },
  button: {
    backgroundColor: "#212121",
    height: 55,
    width: 55,
    borderRadius: 27.5,
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
    height: 55,
    width: 55,
    borderRadius: 27.5,
    justifyContent: "center",
    alignItems: "center",
    // alignSelf:"flex-end"
  }
});

export default SubHeader;