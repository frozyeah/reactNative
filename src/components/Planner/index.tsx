import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, SafeAreaView, FlatList } from 'react-native';
import CreatePlan from "./CreatePlan";
import ListPlan from "./ListPlan";
import PlannerMode from "../../../assets/svg/planner.svg";
import Back from "../../../assets/svg/back.svg";


const Planner = (props: any) => {
  const [modalVisible, setVisible] = useState(false);
  const [isList, setList] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.head}>
          <PlannerMode />
          <Text style={styles.text}>
            Планирование уборки
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={{}} onPressOut={() => setVisible(!modalVisible)}>
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
          {isList ? <ListPlan setList={() => setList(!isList)} closeModal={() => setVisible(!modalVisible)} /> : <CreatePlan onClose={() => setList(!isList)} />}
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
    justifyContent:"center",
    backgroundColor:"#252525",
    flex: 1,
    borderRadius: 20
  },
  element:{
    borderBottomWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.2);",
    width: "100%",
    paddingHorizontal:"5%",
    paddingVertical: "1%"
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
  button:{
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    width: "20%",
    height:"15%",
    marginVertical: "3%",
  },
  header:{
    marginTop: "6%",
    marginBottom: "8%",
    marginHorizontal: "5%",
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
    marginLeft: "4%",
    color: "white",
    fontSize:21.96,
    fontFamily: "Gilroy"
  }
});

export default Planner;