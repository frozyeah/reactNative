import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
// import DatePicker from 'react-native-date-picker'
import DateTimePickerModal from "react-native-modal-datetime-picker";

import PlannerModeNight from "../../../assets/svg/night/planner.svg";
import PlannerModeDay from "../../../assets/svg/day/planner.svg";

import DoneNight from "../../../assets/svg/night/done.svg";
import DoneDay from "../../../assets/svg/day/done.svg";

import { storeData } from '../../actions/asyncStorage';
import { useSelector, useDispatch } from 'react-redux';
import { getPlans } from "../../redux/actions";

const DATA = [
  {
    id: "1",
    title: "ПН",
  },
  {
    id: "2",
    title: "ВТ",
  },
  {
    id: "3",
    title: "СР",
  },
  {
    id: "4",
    title: "ЧТ",
  },
  {
    id: "5",
    title: "ПТ",
  },
  {
    id: "6",
    title: "СБ",
  },
  {
    id: "7",
    title: "ВС",
  },
];

const Item = ({ item, onPress, style, textStyle }: any) => (
  <TouchableOpacity onPress={() => onPress(item.id)} activeOpacity={0.7} style={style}>
    <Text style={[{ fontFamily: "Gilroy" }, textStyle]}>
      {item.title}
    </Text>
  </TouchableOpacity>
);

