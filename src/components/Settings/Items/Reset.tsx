import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import SubHeader from '../SubHeader';
import { getMode } from "../../../redux/actions";
import { useSelector } from 'react-redux';

const Reset = (props: any) => {

  const theme = useSelector(getMode);

  return (
    <View style={[styles.container, { backgroundColor: theme ? "black" : "white" }]}>
      <SubHeader theme={theme} nav={props.navigation} />
      <View style={{ flex: 8.7 }}>
        <View style={styles.head}>
          <Text style={{ fontSize: 19.96, color: theme ? "white" : "black", fontFamily: "Gilroy" }}>
            Сброс настроек
          </Text>
        </View>
        <View style={{ flex: 10, alignContent: "center", alignSelf: "center" }}>
          <Text style={{ fontSize: 14.96, color: theme ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)", fontFamily: "Gilroy", paddingHorizontal: "7%", paddingTop: "5%" }}>
            Вы уверенны, что хотите сбросить настройки к начальным? Ваши данные будут сброшены.
          </Text>
          <TouchableOpacity activeOpacity={0.7} style={{
            width: "75%", height: "8%", backgroundColor: "#59A1F6", justifyContent: "center",
            borderRadius: 10, alignSelf: "center", paddingHorizontal: "5%", marginTop: "10%"
          }}>
            <Text style={{ alignSelf: "center", color: "white", fontFamily: "Gilroy", fontSize: 15 }}>
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
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "#4F4F4F",
    width: "100%"
  }
})

export default Reset;