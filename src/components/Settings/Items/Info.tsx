import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SubHeader from '../SubHeader';

const Info = (props: any) => {
    return(
        <View style={styles.container}>
            <SubHeader nav={props.navigation} />
            <View style={{flex:8.7}}>
                <View style={styles.head}>
                    <Text style={{fontSize:19.96, color: "white", fontFamily: "Gilroy"}}>
                        Информация
                    </Text>
                </View>
                <View style={{flex:10}}>
                    <Text style={{fontSize:12.96, color: "white", fontFamily: "Gilroy", paddingHorizontal: "2%", paddingTop:"2%"}}>
                        Автоматический робот пылесос - это полноценный пылесос. 
                        Его основное отличие от обычных  пылесосов в том,
                        что он способен убирать самостоятельно и автономно. 
                        Робот не нужно заранее  программировать или вводить 
                        конфигурацию помещения. Он умеет  ориентироваться
                        самостоятельно с  помощью встроенных сенсоров, камер 
                        и дальномеров. Разные производители по-разному
                        делают систему навигации, но все они отвечают 
                        одному критерию: робот самостоятельно
                        перемещается и  ориентируется в квартире.
                    </Text>
                </View>
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
        alignItems:"center",
        borderBottomWidth: 0.5,
        borderColor: "#4F4F4F",
        width:"100%"
    }
})

export default Info;