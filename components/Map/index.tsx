import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapIcon from "./MapIcon";

const Map = () => {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <MapIcon />
          <Text style={styles.text}>
            Карта уборки
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

export default Map;