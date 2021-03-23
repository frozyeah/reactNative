import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
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

          <TouchableOpacity activeOpacity={0.7} style={[styles.radio, {backgroundColor: "#3F8EEC"}]}>
            <Auto fill="red" />
            <Text style={[props.text, {color:"white"}]}>
              Auto
            </Text>
          </TouchableOpacity>


          <TouchableOpacity activeOpacity={0.7} style={[styles.radio, {backgroundColor: "#4F4F4F"}]}>
            <Edge fill={"red"} />
            <Text style={[props.text, {color:"#418FED"}]}>
              Edge
            </Text>
          </TouchableOpacity>


          <TouchableOpacity activeOpacity={0.7} style={[styles.radio, {backgroundColor: "#4F4F4F"}]}>
            <Spot />
            <Text style={[props.text, {color:"#418FED"}]}>
              Spot
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={[styles.radio, {backgroundColor: "#4F4F4F"}]}>
            <Random />
            <Text style={[props.text, {color:"#418FED"}]}>
              Random
            </Text>
          </TouchableOpacity>
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
      justifyContent: "space-between"
    },
    head:{
      marginLeft: "5%",
      marginTop: "4.7%",
      flexDirection: "row",
      alignItems: "center"
    },
    radioContainer:{
      flexDirection: "row",
      justifyContent: "space-around",
      paddingBottom: "2%"
    },
    radio:{
      alignItems:"center",
      justifyContent: "center",
      borderRadius: 10,
      width:65,
      height:65
    },    
    text: {
      marginLeft: "2%",
      color: "white",
      fontSize:21.96
    },
    buttonText: {
      color: "white"
    }
});

export default Mode;