import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import MapIcon from "../../../assets/svg/map.svg";
import Back from "../../../assets/svg/back.svg";
import Plan from "../../../assets/svg/plan.svg";
import Reset from "../../../assets/svg/reset.svg";
import EditMap from "../../../assets/svg/editMap.svg";

const Map = (props: any) => {
  const [modalVisible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.head}>
          <MapIcon />
          <Text style={[styles.text, props.text]}>
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
                <Text style={[props.text, {fontSize:21.96, color: "#fff", alignSelf:"center", justifyContent:"flex-start"}]}>
                  Карта уборки
                </Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPressOut={() => setVisible(!modalVisible)}>
                <View style={styles.close}>
                  <Back width={17} height={17} />
                </View>
              </TouchableOpacity>
            </View>
            <Plan style={{alignSelf:"center"}}/>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", paddingTop: "5%"}}>
              <TouchableOpacity activeOpacity={0.7} style={[styles.button, {backgroundColor:"#59A1F6", marginRight:"5%"}]}>
                <Reset />
                <Text style={[props.text, {color: "#fff", fontSize: 14.64, alignSelf:"center"}]}>Reset Map</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} style={[styles.button,{backgroundColor:"#fff"}]}>
                <EditMap />
                <Text style={[props.text, {color: "#418FED", fontSize: 14.64, alignSelf:"center"}]}>Edit Map</Text>
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
    justifyContent:"space-around"
  },
  content:{
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
  },
  head:{
    marginLeft: "5%",
    marginTop: "4.7%",
    flexDirection: "row",
    alignItems: "center",
  },
  open: {
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "center",
    marginTop: "5%",
    // backgroundColor: "#000",
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  close: {
    justifyContent:"center",
    alignSelf:"center",
    alignItems:"center",
    marginTop:"5%",
    // backgroundColor: "#000",
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  header:{
    marginTop: "6%",
    marginBottom: "8%",
    justifyContent:"space-around",
    flexDirection:"row",
    alignItems:"center",
  },
  text: {
    marginLeft: "2%",
    color: "white",
    fontSize: 21.96
  },
  button:{
    paddingVertical:"6%",
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