import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SubHeader from '../SubHeader';
import { getMode } from "../../../redux/actions";
import { useSelector } from 'react-redux';


const Info = (props: any) => {

  const theme = useSelector(getMode);

  return (
    <View style={[styles.container, { backgroundColor: theme ? "black" : "white" }]}>
      <SubHeader theme={theme} nav={props.navigation} />
      <View style={{ flex: 8.7 }}>
        <View style={styles.head}>
          <Text style={{ fontSize: 19.96, color: theme ? "white" : "black", fontFamily: "Gilroy" }}>
            Информация
          </Text>
        </View>
        <View style={{ flex: 10 }}>
          <Text style={{ fontSize: 12.96, color: theme ? "white" : "black", fontFamily: "Gilroy", paddingHorizontal: "2%", paddingTop: "2%" }}>
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
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: "#4F4F4F",
    width: "100%"
  }
})

export default Info;