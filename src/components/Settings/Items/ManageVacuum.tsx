import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import SubHeader from '../SubHeader';

const DATA = [
    {
        id: 1,
        title: "Фильтр",
        bottomText: "Замените через примерно 142h",
        percents: "94%"
    },
    {
        id: 2,
        title: "Боковая щетка",
        bottomText: "Замените через примерно 192h",
        percents: "96%"
    },
    {
        id: 3,
        title: "Основная щетка",
        bottomText: "Замените через примерно 292h",
        percents: "97%"
    },
    {
        id: 4,
        title: "Датчики",
        bottomText: "Убрать через примерно 22h",
        percents: "73%"
    }
]

const Item = (item: any) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.element}>
      <View style={{flexDirection: "column"}}>
        <Text style={{color:"white", fontSize:20, fontFamily: "Gilroy"}}>
          {item.title}
        </Text>
        <Text style={{color:"rgba(255,255,255,0.5)", fontFamily: "Gilroy"}}>
          {item.bottomText}
        </Text>
      </View>
      <View style={{justifyContent: "flex-end", alignSelf:"center"}}>
          <Text style={{color:"#4492EE", fontSize:32, fontFamily: "Gilroy"}}>
              {item.percents}
          </Text>
      </View>
    </TouchableOpacity>
);

const ManageVacuum = (props: any) => {
    return(
        <View style={styles.container}>
            <SubHeader nav={props.navigation} />
            <View style={{flex:8.7, justifyContent: "flex-start"}}>
                <View style={styles.head}>
                    <Text style={{fontSize:19.96, color: "white", fontFamily: "Gilroy"}}>
                        Управление роботом-пылесосом
                    </Text>
                </View>
                <View style={{alignItems:"flex-start"}}>
                    <Image source={require("../../../../assets/img/vacuum-print.png")} style={{width:328,height:234, alignSelf:"center"}} />
                </View>
                <FlatList
                data={DATA}
                renderItem={({item})=> Item(item)}
                ListHeaderComponent={View}
                ListHeaderComponentStyle={{borderBottomWidth: 0.5, borderColor: "#4F4F4F"}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#000000",
    },
    element:{
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderColor: "#4F4F4F",
        width: "100%",
        flexDirection: "row",
        paddingHorizontal:"3%",
        paddingVertical: "1%"
    },
    head:{
        flex: 1,
        alignSelf: "center",
    }
})

export default ManageVacuum;