import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import MapIcon from "../../../assets/svg/map.svg";
import Back from "../../../assets/svg/back.svg";
import Plan from "../../../assets/svg/plan.svg";
import Reset from "../../../assets/svg/reset.svg";
import EditMap from "../../../assets/svg/editMap.svg";
import Close from "../../../assets/svg/closeplan.svg";

const Map = (props: any) => {
  const [modalVisible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.head}>
          <MapIcon />
          <Text style={[styles.text]}>
            Карта уборки
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPressOut={() => setVisible(!modalVisible)}>
          <View style={styles.open}>
            <Back width={17} height={17} />
          </View>
        </TouchableOpacity>
      </View>
      <Modal animationType="fade"
      transparent={true}
      visible={modalVisible}>
        <View style={{backgroundColor:"rgba(38,38,38,0.6)", width:"100%", height:"100%", alignSelf:"center"}}>
          <View style={styles.modalContainer}>
            <View style={styles.header}>
              <View style={{flexDirection:"row"}}>
                <MapIcon style={{marginRight:"4%", alignSelf:"center"}} />
                <Text style={{fontSize:21.96, color: "#fff", alignSelf:"center", justifyContent:"flex-start", fontFamily: "Gilroy"}}>
                  Карта уборки
                </Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPressOut={() => setVisible(!modalVisible)}>
                <View style={styles.close}>
                  <Close width={17} height={17} />
                </View>
              </TouchableOpacity>
            </View>
            <Plan style={{alignSelf:"center"}}/>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
              <TouchableOpacity activeOpacity={0.7} style={[styles.button, {backgroundColor:"#59A1F6", marginRight:"5%"}]}>
                <Reset />
                <Text style={{color: "#fff", fontSize: 14.64, alignSelf:"center", fontFamily: "Gilroy"}}>Reset Map</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} style={[styles.button, {backgroundColor:"#fff"}]}>
                <EditMap />
                <Text style={{color: "#418FED", fontSize: 14.64, alignSelf:"center", fontFamily: "Gilroy"}}>Edit Map</Text>
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
    justifyContent:"center",
    backgroundColor:"#252525",
    flex: 1,
    borderRadius: 20,
  },
  modalContainer: {
    height:"73.6%",
    backgroundColor:"#4F4F4F",
    marginTop:"21.8%",
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "2%",
    borderRadius: 20,
    justifyContent:"space-between",
  },
  content:{
    justifyContent:"space-between",
    flexDirection:"row",
    alignContent: "center",
    alignItems:"center",
  },
  head:{
    marginHorizontal: "5%",
    flexDirection: "row",
    alignItems: "center"
  },
  open: {
    alignSelf:"flex-end",
    alignContent:"center",
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
  header:{
    marginTop: "3%",
    marginBottom: "3%",
    marginHorizontal:"5%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: "6%",
    color: "white",
    fontSize: 21.96,
    fontFamily: "Gilroy"
  },
  button:{
    // paddingVertical:"6%",
    marginBottom: "2%",
    // marginTop:"14.5%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent:"center",
    borderRadius: 10,
    height: "40%",
    width: "27.15%"
  },
});

export default Map;