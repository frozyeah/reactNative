import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import moment from 'moment';
import { TimePicker } from 'react-native-wheel-picker-android'

import ArrowNight from "../../../assets/svg/night/dropdown-arrow.svg";
import ArrowDay from "../../../assets/svg/day/dropdown-arrow.svg";

import PlannerModeNight from "../../../assets/svg/night/planner.svg";
import PlannerModeDay from "../../../assets/svg/day/planner.svg";

import DoneNight from "../../../assets/svg/night/done.svg";
import DoneDay from "../../../assets/svg/day/done.svg";

import { storeData } from '../../actions/asyncStorage';
import { useSelector, useDispatch } from 'react-redux';
import { getPlans } from "../../redux/actions";
import { vh, vw } from 'react-native-expo-viewport-units';

const mins = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];

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
    <Text style={[{ fontFamily: "Gilroy-Medium" }, textStyle]}>
      {item.title}
    </Text>
  </TouchableOpacity>
);

const CreatePlan = (props: any) => {
  const dispatch = useDispatch();
  const dataState = useSelector(getPlans);

  const [initDate, setInit] = useState<any>('0');

  const [date, setDate] = useState<any>();
  const [checkList, setList] = useState<string[]>([]);
  const [mode, setMode] = useState<string>("Auto");
  const [power, setPower] = useState<string>("Silent");

  let theme = props.theme;

  const createObject = () => {
    if (checkList.length !== 0 && mode !== undefined && power !== undefined && date !== undefined) {
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
      } else if (days === "пн-вт-ср-чт-пт-сб-вс") {
        days = "каждый день";
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

  const renderRow = (option: string, index: string, isSelected: boolean) => (
    <View style={{}}>
      <Text style={{
        marginHorizontal: 5,
        marginVertical: 2.5,
        alignSelf: 'center', fontSize: 14,
        color: isSelected ? (theme.theme ? "#fff" : "#000") :
          (theme.theme ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)")
      }}>
        {option}
      </Text>
    </View>
  )

  const renderItem = ({ item }: any) => {
    let itemStyle: any;
    let textStyle = { color: "white" };

    if (checkList.includes(item.id)) {
      itemStyle = [styles.check, { backgroundColor: "#3F8EEC" }];
    } else {
      itemStyle = [styles.check, {
        backgroundColor: theme.theme ? "#585858" : "#FFFFFF", borderWidth: 1,
        borderColor: theme.theme ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)", boxSizing: "border-box"
      }];
      textStyle = { color: theme.theme ? "white" : "black" };
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
          {theme.theme ? <PlannerModeNight height={vw(5)} width={vw(5)} style={{ marginRight: "4%", alignSelf: "center" }} /> : <PlannerModeDay height={vw(5)} width={vw(5)} style={{ marginRight: "4%", alignSelf: "center" }} />}
          <Text style={{ fontSize: vw(4.8), color: theme.theme ? "white" : "black", alignSelf: "center", justifyContent: "flex-start", fontFamily: "Gilroy-Medium" }}>
            Планирование уборки
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPressOut={() => createObject()}>
          <View style={styles.close}>
            {theme.theme ? <DoneNight width={vw(4)} height={vw(4)} /> : <DoneDay width={vw(4)} height={vw(4)} />}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.element}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ color: theme.theme ? "white" : "black", fontSize: vw(4.8), fontFamily: "Gilroy-Medium" }}>
            Режим очистки
          </Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <ModalDropdown style={{ alignSelf: "center" }} defaultValue="Auto" defaultIndex={0}
            options={[
              'Auto', 'Edge', 'Spot', 'Random'
            ]}
            // @ts-ignore
            renderRightComponent={theme.theme ? () => <ArrowNight style={{ marginLeft: vw(2.4) }} /> :
              () => <ArrowDay style={{ marginLeft: vw(2.4) }} />}
            dropdownStyle={{
              borderWidth: 0, justifyContent: "space-between", backgroundColor: theme.theme ? "rgba(93, 93, 93, 1)" :
                "rgba(255, 255, 255, 1)", height: 104, borderRadius: 10, alignContent: "center", alignSelf: "center"
            }}
            textStyle={{ alignSelf: 'center', fontSize: 14, color: theme.theme ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 1)" }}
            onSelect={(index: string, value: string) => { setMode(value) }}
            renderRow={renderRow}
            renderSeparator={() => <View style={{ width: "100%", height: 0, borderWidth: 0.5, borderColor: "rgba(0, 0, 0, 0.2)" }} />}
          />
        </View>
      </View>
      <View style={{ marginTop: "4.5%", marginBottom: "0.5%" }}>
        <TimePicker
          hideIndicator={true}
          minutes={mins}
          format24={false}
          // @ts-ignore
          initDate={initDate}
          selectedItemTextSize={vw(4.8)}
          selectedItemTextFontFamily={"Gilroy-Medium"}
          itemTextColor={theme.theme ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)"}
          itemTextSize={vw(4.8)}
          itemTextFontFamily={"Gilroy-Medium"}
          selectedItemTextColor={theme.theme ? "white" : "black"}
          onTimeSelected={(time) => {
            let hours = time.getHours().toString();
            let min: any = time.getMinutes();
            if (min < 10) {
              min = "0" + min.toString();
            }
            setDate({ hours: hours, min: min });
            setInit(time);
          }} />
      </View>
      <View style={{ borderTopWidth: 0.5, borderColor: "rgba(0, 0, 0, 0.2)" }}>
        <Text style={{ fontFamily: "Gilroy-Medium", color: theme.theme ? "white" : "black", fontSize: vw(4.8), paddingHorizontal: "7%", paddingTop: "6%" }}>
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
          <Text style={{ color: theme.theme ? "white" : "black", fontSize: vw(4.8), fontFamily: "Gilroy-Medium" }}>
            Мощность
          </Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <ModalDropdown
            style={{ alignSelf: "center" }}
            defaultValue='Silent'
            // @ts-ignore
            renderRightComponent={theme.theme ? () => <ArrowNight style={{ marginLeft: vw(2.4) }} /> :
              () => <ArrowDay style={{ marginLeft: vw(2.4) }} />}
            defaultIndex={0}
            options={[
              'Silent', 'Standart', 'Medium', 'Turbo'
            ]}
            dropdownStyle={{
              borderWidth: 0, justifyContent: "center", backgroundColor: theme.theme ? "rgba(93, 93, 93, 1)" :
                "rgba(255, 255, 255, 1)", height: 104, borderRadius: 10, alignContent: "center", alignSelf: "center"
            }}
            textStyle={{ alignSelf: 'center', fontSize: 14, color: theme.theme ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 1)" }}
            onSelect={(index: string, value: string) => { setPower(value) }}
            renderRow={renderRow}
            renderSeparator={() => <View style={{ width: "100%", height: 0, borderWidth: 0.5, borderColor: "rgba(0, 0, 0, 0.2)" }} />}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: vw(8.3),
    marginRight: vw(8.3),
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
    paddingVertical: vh(2.22)
  },
  check: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "1.5%",
    borderRadius: vw(4.135),
    width: vw(8.27),
    height: vw(8.27)
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
    marginBottom: "4%",
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
    marginLeft: vw(8.3),
    marginRight: vw(8.3),
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
    fontSize: vw(4.8),
    fontFamily: "Gilroy-Medium"
  }
});

export default CreatePlan;