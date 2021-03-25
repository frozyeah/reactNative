import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import SubHeader from '../SubHeader';

const ManageVacuum = (props: any) => {
    return(
        <View style={styles.container}>
            <SubHeader nav={props.navigation} />
            <View style={{flex:8.7, justifyContent: "flex-start"}}>
                <View style={styles.head}>
                    <Text style={{fontSize:19.96, color: "white"}}>
                        Управление роботом-пылесосом
                    </Text>
                </View>
                <Image source={require("../../../../assets/img/vacuum-print.png")} style={{width:328,height:234, alignSelf:"center"}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#000000",
    },
    head:{
        flex: 1,
        alignSelf: "center",
    }
})

export default ManageVacuum;