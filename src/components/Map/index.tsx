import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Image } from 'react-native';

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
          {theme.theme ? <MapIconNight /> : <MapIconDay />}
          <Text style={[styles.text, theme.text]}>
            Карта уборки
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPressOut={() => setVisible(!modalVisible)}>
          <View style={styles.open}>
            {theme.theme ? <BackNight width={17} height={17} /> : <BackDay width={17} height={17} />}
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
                {theme.theme ? <MapIconNight style={{ marginRight: "4%", alignSelf: "center" }} /> : <MapIconDay style={{ marginRight: "4%", alignSelf: "center" }} />}
                <Text style={{ fontSize: 21.96, color: theme.theme ? "white" : "black", alignSelf: "center", justifyContent: "flex-start", fontFamily: "Gilroy" }}>
                  Карта уборки
                </Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPressOut={() => setVisible(!modalVisible)}>
                <View style={styles.close}>
                  {theme.theme ? <CloseNight width={17} height={17} /> : <CloseDay width={17} height={17} />}
                </View>
              </TouchableOpacity>
            </View>
            {theme.theme ? <PlanNight style={{ alignSelf: "center" }} /> : <PlanDay style={{ alignSelf: "center" }} />}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity activeOpacity={0.7} style={[styles.button, { backgroundColor: "#59A1F6", marginRight: "5%" }]}>
                <Reset />
                <Text style={{ color: "#fff", fontSize: 14.64, alignSelf: "center", fontFamily: "Gilroy" }}>Reset Map</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} style={[styles.button, { backgroundColor: "#fff" }]}>
                <EditMap />
                <Text style={{ color: "#418FED", fontSize: 14.64, alignSelf: "center", fontFamily: "Gilroy" }}>Edit Map</Text>
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
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "2%",
    justifyContent: "center",
    flex: 1,
    borderRadius: 20,
  },
  modalContainer: {
    height: "73.6%",
    backgroundColor: "#4F4F4F",
    marginTop: "21.8%",
    marginLeft: "8%",
    marginRight: "8%",
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
    marginHorizontal: "5%",
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
    fontSize: 21.96,
    fontFamily: "Gilroy"
  },
  button: {
    // paddingVertical:"6%",
    marginBottom: "2%",
    // marginTop:"14.5%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: "40%",
    width: "27.15%"
  },
});

export default Map;