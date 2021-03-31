import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, SafeAreaView, FlatList } from 'react-native';
import PlannerMode from "../../../assets/svg/planner.svg";
import Done from "../../../assets/svg/done.svg";

const CreatePlan = (props: any) => {
    return (
        <View style={styles.modalContainer}>
            <View style={styles.header}>
                <View style={{flexDirection:"row"}}>
                    <PlannerMode style={{marginRight:"4%", alignSelf:"center"}} />
                    <Text style={{fontSize: 21.96, color: "#fff", alignSelf:"center", justifyContent:"flex-start", fontFamily: "Gilroy"}}>
                        Планирование уборки
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} onPressOut={() => props.onClose()}>
                    <View style={styles.close}>
                        <Done width={17} height={17} />
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginLeft: "8%",
      marginRight: "8%",
      marginBottom: "5%",
      backgroundColor:"#252525",
      flex: 1,
      borderRadius: 20
    },
    element:{
      borderBottomWidth: 0.5,
      borderColor: "rgba(0, 0, 0, 0.2);",
      width: "100%",
      paddingHorizontal:"10%",
      paddingVertical: "1%"
    },
    content:{
      justifyContent:"space-between",
      flexDirection:"row",
      alignContent: "center",
      alignItems:"center",
    },
    head:{
      marginLeft: "5%",
      marginTop: "4.7%",
      flexDirection: "row",
      alignItems: "center"
    },
    button:{
      alignSelf: "center",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "flex-start",
      width: "20%",
      marginVertical: "3%",
    },
    header:{
      marginTop: "6%",
      marginBottom: "2%",
      marginHorizontal: "5%",
      justifyContent:"space-around",
      flexDirection:"row",
      alignItems:"center",
    },
    list: {
      flex:1,
      justifyContent:"center",
      paddingTop: "5%",
      alignContent: "flex-start",
      alignSelf: "flex-start",
      width: "100%"
    },
    modalContainer: {
      height:"80.6%",
      backgroundColor:"#4F4F4F",
      marginLeft: "8%",
      marginRight: "8%",
      marginBottom: "5%",
      borderRadius: 20,
      justifyContent:"flex-start"
    },
    open: {
      alignContent:"center",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      // marginTop: "5%",
      // backgroundColor: "#000",
      height: 40,
      width: 40,
      borderRadius: 20,
    },
    close: {
      justifyContent:"center",
      alignItems:"center",
      alignSelf: "center",
      marginTop:"5%",
      // backgroundColor: "#000",
      height: 40,
      width: 40,
      borderRadius: 20,
    },
    text: {
      marginLeft: "2%",
      color: "white",
      fontSize:21.96,
      fontFamily: "Gilroy"
    }
  });

export default CreatePlan;