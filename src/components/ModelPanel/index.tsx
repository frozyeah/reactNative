import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import PowerButton from "../../../assets/svg/start.svg";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';


const ModelPanel = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "space-between", flexDirection: "column", marginVertical: vh(1.6), left: vw(11.2) }}>
        <View style={styles.modelName}>
          <Text style={styles.text}>
            Robot cleaner
        </Text>
          <Text style={styles.text}>
            Valiron E34
        </Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <PowerButton height={vw(6)} width={vw(6)} />
            <Text style={{ color: "#fff", fontSize: vw(3.5), marginTop: vh(0.5), fontFamily: "Gilroy-Medium" }}>Начать уборку</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: vw(8.3),
    marginRight: vw(8.3),
    marginBottom: vh(2.5),
    backgroundColor: "#3F8EEC",
    height: vh(20.44),
    flexDirection: "row",
    borderRadius: vh(2.4),
  },
  text: {
    fontSize: vw(4.3),
    color: "white",
    fontFamily: "Gilroy-Medium"
  },
  modelName: {
    top: vh(1.6),
  },
  button: {
    marginTop: vh(1.48),
    width: vw(29.464),
    height: vw(13.83),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#59A1F6",
    borderRadius: vh(1.2)
  },
});

export default ModelPanel;