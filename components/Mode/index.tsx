import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ModeIcon from "./ModeIcon";

const Mode = (props: any) => {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
        <ModeIcon />
        <Text style={[styles.text, props.text]}>
          Режим уборки
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
      flex: 2,
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
      fontSize:21.96
    }
});

export default Mode;