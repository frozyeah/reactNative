import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

import HomeNight from "../../../assets/svg/night/home.svg";
import HomeDay from "../../../assets/svg/day/home.svg";

import EditNight from "../../../assets/svg/night/pen.svg";
import EditDay from "../../../assets/svg/day/pen.svg";

const nightColors = {
  font: {
    color: "#fff"
  },
  circles: {
    backgroundColor: "#212121"
  }
}

const dayColors = {
  font: {
    color: "#000"
  },
  circles: {
    backgroundColor: "#F8F8F8"
  }
}

const MainHeader = (props: any) => {
  let mode: any;
  if (props.theme) mode = nightColors;
  else mode = dayColors;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={[styles.avatar, mode.circles]}>
            <Image source={require("../../../assets/img/avatar.png")} style={{ height: "100%", width: "100%", alignSelf: "center" }} />
          </View>
        </TouchableOpacity>
        <View style={styles.text}>
          <Text style={[{ fontSize: 16.86, fontFamily: "Gilroy-Medium" }, mode.font]}>Nick Korzh</Text>
        </View>
        <View style={{ justifyContent: "center" }} >
          <TouchableOpacity style={[styles.edit, mode.circles]} activeOpacity={0.7}>
            {props.theme ? <EditNight height={vw(4)} width={vw(4)} style={{ height: "100%", width: "100%", alignSelf: "center" }} /> : <EditDay height={vw(4)} width={vw(4)} style={{ height: "100%", width: "100%", alignSelf: "center" }} />}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={[styles.right, mode.circles]} onPressOut={() => props.nav.navigate('MainScreen')}>
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
  avatar: {
    // backgroundColor: "#212121",
    height: vw(10.9),
    width: vw(10.9),
    borderRadius: vw(5.45),
  },
  edit: {
    // backgroundColor: "#212121",
    height: vw(7.73),
    width: vw(7.73),
    borderRadius: vw(3.865),
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: "12.3%"
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
    // backgroundColor: "#212121",
    height: vw(10.9),
    width: vw(10.9),
    borderRadius: vw(5.45),
    justifyContent: "center",
    alignItems: "center",
    // alignSelf:"flex-end"
  }
});

export default MainHeader;