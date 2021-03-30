import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, TouchableOpacity, Switch, FlatList } from 'react-native';
import MainHeader from './MainHeader';
import { getData, storeData } from "../../actions/asyncStorage";
import Moon from "../../../assets/svg/moon.svg";
import Manage from "../../../assets/svg/settings.svg";
import Info from  "../../../assets/svg/information.svg";
import Update from "../../../assets/svg/up-arrow.svg";
import Reset from "../../../assets/svg/reset.svg";

const DATA = [
  {
    id: "1",
    title: "Ночной режим",
    icon: Moon,
    hasSwitch: true,
    navigationLoc: false
  },
  {
    id: "2",
    title: "Управление роботом-пылесос...",
    icon: Manage,
    hasSwitch: false,
    navigationLoc: 'ManageVacuum'
  },
  {
    id: "3",
    title: "Информация",
    icon: Info,
    hasSwitch: false,
    navigationLoc: 'Info'
  },
  {
    id: "4",
    title: "Обновление прошивки",
    icon: Update,
    hasSwitch: false,
    navigationLoc: 'Update'
  },
  {
    id: "5",
    title: "Сброс настроек",
    icon: Reset,
    hasSwitch: false,
    navigationLoc: 'Reset'
  }
]

const Item = (props: any) => (
  <TouchableOpacity activeOpacity={0.7} style={[styles.element, props.style]} onPressOut={props.onPress}>
    <View style={{flexDirection: "row", justifyContent:"center"}}>
      <props.item.icon style={{alignSelf: "center"}} />
      <Text style={[styles.font, {color:"white", fontSize:20}]}>
        {props.item.title}
      </Text>
    </View>
    {!props.item.hasSwitch ? <View /> :
    <View style={{justifyContent: "flex-end"}}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={props.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={props.onValueChange}
        value={props.isEnabled}
      />
    </View>
    }
  </TouchableOpacity>
);

const Settings = (props: any) => {
  const [switchValue, setSwitch] = useState(true);
  const [isLoading, setLoading] = useState(true);

  const font = props.text;

  getData('@theme').then((value) => {
    if(value !== undefined){
      setSwitch((value === 'true'));
      setLoading(false);
    }
  })
  useEffect(()=>{
    return function cleanup(){
      storeData('@theme', switchValue.toString());
    }
  }, []);

  const renderItem = (item: any, font: object) => {
    let onPress: () => void;
    let onValueChange = () => {
      setSwitch(!switchValue)
    };
    if(item.hasSwitch){
      onPress = () => {
        setSwitch(!switchValue)
      };
    } else {
      onPress = () => {
        props.navigation.navigate(item.navigationLoc);
      };
    }

    return (
      <Item
        font={font}
        item={item}
        onPress={onPress}
        textStyle={[props.text]}
        isEnabled={switchValue}
        onValueChange={onValueChange}
      />
    );
  };

  if(!isLoading) return (
    <View style={styles.container}>
      <MainHeader nav={props.navigation}/>
      <View style={{flex:8.7}}>
        <FlatList
          data={DATA}
          renderItem={({item})=> renderItem(item, font)}
          extraData={font}
          ListHeaderComponent={View}
          ListHeaderComponentStyle={{borderBottomWidth: 0.5, borderColor: "#4F4F4F"}}
        />
      </View>
    </View>
  );
  else return(
    <View style={{backgroundColor:"#000"}}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#000000",
  },
  font: {
    fontFamily: "Gilroy"
  },
  element:{
    borderBottomWidth: 0.5,
    borderColor: "#4F4F4F",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal:"5%",
    paddingVertical: "4%"
  },
})

export default Settings;