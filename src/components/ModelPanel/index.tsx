import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import PowerButton from "../../../assets/svg/start.svg";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const ModelPanel = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.modelName}>
        <Text style={styles.text}>
          Robot cleaner
        </Text>
        <Text style={styles.text}>
          Valiron E34
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.button}>
            <PowerButton style={{ marginTop: "5%" }} />
            <Text style={{ color: "#fff", fontSize: 13.86, marginTop: "5%", marginBottom: "5%", fontFamily: "Gilroy" }}>Начать уборку</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rect} />
      <Image source={require("../../../assets/img/cleaner.png")} style={styles.cleaner} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: vh(2.5),
    backgroundColor: "#3F8EEC",
    flex: 2.5,
    flexDirection: "row",
    borderRadius: 20,
  },
  text: {
    fontSize: 17.52,
    color: "white",
    fontFamily: "Gilroy"
  },
  modelName: {
    top: vh(2),
    left: vw(9)
  },
  cleaner: {
    left: vw(18.2),
    alignSelf:"center"
  },
  button: {
    marginTop: vh(2.3),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#59A1F6",
    borderRadius: 10
  },
  rect: {
    position: "absolute",
    width: "32.3%",
    height: "62%",
    left: "67.7%",
    backgroundColor: "#59A1F6",
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
  },
});

export default ModelPanel;