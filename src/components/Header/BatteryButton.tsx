import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import RechargeIcon from "../../../assets/svg/recharge.svg";
import Close from "../../../assets/svg/close.svg";

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
                    <View style={{height:"55.8%", backgroundColor:"#4F4F4F", marginTop:"21.8%", marginLeft: "8%", marginRight: "8%", marginBottom: "2%", borderRadius: 20, justifyContent:"space-around"}}>
                        <View style={styles.header}>
                            <View style={{flexDirection:"row"}}>
                                <Image source={require("../../../assets/img/low-battery.png")} style={{resizeMode:"contain", flex:0.35, marginRight:"2%"}} />
                                <Text style={[props.text, {fontSize:21.96, color: "#fff", alignSelf:"center", justifyContent:"flex-start"}]}>Уровень заряда</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.7} onPressOut={() => setVisible(!modalVisible)}>
                                <View style={styles.close}>
                                    <Close width={17} height={17} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity activeOpacity={0.7} style={{height:178, width:178, backgroundColor:"#59A1F6", borderRadius:89, alignSelf:"center", justifyContent:"center"}}>
                            <Text style={[props.text, {color:"white", fontSize:80.84, alignSelf:"center"}]}>
                                33%
                            </Text>
                        </TouchableOpacity>
                        <Text style={[props.text, {color:"white", fontSize:15.86, alignSelf:"center"}]}>
                            Заряда хватит на 1 час и 27 минут
                        </Text>
                        <TouchableOpacity activeOpacity={0.7} style={styles.recharge}>
                            <RechargeIcon />
                            <Text style={[props.text, {color: "#fff", fontSize: 14.64, alignSelf:"center"}]}>Recharge</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


            <View style={styles.button}>
                <Image source={require("../../../assets/img/low-battery.png")} style={{marginTop: "25%", height:"50%", width:"50%", alignSelf:"center"}} />
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
        marginBottom: "2%",
        // marginTop:"14.5%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent:"center",
        backgroundColor:"#59A1F6",
        borderRadius: 10,
        height: "14.9%",
        width: "27.15%"
    },
    close: {
        justifyContent:"center",
        alignItems:"center",
        marginTop:"5%",
        // backgroundColor: "#000",
        height: 55,
        width: 55,
        borderRadius: 27.5,
    },
    header:{
        justifyContent:"space-around",
        flexDirection:"row",
        alignItems:"center",
    }
});

export default BatteryButton;