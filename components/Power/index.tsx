import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PowerIcon from "../../assets/svg/power.svg";

const Power = (props: any) => {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <PowerIcon />
          <Text style={[styles.text, props.text]}>
            Мощность всасывания
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
      borderRadius: 20,
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

export default Power;