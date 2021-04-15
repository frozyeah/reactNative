import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, TouchableOpacity, FlatList, useColorScheme } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ToggleSwitch from '../ToggleSwitch';
import MainHeader from './MainHeader';
import { getMode } from "../../redux/actions";
import { getData, storeData } from "../../actions/asyncStorage";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

import MoonNight from "../../../assets/svg/night/moon.svg";
import MoonDay from "../../../assets/svg/day/moon.svg";

import ManageNight from "../../../assets/svg/night/settings.svg";
import ManageDay from "../../../assets/svg/day/settings.svg";

import InfoNight from "../../../assets/svg/night/information.svg";
import InfoDay from "../../../assets/svg/day/information.svg";

import UpdateNight from "../../../assets/svg/night/up-arrow.svg";
import UpdateDay from "../../../assets/svg/day/up-arrow.svg";

import ResetNight from "../../../assets/svg/night/refresh.svg";
import ResetDay from "../../../assets/svg/day/refresh.svg";

const DATA = [
  {
    id: "1",
    title: "Ночной режим",
    nIcon: MoonNight,
    dIcon: MoonDay,
    hasSwitch: true,
    navigationLoc: false
  },
  {
    id: "2",
    title: "Управление роботом-пылесос...",
    nIcon: ManageNight,
    dIcon: ManageDay,
    hasSwitch: false,
    navigationLoc: 'ManageVacuum'
  },
  {
    id: "3",
    title: "Информация",
    nIcon: InfoNight,
    dIcon: InfoDay,
    hasSwitch: false,
    navigationLoc: 'Info'
  },
  {
    id: "4",
    title: "Обновление прошивки",
    nIcon: UpdateNight,
    dIcon: UpdateDay,
    hasSwitch: false,
    navigationLoc: 'Update'
  },
  {
    id: "5",
    title: "Сброс настроек",
    nIcon: ResetNight,
    dIcon: ResetDay,
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
  <TouchableOpacity activeOpacity={0.7} style={[styles.element, props.style, { borderColor: props.isEnabled ? "#4F4F4F" : "rgba(0, 0, 0, 0.2)" }]} onPressOut={props.onPress}>
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      {props.isEnabled ? <props.item.nIcon style={{ alignSelf: "center", marginLeft: vw(8.27) }} /> : <props.item.dIcon style={{ alignSelf: "center", marginLeft: vw(8.27) }} />}
      <Text style={[styles.font, { color: props.isEnabled ? "white" : "black", fontSize: 18, marginLeft: vw(2.7), alignSelf: "center" }]}>
        {props.item.title}
      </Text>
    </View>
    {!props.item.hasSwitch ? <View /> :
      <View style={{ justifyContent: "flex-end", marginRight: vw(9.33) }}>
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
  const [switchValue, setSwitch] = useState(useSelector(getMode));
  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();


  let mode: any;
  if (switchValue) mode = nightColors;
  else mode = dayColors;

  useEffect(() => {
    return function cleanup() {
      storeData('@theme', switchValue.toString());
    }
  }, [switchValue]);

  const renderItem = (item: any) => {
    let onPress: () => void;
    let onValueChange = () => {
      // setSwitch(!switchValue)
    };

    if (item.hasSwitch) {
      onPress = () => {
        dispatch({ type: 'CHANGE_MODE', data: !switchValue });
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

  if (!isLoading) return (
    <View style={[styles.container, mode.home]}>
      <MainHeader theme={switchValue} nav={props.navigation} />
      <View style={{ flex: 8.7 }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => renderItem(item)}
          ListHeaderComponent={View}
          ListHeaderComponentStyle={{ borderBottomWidth: 0.5, borderColor: switchValue ? "#4F4F4F" : "rgba(0, 0, 0, 0.2)" }}
          ListFooterComponent={View}
          ListFooterComponentStyle={{ borderBottomWidth: 0.5, borderColor: switchValue ? "#4F4F4F" : "rgba(0, 0, 0, 0.2)" }}
        />
      </View>
    </View>
  );
  else return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      <ActivityIndicator size="large" color="#fff" style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"#000000",
  },
  font: {
    fontFamily: "Gilroy-Medium"
  },
  element: {
    borderBottomWidth: 0.5,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: "4%"
  },
})

export default Settings;