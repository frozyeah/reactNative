import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import BatteryButton from "./BatteryButton";
import SettingsButton from "./SettingsButton";

const Header = (props: any) => {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.avatar}>
            <Image source={require("../../assets/img/avatar.png")} style={{height:"100%", width:"100%", alignSelf:"center"}} />
          </View>
          </TouchableOpacity>
          <View style={styles.text}>
            <Text style={[{fontSize: 13.42, color:"rgba(255, 255, 255, 0.4)"}, props.text]}>Hello</Text>
            <Text style={[{fontSize: 15.86, color:"#fff"}, props.text]}>Nick Korzh</Text>
          </View>
        </View>
        <View style={styles.right}>
          <BatteryButton text={props.text}/>
          <SettingsButton />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: "5%",
      marginLeft: "8%",
      marginRight: "8%",
      marginBottom: "2%",
      alignItems: "center",
      flex: 1,
      flexDirection: "row"
    },
    avatar: {
      backgroundColor: "#212121",
      height: 55,
      width: 55,
      borderRadius: 27.5,
    },
    left: {
      flexDirection: "row"
    },
    text:{
      marginLeft: "3%",
      alignSelf: "center"
    },
    right: {
      flexDirection: "row"
    }
});

export default Header;