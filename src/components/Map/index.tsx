import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

import MapIconNight from "../../../assets/svg/night/map.svg";
import MapIconDay from "../../../assets/svg/day/map.svg";

import BackNight from "../../../assets/svg/night/back.svg";
import BackDay from "../../../assets/svg/day/back.svg";

import PlanNight from "../../../assets/svg/night/plan.svg";
import PlanDay from "../../../assets/svg/day/plan.svg";

import Reset from "../../../assets/svg/reset.svg";
import EditMap from "../../../assets/svg/editMap.svg";

import CloseNight from "../../../assets/svg/night/closeplan.svg";
import CloseDay from "../../../assets/svg/day/closeplan.svg";

const Map = (props: any) => {
  const [modalVisible, setVisible] = useState(false);
  let theme = props.theme;

  return (
    <View style={[styles.container, theme.back]}>
      <View style={styles.content}>
        <View style={styles.head}>
          {theme.theme ? <MapIconNight height={vw(5)} width={vw(5)} /> : <MapIconDay height={vw(5)} width={vw(5)} />}
          <Text style={[styles.text, theme.text]}>
            Карта уборки
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPressOut={() => setVisible(!modalVisible)}>
          <View style={styles.open}>
            {theme.theme ? <BackNight  /> : <BackDay />}
          </View>
        </TouchableOpacity>
      </View>
      <Modal animationType="fade"
        transparent={true}
        visible={modalVisible}>
        <View style={{ backgroundColor: theme.theme ? "rgba(38,38,38,0.6)" : "rgba(248, 248, 248, 0.6)", width: "100%", height: "100%", alignSelf: "center" }}>
          <View style={[styles.modalContainer, { backgroundColor: theme.theme ? "rgba(79, 79, 79, 1)" : "rgba(242, 242, 242, 1)" }]}>
            <View style={styles.header}>
              <View style={{ flexDirection: "row" }}>
                {theme.theme ? <MapIconNight height={vw(5)} width={vw(5)} style={{ marginRight: "4%", alignSelf: "center" }} /> : <MapIconDay height={vw(5)} width={vw(5)} style={{ marginRight: "4%", alignSelf: "center" }} />}
                <Text style={{ fontSize: vw(4.8), color: theme.theme ? "white" : "black", alignSelf: "center", justifyContent: "flex-start", fontFamily: "Gilroy-Medium" }}>
                  Карта уборки
                </Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPressOut={() => setVisible(!modalVisible)}>
                <View style={styles.close}>
                  {theme.theme ? <CloseNight height={vw(3.5)} width={vw(3.5)} /> : <CloseDay height={vw(3.5)} width={vw(3.5)} />}
                </View>
              </TouchableOpacity>
            </View>
            {theme.theme ? <PlanNight height={vh(41.1)} width={vh(24.75)} style={{ alignSelf: "center" }} /> : <PlanDay height={vh(41.1)} width={vh(24.75)} style={{ alignSelf: "center" }} />}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity activeOpacity={0.7} style={[styles.button, { backgroundColor: "#59A1F6", marginRight: "5%" }]}>
                <Reset height={vw(5.067)} width={vw(5.08)} />
                <Text style={{ color: "#fff", fontSize: vw(3.2), alignSelf: "center", fontFamily: "Gilroy-Medium" }}>Reset Map</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} style={[styles.button, { backgroundColor: "#fff" }]}>
                <EditMap height={vw(5.067)} width={vw(5.067)}/>
                <Text style={{ color: "#418FED", fontSize: vw(3.2), alignSelf: "center", fontFamily: "Gilroy-Medium" }}>Edit Map</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: vw(8.3),
    marginRight: vw(8.3),
    marginBottom: vh(2.5),
    justifyContent: "center",
    height: vh(7.88),
    borderRadius: vh(2.4),
  },
  modalContainer: {
    height: vh(67.24),
    backgroundColor: "#4F4F4F",
    marginTop: vw(43.73),
    marginLeft: vw(8.3),
    marginRight: vw(8.3),
    marginBottom: "2%",
    borderRadius: 20,
    justifyContent: "space-between",
  },
  content: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  head: {
    paddingLeft: "5%",
    flexDirection: "row",
    alignItems: "center"
  },
  open: {
    alignSelf: "flex-end",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: "5%",
    // backgroundColor: "#000",
    height: 40,
    width: 40,
    borderRadius: 20,
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
  header: {
    marginTop: "3%",
    marginBottom: "3%",
    marginHorizontal: "5%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: "6%",
    fontSize: vw(4.8),
    fontFamily: "Gilroy-Medium"
  },
  button: {
    marginBottom: "2%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: vw(15.7),
    width: vw(22.67)
  },
});

export default Map;