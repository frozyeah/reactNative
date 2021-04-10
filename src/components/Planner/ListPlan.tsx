import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, ActivityIndicator, FlatList, Dimensions } from 'react-native';

import { getData, storeData } from "../../actions/asyncStorage";
import PlannerMode from "../../../assets/svg/planner.svg";
import Close from "../../../assets/svg/closeplan.svg";
import Plus from "../../../assets/svg/plus.svg";
import ToggleSwitch from '../ToggleSwitch';

import { SwipeRow } from 'react-native-swipe-list-view';
import { useSelector, useDispatch } from 'react-redux';
import { getPlans } from "../../redux/actions";

const DATA = [
  {
    id: "1",
    hour: "9",
    min: "00",
    mode: "Auto",
    days: "будние дни",
    power: "standart",
    isEnabled: true
  },
  {
    id: "2",
    hour: "13",
    min: "00",
    mode: "Random",
    days: "пт-сб-вс",
    power: "turbo",
    isEnabled: false
  },
  {
    id: "3",
    hour: "13",
    min: "00",
    mode: "Random",
    days: "пт-сб-вс",
    power: "turbo",
    isEnabled: true
  },
  {
    id: "4",
    hour: "13",
    min: "00",
    mode: "Random",
    days: "пт-сб-вс",
    power: "turbo",
    isEnabled: true
  },
  {
    id: "5",
    hour: "13",
    min: "00",
    mode: "Random",
    days: "пт-сб-вс",
    power: "turbo",
    isEnabled: false
  },
  {
    id: "6",
    hour: "13",
    min: "00",
    mode: "Random",
    days: "пт-сб-вс",
    power: "turbo",
    isEnabled: true
  },
  {
    id: "7",
    hour: "13",
    min: "00",
    mode: "Random",
    days: "пт-сб-вс",
    power: "turbo",
    isEnabled: false
  },
  {
    id: "8",
    hour: "13",
    min: "00",
    mode: "Random",
    days: "пт-сб-вс",
    power: "turbo",
    isEnabled: true
  },
]
// onPress={() => onPress(item)}

const Item = ({ item, onPress }: any) => (
  <TouchableOpacity activeOpacity={1} style={styles.element}>
    <View style={{ flexDirection: "column" }}>
      <Text style={{ color: "white", fontSize: 25, fontFamily: "Gilroy" }}>
        {item.hour + ":" + item.min}
      </Text>
      <Text style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Gilroy" }}>
        {item.mode + ", " + item.days + ", " + item.power}
      </Text>
    </View>
    <ToggleSwitch
      isOn={item.isEnabled}
      onToggle={() => onPress()}
      onColor='#4cd137'
      offColor='rgba(120, 120, 128, 0.32)'
      label=""
      style={{}}
      labelStyle={{}}
    />
  </TouchableOpacity>
);

const ListPlan = (props: any) => {
  const dispatch = useDispatch();
  const [dataState, setData] = useState<object[]>(useSelector(getPlans));
  const [animationIsRunning, setAnim] = useState(false);
  const rowTranslateAnimatedValues: any = {};

  // storeData('@planner', JSON.stringify(DATA));
  if (dataState !== undefined) {
    dataState.forEach((item: any) => {
      rowTranslateAnimatedValues[item.id] = new Animated.Value(1);
    });
  }

  useEffect(() => {
    return function cleanup() {
      storeData('@planner', JSON.stringify(dataState));
    }
  }, []);

  const onSwipeValueChange = (swipeData: any) => {
    const { key, value } = swipeData;
    if (value < -105 && !animationIsRunning) {
      setAnim(true);
      Animated.timing(rowTranslateAnimatedValues[key], {
        toValue: 200,
        duration: 0,
        useNativeDriver: false
      }).start(() => {
        let newData = [...dataState];
        newData = newData.filter((a: any) => {
          let iid = a.id;
          return iid !== key;
        });
        dispatch({ type: 'CHANGE_PLANS', data: newData });
        setData(newData);
        setAnim(false);
      });
    }
  };

  const renderItem = ({ item }: any) => {
    const onPress = () => {
      let res = dataState;
      let objIndex = res.findIndex(((obj: any) => obj.id === item.id));
      let temp = Object.assign(item, { isEnabled: !item.isEnabled });
      res = res.map((item, index) => index === objIndex ? temp : item);
      setData(res);
      dispatch({ type: 'CHANGE_PLANS', data: dataState });
    }

    return (
      <Animated.View style={{
      }}>
        <SwipeRow onSwipeValueChange={({ isOpen, direction, value }) => {
          let key = item.id;
          onSwipeValueChange({ isOpen, direction, value, key })
        }} rightOpenValue={-65} disableRightSwipe={true}>
          <View style={{ backgroundColor: "#b32400", paddingHorizontal: "2%", flexDirection: "row-reverse", height: "100%", alignItems: "center" }}>
            <Text style={{ color: "white" }}>Delete</Text>
          </View>
          <Item
            item={item}
            onPress={onPress}
          />
        </SwipeRow>
      </Animated.View>
    );
  }

  return (
    <View style={styles.modalContainer}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <PlannerMode style={{ marginRight: "4%", alignSelf: "center" }} />
          <Text style={{ fontSize: 21.96, color: "#fff", alignSelf: "center", justifyContent: "flex-start", fontFamily: "Gilroy" }}>
            Планирование уборки
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPressOut={props.closeModal}>
          <View style={styles.close}>
            <Close width={17} height={17} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          style={{
            borderBottomWidth: 0.5,
            borderColor: "rgba(0, 0, 0, 0.2)"
          }}
          data={dataState}
          renderItem={renderItem}
          ListHeaderComponent={View}
          ListHeaderComponentStyle={{ borderBottomWidth: 0.5, borderColor: "rgba(0, 0, 0, 0.2)" }}
        />
        <TouchableOpacity activeOpacity={0.7} onPressOut={props.setList} style={[styles.button, { backgroundColor: "#59A1F6", borderRadius: 20 }]}>
          <Plus width={33} height={33} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "5%",
    justifyContent: "center",
    backgroundColor: "#252525",
    flex: 1,
    borderRadius: 20
  },
  element: {
    backgroundColor: "#4F4F4F",
    borderBottomWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.2)",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
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
    alignItems: "center",
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
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
    maxHeight: "85%",
    justifyContent: "center",
    paddingTop: "5%",
    alignContent: "flex-start",
    alignSelf: "flex-start",
    width: "100%",
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
    backgroundColor: "#000",
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
    color: "white",
    fontSize: 21.96,
    fontFamily: "Gilroy"
  }
});

export default ListPlan;