import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import MainHeader from './MainHeader';

import SettingsList from 'react-native-settings-list';
import { getData, storeData } from "../../actions/asyncStorage";

const Settings = (props: any) => {
  const [switchValue, setSwitch] = useState(true);
  const [isLoading, setLoading] = useState(true);
  getData('@theme').then((value) => {
    if(value !== undefined){
      setSwitch((value === 'true'));
      setLoading(false);
    }
  })
  useEffect(()=>{
    return function cleanup(){
      storeData('@theme', switchValue.toString());
    }
  }, []);
  if(!isLoading) return (
    <View style={styles.container}>
      <MainHeader nav={props.navigation}/>
      <View style={{flex:8.7}}>
        <SettingsList>
          <SettingsList.Item
            hasNavArrow={false}
            switchState={switchValue}
            onPress={() => {
              setSwitch(!switchValue);
            }}
            backgroundColor='#000'
            titleStyle={{color:'white'}}
            switchOnValueChange={()=>{
              console.log(switchValue);
              storeData('@theme', switchValue.toString());
              console.log(switchValue);
            }}
            hasSwitch={true}
            title='Dark theme'/>
          <SettingsList.Item
            title='Управление роботом-пылесос...'
            backgroundColor='#000'
            titleStyle={{color:'white'}}
            hasNavArrow={false}
            onPress={() => props.navigation.navigate('ManageVacuum')}/>
          <SettingsList.Item
            title='Информация'
            backgroundColor='#000'
            titleStyle={{color:'white'}}
            hasNavArrow={false}
            onPress={() => props.navigation.navigate('Info')}/>
          <SettingsList.Item
            title='Обновление прошивки'
            backgroundColor='#000'
            titleStyle={{color:'white'}}
            hasNavArrow={false}
            onPress={() => props.navigation.navigate('Update')}/>
          <SettingsList.Item
            title='Сброс настроек'
            backgroundColor='#000'
            titleStyle={{color:'white'}}
            hasNavArrow={false}
            onPress={() => props.navigation.navigate('Reset')}/>
        </SettingsList>
      </View>
    </View>
  );
  else return(
    <View style={{backgroundColor:"#000"}}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#000000",
    },
})

export default Settings;