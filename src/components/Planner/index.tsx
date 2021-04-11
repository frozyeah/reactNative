import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import CreatePlan from "./CreatePlan";
import ListPlan from "./ListPlan";

import PlannerModeNight from "../../../assets/svg/night/planner.svg";
import PlannerModeDay from "../../../assets/svg/day/planner.svg";

import BackNight from "../../../assets/svg/night/back.svg";
import BackDay from "../../../assets/svg/day/back.svg";

import { getData, storeData } from "../../actions/asyncStorage";
import { getPlans } from "../../redux/actions";
import { useSelector, useDispatch } from 'react-redux';


const Planner = (props: any) => {
  const [dataState, setData] = useState<object[]>(useSelector(getPlans));
  const [modalVisible, setVisible] = useState(false);
  const [isList, setList] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  let theme = props.theme;

  useEffect(() => {

  }, [dataState])

  if (isLoading) getData('@planner').then((value: any) => {
    if (value !== undefined) {
      setData(JSON.parse(value));
      dispatch({ type: 'CHANGE_PLANS', data: dataState });
      setLoading(false);
    }
    return;
  })


  return (
    <View style={[styles.container, theme.back]}>
      <View style={styles.content}>
        <View style={styles.head}>
          {theme.theme ? <PlannerModeNight /> : <PlannerModeDay />}
          <Text style={[styles.text, theme.text]}>
            Планирование уборки
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={{}} onPressOut={() => setVisible(!modalVisible)}>
          <View style={styles.open}>
            {theme.theme ? <BackNight width={17} height={17} /> : <BackDay width={17} height={17} />}
          </View>
        </TouchableOpacity>
      </View>
      <Modal animationType="fade"
        transparent={true}
        visible={modalVisible}>
        <View style={{
          backgroundColor: theme.theme ? "rgba(38,38,38,0.6)" : "rgba(248, 248, 248, 0.6)", width: "100%", height: "100%",
          alignSelf: "center", justifyContent: "flex-end"
        }}>
          {isLoading ? (<View />) : (isList ? <ListPlan date={dataState} theme={theme} setList={() => setList(!isList)} closeModal={() => setVisible(!modalVisible)} /> : <CreatePlan theme={theme} date={dataState} onClose={() => setList(!isList)} />)}
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
    justifyContent: "center",
    flex: 1,
    borderRadius: 20
  },
  element: {
    borderBottomWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.2);",
    width: "100%",
    paddingHorizontal: "5%",
    paddingVertical: "1%"
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
  button: {
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    width: "20%",
    height: "15%",
    marginVertical: "3%",
  },
  header: {
    marginTop: "6%",
    marginBottom: "8%",
    marginHorizontal: "5%",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  list: {
    flex: 1,
    justifyContent: "center",
    paddingTop: "5%",
    alignContent: "flex-start",
    alignSelf: "flex-start",
    width: "100%"
  },
  modalContainer: {
    height: "80.6%",
    backgroundColor: "#4F4F4F",
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "5%",
    borderRadius: 20,
    justifyContent: "flex-start"
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
    alignItems: "center",
    alignSelf: "center",
    marginTop: "5%",
    // backgroundColor: "#000",
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  text: {
    marginLeft: "4%",
    fontSize: 21.96,
    fontFamily: "Gilroy"
  }
});

export default Planner;