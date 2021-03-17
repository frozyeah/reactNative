import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ModeIcon from "./ModeIcon";

const Mode = () => {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
        <ModeIcon />
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
      flex: 2,
      borderRadius: 20
    },
    head:{
      flexDirection: "row",
    },
    text: {
      color: "white",
    }
});

export default Mode;