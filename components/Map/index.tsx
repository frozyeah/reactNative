import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapIcon from "./MapIcon";

const Map = (props: any) => {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <MapIcon />
          <Text style={[styles.text, props.text]}>
            Карта уборки
          </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginLeft: "8%",
      marginRight: "8%",
      marginBottom: "2%",
      backgroundColor:"#252525",
      flex: 1,
      borderRadius: 20
    },
    head:{
      marginLeft: "5%",
      marginTop: "6%",
      flexDirection: "row",
    },
    text: {
      marginLeft: "2%",
      color: "white",
      fontSize: 21.96
    }
});

export default Map;