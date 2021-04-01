import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import ModeIcon from "../../../assets/svg/mode.svg";
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
    <Text style={[textStyle, {fontFamily: "Gilroy"}]}>
      {item.title}
    </Text>
  </TouchableOpacity>
);

const Mode = (props: any) => {
  const [selectedId, setSelectedId] = useState("1");

  const renderItem = ({ item }: any) => {
    const backgroundColor = item.id === selectedId ? "#3F8EEC" : "#4F4F4F";
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
    <View style={styles.container}>
      <View style={styles.head}>
        <ModeIcon />
        <Text style={styles.text}>
          Режим уборки
        </Text>
      </View>
      <View style={styles.radioContainer}>
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
      marginBottom: "2%",
      backgroundColor:"#252525",
      flex: 2,
      borderRadius: 20,
      justifyContent: "space-between"
    },
    head:{
      marginLeft: "5%",
      marginTop: "4.7%",
      flexDirection: "row",
      alignItems: "center"
    },
    radioContainer:{
      flexDirection: "row",
      justifyContent: "space-around",
      paddingBottom: "2%"
    },
    radio:{
      alignItems:"center",
      justifyContent: "center",
      marginHorizontal: "2%",
      borderRadius: 10,
      width:65,
      height:65
    },    
    text: {
      marginLeft: "2%",
      color: "white",
      fontSize:21.96,
      fontFamily: "Gilroy"
    },
    buttonText: {
      color: "white"
    }
});

export default Mode;
