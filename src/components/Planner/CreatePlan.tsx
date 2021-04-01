import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, SafeAreaView, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker'
import PlannerMode from "../../../assets/svg/planner.svg";
import Done from "../../../assets/svg/done.svg";
import Power from '../Power';

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

const Item = ({ item, onPress, style }: any) => (
  <TouchableOpacity onPress={() => onPress(item.id)} activeOpacity={0.7} style={style}>
    <Text style={{ fontFamily: "Gilroy", color: 'white' }}>
      {item.title}
    </Text>
  </TouchableOpacity>
);

const CreatePlan = (props: any) => {
  const [date, setDate] = useState(new Date());
  const [checkList, setList] = useState<string[]>([]);
  const [mode, setMode] = useState<object[]>();
  const [power, setPower] = useState<object>();

  useEffect(() => {
  }, [checkList]);
  const renderItem = ({ item }: any) => {
    let itemStyle: any;
    if (checkList.includes(item.id)) {
      itemStyle = [styles.check, { backgroundColor: "#3F8EEC" }];
    } else {
      itemStyle = [styles.check, {
        backgroundColor: "#585858", borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.4)", boxSizing: "border-box"
      }];
    }
    const onPress = (id: any) => {
      let res = checkList;
      console.log(res);
      if (res.includes(id)) {
        res = res.filter(function (value) {
          return value !== id;
        });
        console.log(res);
        setList(res);
      } else {
        res.push(id);
        console.log(res);
        setList(res);
      }
    }
    return (
      <Item
        item={item}
        onPress={() => onPress(item.id)}
        style={itemStyle}
      />
    );
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <PlannerMode style={{ marginRight: "4%", alignSelf: "center" }} />
          <Text style={{ fontSize: 21.96, color: "#fff", alignSelf: "center", justifyContent: "flex-start", fontFamily: "Gilroy" }}>
            Планирование уборки
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPressOut={() => props.onClose()}>
          <View style={styles.close}>
            <Done width={17} height={17} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.element}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ color: "white", fontSize: 20, fontFamily: "Gilroy" }}>
            Режим очистки
          </Text>
        </View>
        <View style={{ justifyContent: "flex-end", alignSelf: "center" }}>
          <Text style={{ color: "#4492EE", fontSize: 10, fontFamily: "Gilroy" }}>
            Менюшка
          </Text>
        </View>
      </View>
      {/* <DatePicker
        date={date}
        onDateChange={setDate}
        androidVariant="iosClone"
      /> */}
      <View style={{}}>
        <Text style={{ fontFamily: "Gilroy", color: "white", fontSize: 19, paddingHorizontal: "7%", paddingTop: "6%" }}>
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
          <Text style={{ color: "white", fontSize: 20, fontFamily: "Gilroy" }}>
            Мощность
          </Text>
        </View>
        <View style={{ justifyContent: "flex-end", alignSelf: "center" }}>
          <DropDownPicker
            items={[
              { label: 'Silent', value: 'silent'},
              { label: 'Standart', value: 'standart'},
              { label: 'Medium', value: 'medium'},
              { label: 'Turbo', value: 'turbo'}
            ]}
            defaultValue={power}
            containerStyle={{ height: 40, width: 160 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={item => setPower(item)}
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
    backgroundColor: "#4F4F4F",
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