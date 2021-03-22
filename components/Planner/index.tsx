import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PlannerMode from "../../assets/svg/planner.svg";

const Planner = (props: any) => {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <PlannerMode />
          <Text style={[styles.text, props.text]}>
            Планирование уборки
          </Text>
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
    head:{
      marginLeft: "5%",
      marginTop: "6%",
      flexDirection: "row",
      alignItems: "center"
    },
    text: {
      marginLeft: "2%",
      color: "white",
      fontSize:21.96
    }
});

export default Planner;