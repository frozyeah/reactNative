import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import SubHeader from '../SubHeader';
import ToggleSwitch from '../../ToggleSwitch';
import Close from "../../../../assets/svg/close.svg";

const Update = (props: any) => {
  const [switchValue, setValue] = useState(true);
  const [modalVisible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <SubHeader nav={props.navigation} />
      <View style={{ flex: 8.7 }}>
        <View style={styles.head}>
          <Text style={{ fontSize: 19.96, color: "white", fontFamily: "Gilroy" }}>
            Обновление прошивки
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.element} onPressOut={() => setValue(!switchValue)}>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ color: "white", fontSize: 18, fontFamily: "Gilroy" }}>
              Автоматическое обновление
            </Text>
            <Text style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontFamily: "Gilroy" }}>
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
        <View style={{ flex: 1, alignItems: "center", paddingTop: "50%" }}>
          <Text style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, fontFamily: "Gilroy" }}>
            Firmware version: 2.7
          </Text>
          <Text style={{ color: "white", fontSize: 17, fontFamily: "Gilroy" }}>
            Your software is up to date.
          </Text>
        </View>
        {switchValue ? <View /> :
          <TouchableOpacity onPressOut={() => setVisible(!modalVisible)} activeOpacity={0.7} style={{
            width: "80%", height: "8%", backgroundColor: "#59A1F6", justifyContent: "center", borderRadius: 10, alignSelf: "center", marginBottom: "10%"
          }}>
            <Text style={{ alignSelf: "center", color: "white", fontFamily: "Gilroy", fontSize: 16 }}>
              Проверить наличие обновлений
            </Text>
          </TouchableOpacity>}
        <Modal animationType="fade"
          transparent={true}
          visible={modalVisible}>
          <View style={{ backgroundColor: "rgba(38,38,38,0.6)", width: "100%", height: "100%", alignSelf: "center" }}>
            <View style={styles.modalContainer}>
              <View style={styles.header}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 21.96, color: "#fff", alignSelf: "center", marginLeft: "7%", justifyContent: "flex-start", fontFamily: "Gilroy" }}>
                    Доступные обновления
                  </Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} onPressOut={() => setVisible(!modalVisible)}>
                  <View style={[styles.close, { marginHorizontal: "5%" }]}>
                    <Close width={17} height={17} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 18, marginVertical: "4%", fontFamily: "Gilroy" }}>
                  Firmware version: 2.7.1
                </Text>
                <Text style={styles.changes}>
                  Исправлены ошибки;
                </Text>
                <Text style={styles.changes}>
                  Подзарядка устройства стала быстрее на 30 минут;
                </Text>
                <Text style={styles.changes}>
                  Улучшено голосовое управление роботом.
                </Text>
                <TouchableOpacity onPressOut={() => setVisible(!modalVisible)} activeOpacity={0.7} style={{
                  width: "33%", height: "20%", backgroundColor: "#59A1F6",
                  justifyContent: "center", borderRadius: 10, alignSelf: "center", marginTop: "5%"
                }}>
                  <Text style={{ alignSelf: "center", color: "white", fontFamily: "Gilroy", fontSize: 16 }}>
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
    backgroundColor: "#000000",
  },
  modalContainer: {
    height: "60.6%",
    backgroundColor: "#4F4F4F",
    marginTop: "58%",
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "2%",
    borderRadius: 20,
  },
  changes: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 12,
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
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  head: {
    alignItems: "center",
    width: "100%",
    paddingBottom: "4%"
  },
  header: {
    marginTop: "3.5%",
    marginBottom: "3%",
    paddingBottom: "3%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderBottomWidth: 0.5,
  },
  element: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#4F4F4F",
    width: "100%",
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    paddingHorizontal: "5%",
    paddingVertical: "2%"
  },
})

export default Update;