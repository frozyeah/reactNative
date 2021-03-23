import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PowerIcon from "../../assets/svg/power.svg";
import Silent from "../../assets/svg/silent.svg";
import Turbo from "../../assets/svg/turbo.svg";

const Power = (props: any) => {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <PowerIcon />
          <Text style={[styles.text, props.text]}>
            Мощность всасывания
          </Text>
        </View>

        <View style={styles.radioContainer}>

          <TouchableOpacity activeOpacity={0.7} style={[styles.radio, {backgroundColor: "#4F4F4F"}]}>
            <Silent />
            <Text style={[props.text, {color:"#418FED"}]}>
              Silent
            </Text>
          </TouchableOpacity>


          <TouchableOpacity activeOpacity={0.7} style={[styles.radio, {backgroundColor: "#4F4F4F"}]}>
          <Silent />
            {/* <Image source={require("../../assets/img/standart.png")}/> */}
            <Text style={[props.text, {color:"#418FED"}]}>
              Standart
            </Text>
          </TouchableOpacity>


          <TouchableOpacity activeOpacity={0.7} style={[styles.radio, {backgroundColor: "#4F4F4F"}]}>
          <Silent />
            {/* <Image source={require("../../assets/img/medium.png")}/> */}
            <Text style={[props.text, {color:"#418FED"}]}>
              Medium
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={[styles.radio, {backgroundColor: "#3F8EEC"}]}>
            <Turbo />
            <Text style={[props.text, {color:"white"}]}>
              Turbo
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
    text: {
      marginLeft: "2%",
      color: "white",
      fontSize:21.96
    },
    radioContainer:{
      flexDirection: "row",
      justifyContent: "space-around",
      paddingBottom:"2%"
    },
    buttonText: {
      color: "white"
    },
    radio:{
      alignItems:"center",
      justifyContent: "center",
      borderRadius: 10,
      width:65,
      height:65
    },  
});

export default Power;