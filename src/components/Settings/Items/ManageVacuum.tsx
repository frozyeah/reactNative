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

const Item = (item: any, font: object, style?: object) => (
    <TouchableOpacity activeOpacity={0.7} style={[styles.element, style]}>
        {console.log(font)}
      <View style={{flexDirection: "column"}}>
        <Text style={[font, {color:"white", fontSize:20}]}>
          {item.title}
        </Text>
        <Text style={[font, {color:"rgba(255,255,255,0.5)"}]}>
          {item.bottomText}
        </Text>
      </View>
      <View style={{justifyContent: "flex-end", alignSelf:"center"}}>
          <Text style={{color:"#4492EE", fontSize:32}}>
              {item.percents}
          </Text>
      </View>
    </TouchableOpacity>
);

const ManageVacuum = (props: any) => {
    const font = props.text;
    return(
        <View style={styles.container}>
            <SubHeader nav={props.navigation} />
            <View style={{flex:8.7, justifyContent: "flex-start"}}>
                <View style={styles.head}>
                    <Text style={[font, {fontSize:19.96, color: "white"}]}>
                        Управление роботом-пылесосом
                    </Text>
                </View>
                <View style={{alignItems:"flex-start"}}>
                    <Image source={require("../../../../assets/img/vacuum-print.png")} style={{width:328,height:234, alignSelf:"center"}} />
                </View>
                <FlatList
                data={DATA}
                renderItem={({item})=> Item(item, font)}
                extraData={font}
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