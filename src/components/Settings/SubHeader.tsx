import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import Home from "../../../assets/svg/home.svg";
import Back from "../../../assets/svg/left-arrow.svg";

const SubHeader = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity activeOpacity={0.7} onPressOut={() => props.nav.navigate('Settings')}>
          <View style={styles.back}>
            <Back height={24} width={24} style={{ height: "100%", width: "100%", alignSelf: "center" }} />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.right} onPressOut={() => props.nav.navigate('MainScreen')}>
        <Home height={25} width={25} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "2%",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  back: {
    backgroundColor: "#212121",
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
    backgroundColor: "#212121",
    height: 55,
    width: 55,
    borderRadius: 27.5,
    justifyContent: "center",
    alignItems: "center",
    // alignSelf:"flex-end"
  }
});

export default SubHeader;