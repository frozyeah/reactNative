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
    title: "Medium",
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
    <Text style={[textStyle, { fontFamily: "Gilroy", fontSize: 12 }]}>
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
        {theme.theme ? <PowerIconNight height={vw(6)} width={vw(6)} /> : <PowerIconDay height={vw(6)} width={vw(6)} />}
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
  text: {
    marginLeft: "2%",
    fontSize: vw(4.8),
    fontFamily: "Gilroy-Medium"
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
});

export default Power;