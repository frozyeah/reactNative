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
    <Text style={[textStyle, { fontFamily: "Gilroy-Medium", fontSize: 12 }]}>
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
        {theme.theme ? <ModeIconNight height={vw(4.6)} width={vw(4.9)} /> : <ModeIconDay height={vw(4.6)} width={vw(4.9)} />}
        <Text style={[styles.text, theme.text]}>
          Режим уборки
        </Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
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
    marginLeft: vw(8.3),
    marginRight: vw(8.3),
    marginBottom: vh(2.5),
    height: vh(18.47),
    borderRadius: vh(2.4),
  },
  head: {
    marginLeft: "5%",
    marginTop: vh(2.4),
    flexDirection: "row",
    alignItems: "center"
  },
  radioContainer: {
    paddingTop: vh(2)
  },
  radio: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: vw(1.916),
    borderRadius: 10,
    width: vw(16.15),
    height: vw(16.15)*0.935
  },
  text: {
    marginLeft: "2%",
    fontSize: vw(4.8),
    fontFamily: "Gilroy-Medium"
  },
  buttonText: {
    color: "white"
  }
});

export default Mode;
