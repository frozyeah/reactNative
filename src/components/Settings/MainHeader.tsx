import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import Home from "../../../assets/svg/home.svg";
import Edit from "../../../assets/svg/pen.svg";

const MainHeader = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.avatar}>
                        <Image source={require("../../../assets/img/avatar.png")} style={{height:"100%", width:"100%", alignSelf:"center"}} />
                    </View>
                </TouchableOpacity>
                <View style={styles.text}>
                    <Text style={[{fontSize: 16.86, color:"#fff"}, props.text]}>Nick Korzh</Text>
                </View>
                <View style={{justifyContent:"center"}} >
                    <TouchableOpacity style={styles.edit} activeOpacity={0.7}>
                        <Edit style={{height:"100%", width:"100%", alignSelf:"center"}} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.right} onPressOut={() => props.nav.navigate('MainScreen')}>
                <Home height={25} width={25} />
            </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        marginLeft: "8%",
        marginRight: "8%",
        marginBottom: "2%",
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    avatar: {
        backgroundColor: "#212121",
        height: 55,
        width: 55,
        borderRadius: 27.5,
    },
    edit: {
        backgroundColor: "#212121",
        height: 35.38,
        width: 35.38,
        borderRadius: 17.69,
        alignSelf:"center",
        justifyContent:"center",
        marginLeft:"12.3%"
    },
    button: {
        backgroundColor: "#212121",
        height: 55,
        width: 55,
        borderRadius: 27.5,
    },
    left: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    text:{
        marginLeft: "3%",
        alignSelf: "center",
    },
    right: {
        backgroundColor: "#212121",
        height: 55,
        width: 55,
        borderRadius: 27.5,
        justifyContent: "center",
        alignItems: "center",
        // alignSelf:"flex-end"
    }
});

export default MainHeader;