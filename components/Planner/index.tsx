import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PlannerMode from "./PlannerIcon"

const Planner = () => {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <PlannerMode />
          <Text style={styles.text}>
            Режим уборки
          </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#252525",
      flex: 1,
      borderRadius: 20
    },
    head:{
      flexDirection: "row",
    },
    text: {
      color: "white",
    }
});

export default Planner;