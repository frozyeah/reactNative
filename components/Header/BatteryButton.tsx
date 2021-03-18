import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from 'react-native';

const BatteryButton = (props: any) => {
    const [modalVisible, setVisible] = useState(false);

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPressOut={() => {
            setVisible(!modalVisible);
          }}>
            

            <Modal animationType="fade"
            transparent={true}
            visible={modalVisible}>
                <View style={{backgroundColor:"rgba(38,38,38,0.6)", width:"100%", height:"100%", alignSelf:"center"}}>
                    <View style={{height:"48.8%", backgroundColor:"#4F4F4F", marginTop:"21.8%", marginLeft: "8%", marginRight: "8%", marginBottom: "2%", borderRadius: 20}}>
                        <View style={styles.header}>
                            <Image source={require("../../assets/img/low-battery.png")} style={{}} />
                            <Text style={[props.text, {fontSize:21.96, color: "#fff"}]}>Уровень заряда</Text>
                            <View style={styles.close}>
                                <TouchableOpacity activeOpacity={0.7} onPressOut={() => setVisible(!modalVisible)}>
                                    <Text style={[props.text, {color:"#FFF", fontSize: 50}]}>x</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{height:178, width:178, backgroundColor:"#59A1F6", borderRadius:89, alignSelf:"center", alignContent:"center"}}>
                            <Text style={[props.text, {color:"white", fontSize:87.84, alignSelf:"center"}]}>
                                33%
                            </Text>
                        </View>
                        <Text style={[props.text, {color:"white", fontSize:15.86, alignSelf:"center"}]}>
                            Заряда хватит на 1 час и 27 минут
                        </Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <View style={styles.button}>
                                <Text style={[props.text, {color: "#fff", fontSize: 14.64, marginTop:"5%", marginBottom:"5%"}]}>Recharge</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
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
    },
    recharge:{
        // marginTop:"14.5%",
        alignItems: "center",
        backgroundColor:"#59A1F6",
        borderRadius: 10
    },
    close: {
        backgroundColor: "#4F4F4F",
        height: 55,
        width: 55,
        borderRadius: 27.5,

    },
    header:{
        flexDirection:"row"
    }
});

export default BatteryButton;