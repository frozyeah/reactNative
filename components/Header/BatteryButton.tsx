import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from 'react-native';

const BatteryButton = () => {
    const [modalVisible, setVisible] = useState(false);
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={() => {
            setVisible(!modalVisible);
          }}>
            <Modal animationType="slide"
            transparent={true}
            visible={modalVisible}>
                <View style={{backgroundColor:"red", width:"50%", height:"50%", alignSelf:"center"}}></View>
            </Modal>
            <View style={styles.button}>
                <Image source={require("../../assets/img/low-battery.png")} style={{marginTop: "25%", height:"50%", width:"50%", alignSelf:"center"}} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: "33%"
    },
    button: {
        backgroundColor: "#212121",
        height: 55,
        width: 55,
        borderRadius: 27.5,
    }
});

export default BatteryButton;