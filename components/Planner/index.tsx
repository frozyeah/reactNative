import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import PlannerMode from "../../assets/svg/planner.svg";
import Back from "../../assets/svg/back.svg";

const Planner = (props: any) => {
  const [modalVisible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.head}>
          <PlannerMode />
          <Text style={[styles.text, props.text]}>
            Планирование уборки
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPressOut={() => setVisible(!modalVisible)}>
          <View style={styles.close}>
            <Back width={17} height={17} />
          </View>
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
      backgroundColor:"#252525",
      flex: 1,
      borderRadius: 20
    },
    content:{
      justifyContent:"space-between",
      flexDirection:"row",
      alignItems:"center",
    },
    head:{
      marginLeft: "5%",
      marginTop: "4.7%",
      flexDirection: "row",
      alignItems: "center"
    },
    close: {
      justifyContent:"flex-end",
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
      fontSize:21.96
    }
});

export default Planner;