import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import PowerButton from "../../../assets/svg/start.svg";

const ModelPanel = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.modelName}>
        <Text style={[props.text, styles.text]}>
          Robot cleaner
        </Text>
        <Text style={[props.text, styles.text]}>
          Valiron E34
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.button}>
            <PowerButton style={{marginTop:"5%"}}/>
            <Text style={[props.text, {color: "#fff", fontSize: 15.86, marginTop:"5%", marginBottom:"5%"}]}>Начать уборку</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rect} />
      <Image source={require("../../../assets/img/cleaner.png")} style={styles.cleaner}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "2%",
    backgroundColor:"#3F8EEC",
    flex: 2.7,
    flexDirection: "row",
    borderRadius: 20,
  },
  text: {
    fontSize: 19.52,
    color: "white"
  },
  modelName:{
    marginTop:"7%",
    marginLeft:"10%"
  },
  cleaner:{
    position:"absolute",
    left:"56.5%",
    top:"7.5%"
  },
  button:{
    marginTop:"14.5%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#59A1F6",
    borderRadius: 10
  },
  rect:{
    position: "absolute",
    width:"32.3%",
    height: "62%",
    left: "67.7%",
    backgroundColor: "#59A1F6",
    borderTopEndRadius: 20,
  },
});

export default ModelPanel;