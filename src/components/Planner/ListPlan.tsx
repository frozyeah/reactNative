import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

import { getData, storeData } from "../../actions/asyncStorage";

import PlannerModeNight from "../../../assets/svg/night/planner.svg";
import PlannerModeDay from "../../../assets/svg/day/planner.svg";

import CloseNight from "../../../assets/svg/night/closeplan.svg";
import CloseDay from "../../../assets/svg/day/closeplan.svg";

import Plus from "../../../assets/svg/plus.svg";
import ToggleSwitch from '../ToggleSwitch';

import { SwipeRow } from 'react-native-swipe-list-view';
import { useSelector, useDispatch } from 'react-redux';
import { getPlans } from "../../redux/actions";


const Item = ({ item, onPress, theme }: any) => (
  <TouchableOpacity activeOpacity={1} style={[styles.element, { backgroundColor: theme ? "#4F4F4F" : "rgba(242, 242, 242, 1)" }]}>
    <View style={{ flexDirection: "column" }}>
      <Text style={{ color: theme ? "white" : "black", fontSize: 25, fontFamily: "Gilroy-Medium" }}>
        {item.hour + ":" + item.min}
      </Text>
      <Text style={{ color: theme ? "rgba(255,255,255,0.4)" : "rgba(0, 0, 0, 0.4)", fontFamily: "Gilroy-Medium" }}>
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

  const theme = props.theme;

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
            theme={theme.theme}
          />
        </SwipeRow>
      </Animated.View>
    );
  }

  return (
    <View style={[styles.modalContainer, { backgroundColor: theme.theme ? "rgba(79, 79, 79, 1)" : "rgba(242, 242, 242, 1)" }]}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          {theme.theme ? <PlannerModeNight height={vw(5)} width={vw(5)} style={{ marginRight: "4%", alignSelf: "center" }} /> : <PlannerModeDay height={vw(5)} width={vw(5)} style={{ marginRight: "4%", alignSelf: "center" }} />}
          <Text style={{ fontSize: vw(4.8), color: theme.theme ? "white" : "black", alignSelf: "center", justifyContent: "flex-start", fontFamily: "Gilroy-Medium" }}>
            Планирование уборки
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPressOut={props.closeModal}>
          <View style={styles.close}>
            {theme.theme ? <CloseNight width={vw(3.47)} height={vw(3.47)} /> : <CloseDay width={vw(3.47)} height={vw(3.47)} />}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          style={{
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
    marginLeft: vw(8.3),
    marginRight: vw(8.3),
    justifyContent: "center",
    flex: 1,
    borderRadius: 20
  },
  element: {
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
    marginLeft: vw(8.3),
    marginRight: vw(8.3),
    marginBottom: "5%",
    borderRadius: vw(5.34),
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