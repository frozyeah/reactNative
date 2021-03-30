import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, SafeAreaView, FlatList } from 'react-native';
import PlannerMode from "../../../assets/svg/planner.svg";
import Back from "../../../assets/svg/back.svg";
import { getData, storeData } from "../../actions/asyncStorage";

const DATA = [
  {
    id: 1,
    hour: "9",
    min: "00",
    mode: "Auto",
    days: "будние дни",
    power: "standart",
    isEnabled: true
  },
  {
    id: 2,
    hour: "13",
    min: "00",
    mode: "Random",
    days: "пт-сб-вс",
    power: "turbo",
    isEnabled: false
  },
  {
    id: 3,
    hour: "13",
    min: "00",
    mode: "Random",
    days: "пт-сб-вс",
    power: "turbo",
    isEnabled: true
  },
  {
    id: 4,
    hour: "13",
    min: "00",
    mode: "Random",
    days: "пт-сб-вс",
    power: "turbo",
    isEnabled: true
  },
  {
    id: 5,
    hour: "13",
    min: "00",
    mode: "Random",
    days: "пт-сб-вс",
    power: "turbo",
    isEnabled: false
  },
  {
    id: 6,
    hour: "13",
    min: "00",
    mode: "Random",
    days: "пт-сб-вс",
    power: "turbo",
    isEnabled: true
  },
  {
    id: 7,
    hour: "13",
    min: "00",
    mode: "Random",
    days: "пт-сб-вс",
    power: "turbo",
    isEnabled: false
  },
  {
    id: 8,
    hour: "13",
    min: "00",
    mode: "Random",
    days: "пт-сб-вс",
    power: "turbo",
    isEnabled: true
  },
]

const Item = ({ item, onPress, style }: any) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.element, style]}>
    <View style={{flexDirection: "column"}}>
      <Text style={{color:"white", fontSize:25, fontFamily: "Gilroy"}}>
        {item.hour+":"+item.min}
      </Text>
      <Text style={{color:"rgba(255,255,255,0.4)", fontFamily: "Gilroy"}}>
        {item.mode+", "+item.days+", "+item.power}
      </Text>
    </View>
  </TouchableOpacity>
);

const Planner = (props: any) => {
  storeData("@planner", JSON.stringify(DATA))
  const [modalVisible, setVisible] = useState(false);
  const font = props.text;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.head}>
          <PlannerMode />
          <Text style={styles.text}>
            Планирование уборки
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={{alignItems:"center", alignSelf:"center", alignContent:"center", justifyContent:"center"}} onPressOut={() => setVisible(!modalVisible)}>
          <View style={styles.open}>
            <Back width={17} height={17} />
          </View>
        </TouchableOpacity>
      </View>
      <Modal animationType="fade"
      transparent={true}
      visible={modalVisible}>
        <View style={{backgroundColor:"rgba(38,38,38,0.6)", width:"100%", height:"100%",
         alignSelf:"center", justifyContent:"flex-end"}}>
          <View style={styles.modalContainer}>
            <View style={styles.header}>
              <View style={{flexDirection:"row"}}>
                <PlannerMode style={{marginRight:"4%", alignSelf:"center"}} />
                <Text style={{fontSize: 21.96, color: "#fff", alignSelf:"center", justifyContent:"flex-start", fontFamily: "Gilroy"}}>
                  Планирование уборки
                </Text>
              </View>
              <TouchableOpacity activeOpacity={0.7} onPressOut={() => setVisible(!modalVisible)}>
                <View style={styles.close}>
                  <Back width={17} height={17} />
                </View>
              </TouchableOpacity>
            </View>
              <View style={styles.list}>
                <FlatList
                data={DATA}
                renderItem={Item}
                ListHeaderComponent={View}
                ListHeaderComponentStyle={{borderBottomWidth: 0.5, borderColor: "rgba(0, 0, 0, 0.2);"}}
                />
                <TouchableOpacity activeOpacity={0.7} style={[styles.button, {backgroundColor:"#59A1F6", borderRadius:20}]}>
                  <Text style={[props.text, {color: "#fff", fontSize: 50.64, alignSelf:"center"}]}>+</Text>
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
    marginBottom: "5%",
    backgroundColor:"#252525",
    flex: 1,
    borderRadius: 20
  },
  element:{
    borderBottomWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.2);",
    width: "100%",
    paddingHorizontal:"3%",
    paddingVertical: "1%"
  },
  content:{
    justifyContent:"space-between",
    flexDirection:"row",
    alignContent: "center",
    alignItems:"center",
  },
  head:{
    marginLeft: "5%",
    marginTop: "4.7%",
    flexDirection: "row",
    alignItems: "center"
  },
  button:{
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "flex-start",
    width: "20%",
    marginVertical: "3%",
  },
  header:{
    marginTop: "6%",
    marginBottom: "8%",
    justifyContent:"space-around",
    flexDirection:"row",
    alignItems:"center",
  },
  list: {
    flex:1,
    justifyContent:"center",
    paddingTop: "5%",
    alignContent: "flex-start",
    alignSelf: "flex-start",
    width: "100%"
  },
  modalContainer: {
    height:"80.6%",
    backgroundColor:"#4F4F4F",
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "5%",
    borderRadius: 20,
    justifyContent:"flex-start"
  },
  open: {
    alignContent:"center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    // marginTop: "5%",
    // backgroundColor: "#000",
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  close: {
    justifyContent:"center",
    alignItems:"center",
    alignSelf: "center",
    marginTop:"5%",
    // backgroundColor: "#000",
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  text: {
    marginLeft: "2%",
    color: "white",
    fontSize:21.96,
    fontFamily: "Gilroy"
  }
});

export default Planner;