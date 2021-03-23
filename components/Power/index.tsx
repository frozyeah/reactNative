import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
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

          <View style={[styles.radio, {backgroundColor: "#4F4F4F"}]}>
            <Silent />
            <Text>
              Silent
            </Text>
          </View>


          <View style={[styles.radio, {backgroundColor: "#4F4F4F"}]}>
            <Image source={require("../../assets/img/standart.png")}/>
            <Text>
              Standart
            </Text>
          </View>


          <View style={[styles.radio, {backgroundColor: "#4F4F4F"}]}>
            <Image source={require("../../assets/img/medium.png")}/>
            <Text>
              Medium
            </Text>
          </View>

          <View style={[styles.radio, {backgroundColor: "#4F4F4F"}]}>
            <Turbo />
            <Text>
              Turbo
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
    text: {
      marginLeft: "2%",
      color: "white",
      fontSize:21.96
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
});

export default Power;