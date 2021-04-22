import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SubHeader from '../SubHeader';
import { getMode } from "../../../redux/actions";
import { useSelector } from 'react-redux';
import { vh, vw } from 'react-native-expo-viewport-units';


const Info = (props: any) => {

  const theme = useSelector(getMode);

  return (
    <View style={[styles.container, { backgroundColor: theme ? "black" : "white" }]}>
      <SubHeader theme={theme} nav={props.navigation} />
      <View style={{}}>
        <View style={[styles.head, { borderColor: theme ? "#4F4F4F" : "rgba(0, 0, 0, 0.2)" }]}>
          <Text style={{ fontSize: vw(4.8), color: theme ? "white" : "black", fontFamily: "Gilroy-Medium" }}>
            Информация
          </Text>
        </View>
        <View style={{}}>
          <Text style={{ fontSize: vw(3.2), color: theme ? "white" : "black", fontFamily: "Gilroy-Medium", paddingHorizontal: vw(3.74), paddingTop: vw(4.8) }}>
            Автоматический робот пылесос - это полноценный пылесос.
            Его основное отличие от обычных  пылесосов в том,
            что он способен убирать самостоятельно и автономно.
            Робот не нужно заранее  программировать или вводить
            конфигурацию помещения. Он умеет  ориентироваться
            самостоятельно с  помощью встроенных сенсоров, камер
            и дальномеров. Разные производители по-разному
            делают систему навигации, но все они отвечают
            одному критерию: робот самостоятельно
            перемещается и  ориентируется в квартире.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    alignItems: "center",
    borderBottomWidth: 0.5,
    paddingBottom: vw(4.8),
    width: "100%"
  }
})

export default Info;