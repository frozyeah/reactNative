import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ModeIcon from "../../assets/svg/mode.svg";
import Auto from "../../assets/svg/auto.svg";
import Edge from "../../assets/svg/edge.svg";
import Spot from "../../assets/svg/spot.svg";
import Random from "../../assets/svg/random.svg";


const Mode = (props: any) => {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <ModeIcon />
          <Text style={[styles.text, props.text]}>
            Режим уборки
          </Text>
        </View>
        <View style={styles.radioContainer}>

          <View style={[styles.radio, {backgroundColor: "#4F4F4F"}]}>
            <Auto fill="red" />
            <Text>
              Auto
            </Text>
          </View>


          <View style={[styles.radio, {backgroundColor: "#4F4F4F"}]}>
            <Edge fill={"red"} />
            <Text>
              Edge
            </Text>
          </View>


          <View style={[styles.radio, {backgroundColor: "#4F4F4F"}]}>
            <Spot />
            <Text>
              Spot
            </Text>
          </View>

          <View style={[styles.radio, {backgroundColor: "#4F4F4F"}]}>
            <Random />
            <Text>
              Random
            </Text>
          </View>
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
    radioContainer:{
      flexDirection: "row",
      justifyContent: "space-around"
    },
    radio:{
      alignItems:"center",
      borderRadius: 10,
      width:"22%",
      height:"100%"
    },    
    text: {
      marginLeft: "2%",
      color: "white",
      fontSize:21.96
    }
});

export default Mode;