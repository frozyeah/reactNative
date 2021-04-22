import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import SubHeader from '../SubHeader';
import { getMode } from "../../../redux/actions";
import { useSelector } from 'react-redux';
import { vh, vw } from 'react-native-expo-viewport-units';

const Reset = (props: any) => {

  const theme = useSelector(getMode);

  return (
    <View style={[styles.container, { backgroundColor: theme ? "black" : "white" }]}>
      <SubHeader theme={theme} nav={props.navigation} />
      <View style={{}}>
        <View style={[styles.head, { borderColor: theme ? "#4F4F4F" : "rgba(0, 0, 0, 0.2)" }]}>
          <Text style={{ fontSize: vw(4.8), color: theme ? "white" : "black", fontFamily: "Gilroy-Medium" }}>
            Сброс настроек
          </Text>
        </View>
        <View style={{ alignContent: "center", alignSelf: "center" }}>
          <Text style={{ fontSize: vw(3.7), color: theme ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)", fontFamily: "Gilroy-Medium", paddingTop: vh(3.7) }}>
            Вы уверенны, что хотите сбросить настройки к начальным? Ваши данные будут сброшены.
          </Text>
          <TouchableOpacity activeOpacity={0.7} style={{
            width: vw(48.5), height: vw(12.26), backgroundColor: "#59A1F6", justifyContent: "center",
            borderRadius: vw(2.7), alignSelf: "center", marginTop: vh(3.7)
          }}>
            <Text style={{ alignSelf: "center", color: "white", fontFamily: "Gilroy-Medium", fontSize: vw(3.7) }}>
              Сбросить настройки
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  head: {
    paddingBottom: vw(4.8),
    alignItems: "center",
    borderBottomWidth: 0.5,
    width: "100%"
  }
})

export default Reset;