import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import SubHeader from '../SubHeader';
import { getMode } from "../../../redux/actions";
import { useSelector } from 'react-redux';
import { vh, vw } from 'react-native-expo-viewport-units';

const DATA = [
  {
    id: "1",
    title: "Фильтр",
    bottomText: "Замените через примерно 142h",
    percents: "94%"
  },
  {
    id: "2",
    title: "Боковая щетка",
    bottomText: "Замените через примерно 192h",
    percents: "96%"
  },
  {
    id: "3",
    title: "Основная щетка",
    bottomText: "Замените через примерно 292h",
    percents: "97%"
  },
  {
    id: "4",
    title: "Датчики",
    bottomText: "Убрать через примерно 22h",
    percents: "73%"
  }
]

const Item = (item: any, theme: boolean) => (
  <TouchableOpacity activeOpacity={0.7} style={[styles.element, { backgroundColor: theme ? "black" : "white", borderColor: theme ? "#4F4F4F" : "rgba(0, 0, 0, 0.2)" }]}>
    <View style={{ flexDirection: "column" }}>
      <Text style={{ color: theme ? "white" : "black", fontSize: vw(4.8), fontFamily: "Gilroy-Medium" }}>
        {item.title}
      </Text>
      <Text style={{ color: theme ? "rgba(255,255,255,0.5)" : "rgba(0, 0, 0, 0.4)", fontSize: vw(3.2), fontFamily: "Gilroy-Medium" }}>
        {item.bottomText}
      </Text>
    </View>
    <View style={{ justifyContent: "flex-end", alignSelf: "center" }}>
      <Text style={{ color: "#4492EE", fontSize: vw(6.4), fontFamily: "Gilroy-Medium" }}>
        {item.percents}
      </Text>
    </View>
  </TouchableOpacity>
);

const ManageVacuum = (props: any) => {
  const theme = useSelector(getMode);

  return (
    <View style={[styles.container, { backgroundColor: theme ? "black" : "white" }]}>
      <SubHeader theme={theme} nav={props.navigation} />
      <View style={{ justifyContent: "flex-start" }}>
        <View style={[styles.head, { borderColor: theme ? "#4F4F4F" : "rgba(0, 0, 0, 0.2)" }]}>
          <Text style={{ fontSize: vw(4.8), color: theme ? "white" : "black", fontFamily: "Gilroy-Medium" }}>
            Управление роботом-пылесосом
          </Text>
        </View>
        <View style={{ alignItems: "flex-start" }}>
          <Image source={require("../../../../assets/img/vacuum-print.png")} style={{ width: vw(87.47), height: vw(62.4), alignSelf: "center" }} />
        </View>
        <View style={{ alignSelf: "flex-start" }}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => Item(item, theme)}
            ListHeaderComponent={View}
            ListHeaderComponentStyle={{ borderBottomWidth: 0.5, borderColor: theme ? "#4F4F4F" : "rgba(0, 0, 0, 0.2)" }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  element: {
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: vw(3.5),
    paddingVertical: vw(2.67)
  },
  head: {
    paddingBottom: vw(4.8),
    alignItems: "center",
    borderBottomWidth: 0.5,
    width: "100%"
  }
})

export default ManageVacuum;