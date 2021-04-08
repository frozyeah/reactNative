import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, TouchableOpacity, FlatList, useColorScheme } from 'react-native';
import { useDispatch } from 'react-redux';
import ToggleSwitch from '../ToggleSwitch';
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

const nightColors = {
  home: {
    backgroundColor: "black"
  }
}

const dayColors = {
  home: {
    backgroundColor: "#fff"
  }
}

const Item = (props: any) => (
  <TouchableOpacity activeOpacity={0.7} style={[styles.element, props.style]} onPressOut={props.onPress}>
    <View style={{flexDirection: "row", justifyContent:"center"}}>
      <props.item.icon style={{alignSelf: "center"}} />
      <Text style={[styles.font, {color:"white", fontSize:20, paddingLeft: "2%"}]}>
        {props.item.title}
      </Text>
    </View>
    {!props.item.hasSwitch ? <View /> :
    <View style={{justifyContent: "flex-end"}}>
      <ToggleSwitch
      isOn={props.isEnabled}
      onToggle={props.onPress}
      onColor='#4cd137'
      offColor='rgba(120, 120, 128, 0.32)'
      label=""
      style={{}}
      labelStyle={{}}
      />
    </View>
    }
  </TouchableOpacity>
);

const Settings = (props: any) => {
  const [switchValue, setSwitch] = useState(true);
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();

  if(isLoading) getData('@theme').then((value) => {
    if(value !== undefined){
      setSwitch((value === 'true'));
      setLoading(false);
    } else {
      setSwitch((useColorScheme() === "dark"));
    }
  })

  let mode: any;
  if (switchValue) mode = nightColors;
  else mode = dayColors;

  useEffect(()=>{
    return function cleanup(){
      storeData('@theme', switchValue.toString());
    }
  }, [switchValue]);

  const renderItem = (item: any) => {
    let onPress: () => void;
    let onValueChange = () => {
      // setSwitch(!switchValue)
    };

    if(item.hasSwitch){
      onPress = () => {
        dispatch({type:'CHANGE_MODE', data: !switchValue});
        setSwitch(!switchValue)
      };
    } else {
      onPress = () => {
        props.navigation.navigate(item.navigationLoc);
      };
    }

    return (
      <Item
        item={item}
        onPress={onPress}
        textStyle={[props.text]}
        isEnabled={switchValue}
        onValueChange={onValueChange}
      />
    );
  };

  if(!isLoading) return (
    <View style={[styles.container, mode.home]}>
      <MainHeader theme={switchValue} nav={props.navigation}/>
      <View style={{flex:8.7}}>
        <FlatList
          data={DATA}
          renderItem={({item})=> renderItem(item)}
          ListHeaderComponent={View}
          ListHeaderComponentStyle={{borderBottomWidth: 0.5, borderColor: "#4F4F4F"}}
        />
      </View>
    </View>
  );
  else return(
    <View style={{backgroundColor:"#000", flex: 1}}>
      <ActivityIndicator size="large" color="#fff" style={{flex:1}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor:"#000000",
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