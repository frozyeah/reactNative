import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

import RechargeIcon from "../../../assets/svg/recharge.svg";

import CloseNight from "../../../assets/svg/night/close.svg";
import CloseDay from "../../../assets/svg/day/close.svg";

import BatteryNight from "../../../assets/svg/night/low-battery.svg";
import BatteryDay from "../../../assets/svg/day/low-battery.svg";

const BatteryButton = (props: any) => {
  const [modalVisible, setVisible] = useState(false);
  let modal = props.modal;

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} onPressOut={() => {
      setVisible(!modalVisible);
    }}>

      <Modal animationType="fade"
        transparent={true}
        visible={modalVisible}>
        <View style={[{ width: "100%", height: "100%", alignSelf: "center" }, modal.blur]}>
          <View style={[{ height: "55.8%", marginTop: "21.8%", marginLeft: vw(8.3), marginRight: vw(8.3), marginBottom: "2%", borderRadius: 20, justifyContent: "space-around" }, modal.back]}>
            <View style={styles.header}>
              <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: "4%" }}>
                {props.theme ? <BatteryNight height={vw(5.1)} width={vw(5.1)} /> : <BatteryDay height={vw(5.1)} width={vw(5.1)} />}
                <Text style={[{ fontSize: vw(4.8), alignSelf: "center", justifyContent: "flex-start", fontFamily: "Gilroy-Medium", paddingLeft: "2%" }, modal.text]}>
                  Уровень заряда
                </Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPressOut={() => setVisible(!modalVisible)}>
                <View style={styles.close}>
                  {props.theme ? <CloseNight width={vw(3.5)} height={vw(3.5)} /> : <CloseDay width={vw(3.5)} height={vw(3.5)} />}
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={{ height: vw(47.2), width: vw(47.2), backgroundColor: "#59A1F6", borderRadius: 89, alignSelf: "center", justifyContent: "center" }}>
              <Text style={{ color: "white", fontSize: vw(19.2), alignSelf: "center", fontFamily: "Gilroy-Medium" }}>
                33%
              </Text>
            </TouchableOpacity>
            <Text style={[{ fontSize: vw(3.5), alignSelf: "center", fontFamily: "Gilroy-Medium" }, modal.text]}>
              Заряда хватит на 1 час и 27 минут
            </Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.recharge}>
              <RechargeIcon height={vw(5.6)} width={vw(5.6)} />
              <Text style={{ color: "#fff", fontSize: vw(3.2), alignSelf: "center", fontFamily: "Gilroy-Medium" }}>Recharge</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <View style={[styles.button, props.circles]}>
        {props.theme ? <BatteryNight height={vw(5.1)} width={vw(5.1)} /> : <BatteryDay height={vw(5.1)} width={vw(5.1)} />}
      </View>
      {/* <Image source={require("../../../assets/img/low-battery.png")} style={{ resizeMode: "contain", flex: 0.35, marginRight: "2%" }} /> */}
      {/* <Image source={require("../../../assets/img/low-battery.png")} style={{ marginTop: "25%", height: "50%", width: "50%", alignSelf: "center" }} /> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: vw(4)
  },
  button: {
    height: vw(10.9),
    width: vw(10.9),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: vw(5.45),
  },
  recharge: {
    marginBottom: "2%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#59A1F6",
    borderRadius: 10,
    height: "14.9%",
    width: "27.15%"
  },
  close: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    // backgroundColor: "#000",
    height: vw(12),
    width: vw(12),
    borderRadius: 27.5,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  }
});

export default BatteryButton;