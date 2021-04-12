import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

import ModeIconNight from "../../../assets/svg/night/mode.svg";
import ModeIconDay from "../../../assets/svg/day/mode.svg";

import Auto from "../../../assets/svg/auto.svg";
import Edge from "../../../assets/svg/edge.svg";
import Spot from "../../../assets/svg/spot.svg";
import Random from "../../../assets/svg/random.svg";

const DATA = [
  {
    id: "1",
    title: "Auto",
    Icon: Auto
  },
  {
    id: "2",
    title: "Edge",
    Icon: Edge
  },
  {
    id: "3",
    title: "Spot",
    Icon: Spot
  },
  {
    id: "4",
    title: "Random",
    Icon: Random
  },
];

const Item = ({ item, onPress, style, textStyle }: any) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.radio, style]}>
    <item.Icon />
    <Text style={[textStyle, { fontFamily: "Gilroy" }]}>
      {item.title}
    </Text>
  </TouchableOpacity>
);

const Mode = (props: any) => {
  const [selectedId, setSelectedId] = useState("1");
  let theme = props.theme;

  const renderItem = ({ item }: any) => {
    const backgroundColor = item.id === selectedId ? "#3F8EEC" : theme.radio;
    const color = item.id === selectedId ? "#fff" : "#418FED";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
        textStyle={{ color }}
      />
    );
  };

  return (
    <View style={[styles.container, theme.back]}>
      <View style={styles.head}>
        {theme.theme ? <ModeIconNight /> : <ModeIconDay />}
        <Text style={[styles.text, theme.text]}>
            Режим уборки
        </Text>
      </View>
      <View style={{alignItems:"center", alignSelf:"center", justifyContent:"center"}}>
        <FlatList
          scrollEnabled={false}
          numColumns={4}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          contentContainerStyle={styles.radioContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: vh(2.5),
    flex: 2.1,
    borderRadius: 20,
  },
  head: {
    marginLeft: "5%",
    marginTop: vh(2.4),
    flexDirection: "row",
    alignItems: "center"
  },
  radioContainer: {
    justifyContent: "space-between"
  },
  radio: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "2%",
    borderRadius: 10,
    width: 63,
    height: 63
  },
  text: {
    marginLeft: "2%",
    fontSize: 21.96,
    fontFamily: "Gilroy"
  },
  buttonText: {
    color: "white"
  }
});

export default Mode;