const CreatePlan = (props: any) => {
  const dispatch = useDispatch();
  const dataState = useSelector(getPlans);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState<any>();
  const [checkList, setList] = useState<string[]>([]);
  const [mode, setMode] = useState<string>();
  const [power, setPower] = useState<string>();

  let theme = props.theme;

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const createObject = () => {
    if (checkList !== [] && mode !== undefined && power !== undefined && date !== undefined) {
      let daysList: string[] = [];
      DATA.filter(function (value) {
        if (checkList.includes(value.id)) {
          daysList = daysList.concat(value.title);
        }
      });
      let days = daysList.join("-").toLowerCase()
      if (days === "сб-вс") {
        days = "выходные дни";
      } else if (days === "пн-вт-ср-чт-пт") {
        days = "будние дни";
      }

      let newPlan = {
        id: Date.now().toString(),
        hour: date.hours,
        min: date.min,
        mode: mode,
        days: days,
        power: power.toLowerCase(),
        isEnabled: true
      };
      let newlist: any;
      if (dataState !== undefined) {
        newlist = dataState.concat(newPlan);
      } else {
        newlist = [newPlan];
      }
      dispatch({ type: 'CHANGE_PLANS', data: newlist });
      storeData("@planner", JSON.stringify(newlist))
    }
    props.onClose();
  }

  useEffect(() => {

  }, []);

  const renderItem = ({ item }: any) => {
    let itemStyle: any;
    let textStyle = {color: "white"};

    if (checkList.includes(item.id)) {
      itemStyle = [styles.check, { backgroundColor: "#3F8EEC" }];
    } else {
      itemStyle = [styles.check, {
        backgroundColor: theme.theme ? "#585858" : "#FFFFFF", borderWidth: 1,
        borderColor: theme.theme ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)", boxSizing: "border-box"
      }];
      textStyle = {color: theme.theme ? "white" : "black"};
    }
    const onPress = (id: any) => {
      let res = checkList;
      if (res.includes(id)) {
        res = res.filter(function (value) {
          return value !== id;
        });
        setList(res);
      } else {
        res = res.concat(id);
        setList(res);
      }
    }
    return (
      <Item
        item={item}
        onPress={() => onPress(item.id)}
        style={itemStyle}
        textStyle={textStyle}
      />
    );
  };

  return (
    <View style={[styles.modalContainer, { backgroundColor: theme.theme ? "rgba(79, 79, 79, 1)" : "rgba(242, 242, 242, 1)" }]}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          {theme.theme ? <PlannerModeNight style={{ marginRight: "4%", alignSelf: "center" }} /> : <PlannerModeDay style={{ marginRight: "4%", alignSelf: "center" }} />}
          <Text style={{ fontSize: 21.96, color: theme.theme ? "white" : "black", alignSelf: "center", justifyContent: "flex-start", fontFamily: "Gilroy" }}>
            Планирование уборки
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPressOut={() => createObject()}>
          <View style={styles.close}>
            {theme.theme ? <DoneNight width={17} height={17} /> : <DoneDay width={17} height={17} />}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.element}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ color: theme.theme ? "white" : "black", fontSize: 20, fontFamily: "Gilroy" }}>
            Режим очистки
          </Text>
        </View>
        <View style={{ justifyContent: "flex-end", alignSelf: "center" }}>
          <ModalDropdown style={{}} defaultValue='Select'
            options={[
              'Auto', 'Edge', 'Spot', 'Random'
            ]}
            onSelect={(index: string, value: string) => { setMode(value) }}
            renderButtonText={(rowData: any) => { return rowData.value }}
          />
        </View>
      </View>
      <Button title="Show Time Picker" onPress={() => {
        setDatePickerVisibility(true);
      }} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        textColor="black"
        isDarkModeEnabled={true}
        onConfirm={(time: any) => {
          console.log(time);
          let hours = time.getHours();
          let min = time.getMinutes();
          if (min < 10) {
            min = "0" + min;
          }
          hideDatePicker();
          setDate({ hours: hours, min: min });
        }}
        onCancel={hideDatePicker}
      />
      {/* <DatePicker
        date={date}
        onDateChange={setDate}
        androidVariant="iosClone"
      /> */}
      <View style={{}}>
        <Text style={{ fontFamily: "Gilroy", color: theme.theme ? "white" : "black", fontSize: 19, paddingHorizontal: "7%", paddingTop: "6%" }}>
          День повторения
        </Text>
        <View style={styles.checkContainer}>
          <FlatList
            scrollEnabled={false}
            numColumns={7}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={checkList}
            contentContainerStyle={styles.checkContainer}
          />
        </View>
      </View>
      <View style={styles.element}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ color: theme.theme ? "white" : "black", fontSize: 20, fontFamily: "Gilroy" }}>
            Мощность
          </Text>
        </View>
        <View style={{ justifyContent: "flex-end", alignSelf: "center" }}>
          <ModalDropdown style={{}} defaultValue='Select'
            options={[
              'Silent', 'Standart', 'Medium', 'Turbo'
            ]}
            onSelect={(index: string, value: string) => { setPower(value) }}
            renderButtonText={(rowData: any) => { return rowData.value }}
          />
          {/* <Text style={{ color: "#4492EE", fontSize: 10, fontFamily: "Gilroy" }}>
            Менюшка
          </Text> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "5%",
    backgroundColor: "#252525",
    flex: 1,
    borderRadius: 20
  },
  element: {
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.2);",
    width: "100%",
    flexDirection: "row",
    marginTop: "3%",
    paddingHorizontal: "7%",
    paddingVertical: "5%"
  },
  check: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "1.5%",
    borderRadius: 16,
    width: 32,
    height: 32
  },
  checkContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: "2%"
  },
  content: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  head: {
    marginLeft: "5%",
    marginTop: "4.7%",
    flexDirection: "row",
    alignItems: "center"
  },
  dropdown: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  dropdown_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.4)',
    textAlignVertical: 'center',
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "flex-start",
    width: "20%",
    marginVertical: "3%",
  },
  header: {
    marginTop: "6%",
    marginBottom: "2%",
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
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "5%",
    borderRadius: 20,
    justifyContent: "flex-start"
  },
  open: {
    alignContent: "center",
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
    marginLeft: "2%",
    color: "white",
    fontSize: 21.96,
    fontFamily: "Gilroy"
  }
});

export default CreatePlan;