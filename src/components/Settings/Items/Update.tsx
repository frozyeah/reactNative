import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import SubHeader from '../SubHeader';
import ToggleSwitch from '../../ToggleSwitch';
import { vh, vw } from 'react-native-expo-viewport-units';

import CloseNight from "../../../../assets/svg/night/close.svg";
import CloseDay from "../../../../assets/svg/day/close.svg";

import { getMode } from "../../../redux/actions";
import { useSelector } from 'react-redux';

const Update = (props: any) => {
  const [switchValue, setValue] = useState(true);
  const [modalVisible, setVisible] = useState(false);
  const theme = useSelector(getMode);

  return (
    <View style={[styles.container, { backgroundColor: theme ? "black" : "white" }]}>
      <SubHeader theme={theme} nav={props.navigation} />
      <View style={{}}>
        <View style={styles.head}>
          <Text style={{ fontSize: vw(4.8), color: theme ? "white" : "black", fontFamily: "GilrGilroy-Mediumoy" }}>
            Обновление прошивки
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={[styles.element, { borderColor: theme ? "#4F4F4F" : "rgba(0, 0, 0, 0.2)" }]} onPressOut={() => setValue(!switchValue)}>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ color: theme ? "white" : "black", fontSize: vw(4.8), fontFamily: "Gilroy-Medium" }}>
              Автоматическое обновление
            </Text>
            <Text style={{ color: theme ? "rgba(255,255,255,0.5)" : "rgba(0, 0, 0, 0.4)", fontSize: vw(2.9), fontFamily: "GilGilroy-Mediumoy" }}>
              Последнее обновление было 03.03.2021
            </Text>
          </View>
          <View style={{ alignSelf: "center", justifyContent: "flex-end" }}>
            <ToggleSwitch
              isOn={switchValue}
              onToggle={() => setValue(!switchValue)}
              onColor='#4cd137'
              offColor='rgba(120, 120, 128, 0.32)'
              label=""
              style={{ alignSelf: "center" }}
              labelStyle={{}}
            />
          </View>
        </TouchableOpacity>
        <View style={{ alignItems: "center", paddingTop: "48%" }}>
          <Text style={{ color: theme ? "rgba(255,255,255,0.6)" : "rgba(0, 0, 0, 0.6)", fontSize: vw(3.74), fontFamily: "Gilroy-Medium" }}>
            Firmware version: 2.7
          </Text>
          <Text style={{ color: theme ? "white" : "black", fontSize: vw(4.53), fontFamily: "Gilroy-Medium" }}>
            Your software is up to date.
          </Text>
        </View>
        {switchValue ? <View /> :
          <View style={{ marginTop: vw(37) }}>
            <TouchableOpacity onPressOut={() => setVisible(!modalVisible)} activeOpacity={0.7} style={{
              width: vw(70.66), height: vw(12.26), backgroundColor: "#59A1F6", justifyContent: "center", borderRadius: vw(2.7), alignSelf: "center", marginBottom: vh(4.9)
            }}>
              <Text style={{ alignSelf: "center", color: "white", fontFamily: "Gilroy-Medium", fontSize: vw(4.26) }}>
                Проверить наличие обновлений
              </Text>
            </TouchableOpacity>
          </View>}
        <Modal animationType="fade"
          transparent={true}
          visible={modalVisible}>
          <View style={{ backgroundColor: theme ? "rgba(38,38,38,0.6)" : "rgba(248, 248, 248, 0.6)", width: "100%", height: "100%", alignSelf: "center" }}>
            <View style={[styles.modalContainer, { backgroundColor: theme ? "rgba(79, 79, 79, 1)" : "rgba(242, 242, 242, 1)" }]}>
              <View style={styles.header}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: vw(4.8), color: theme ? "white" : "black", alignSelf: "center", marginLeft: vw(6.67), justifyContent: "flex-start", fontFamily: "Gilroy-Medium" }}>
                    Доступные обновления
                  </Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} onPressOut={() => setVisible(!modalVisible)}>
                  <View style={[styles.close, { marginHorizontal: vw(2.4) }]}>
                    {theme ? <CloseNight width={vw(3.5)} height={vw(3.5)} /> : <CloseDay width={vw(3.5)} height={vw(3.5)} />}
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: theme ? "white" : "black", fontSize: vw(4.8), marginTop: vw(9.6), marginBottom: vw(5.34), fontFamily: "Gilroy-Medium" }}>
                  Firmware version: 2.7.1
                </Text>
                <Text style={[styles.changes, { color: theme ? "rgba(255,255,255,0.6)" : "rgba(0, 0, 0, 0.6)" }]}>
                  Исправлены ошибки;
                </Text>
                <Text style={[styles.changes, { color: theme ? "rgba(255,255,255,0.6)" : "rgba(0, 0, 0, 0.6)" }]}>
                  Подзарядка устройства стала быстрее на 30 минут;
                </Text>
                <Text style={[styles.changes, { color: theme ? "rgba(255,255,255,0.6)" : "rgba(0, 0, 0, 0.6)" }]}>
                  Улучшено голосовое управление роботом.
                </Text>
                <TouchableOpacity onPressOut={() => setVisible(!modalVisible)} activeOpacity={0.7} style={{
                  width: vw(30.7), height: vw(10.13), backgroundColor: "#59A1F6",
                  justifyContent: "center", borderRadius: vw(2.7), alignSelf: "center", marginTop: vw(5.34)
                }}>
                  <Text style={{ alignSelf: "center", color: "white", fontFamily: "Gilroy-Medium", fontSize: 16 }}>
                    Обновить
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    height: "60.6%",
    marginTop: "58%",
    marginLeft: vw(8.3),
    marginRight: vw(8.3),
    marginBottom: "2%",
    borderRadius: vw(5.34),
  },
  changes: {
    fontSize: vw(3.2),
    fontFamily: "Gilroy",
    alignSelf: "flex-start",
    marginHorizontal: "5%",
    marginVertical: "1%"
  },
  close: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: "5%",
    // backgroundColor: "#000",
    height: vw(12),
    width: vw(12),
    borderRadius: vw(6),
  },
  head: {
    alignItems: "center",
    width: "100%",
    paddingBottom: vw(4.8)
  },
  header: {
    marginTop: "3.5%",
    marginBottom: "3%",
    paddingBottom: "3%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.2)"
  },
  element: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    width: "100%",
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    paddingHorizontal: "5%",
    paddingVertical: "2%"
  },
})

export default Update;