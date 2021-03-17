import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PowerIcon from "./PowerIcon";

const Power = () => {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <PowerIcon />
          <Text style={styles.text}>
            Мощность всасывания
          </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#252525",
      flex: 2,
      borderRadius: 20,
    },
    head:{
      flexDirection: "row",
    },
    text: {
      color: "white",
    }
});

export default Power;