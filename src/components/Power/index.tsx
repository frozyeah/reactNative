import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

import PowerIconNight from "../../../assets/svg/night/power.svg";
import PowerIconDay from "../../../assets/svg/day/power.svg";

import Silent from "../../../assets/svg/silent.svg";
import Turbo from "../../../assets/svg/turbo.svg";

const DATA = [
  {
    id: "1",
    title: "Silent",
    Icon: Silent
  },
  {
    id: "2",
    title: "Standart",
    Icon: Silent
  },
  {
    id: "3",
    title: "Spot",
    Icon: Silent
  },
  {
    id: "4",
    title: "Turbo",
    Icon: Turbo
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


const Power = (props: any) => {
  const [selectedId, setSelectedId] = useState("4");
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
        {theme.theme ? <PowerIconNight /> : <PowerIconDay />}
        <Text style={[styles.text, theme.text]}>
          Мощность всасывания
        </Text>
      </View>
      <View style={{ alignItems: "center", alignSelf: "center", justifyContent: "center" }}>
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
  text: {
    marginLeft: "2%",
    fontSize: 21.96,
    fontFamily: "Gilroy"
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
});

export default Power;