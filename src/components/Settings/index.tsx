import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import MainHeader from './MainHeader';

import SettingsList from 'react-native-settings-list';
import { getData, storeData } from "../../actions/asyncStorage";

const Settings = (props: any) => {
  const [switchValue, setSwitch] = useState<boolean | undefined>(undefined);
  getData().then((value) => {
    setSwitch(value);
  })
  useEffect(()=>{
    return function cleanup(){
      if(switchValue !== undefined) storeData(switchValue.toString());
    }
  }, []);
  if(switchValue !== undefined) return (
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
          hasSwitch={true}
          title='Dark theme'/>
          <SettingsList.Item
            title='Управление роботом-пылесос...'
            backgroundColor='#D1D1D1'
            titleStyle={{color:'black'}}
            hasNavArrow={false}
            onPress={() => props.navigation.navigate('ManageVacuum')}/>
          <SettingsList.Item
            title='Информация'
            backgroundColor='#D1D1D1'
            titleStyle={{color:'black'}}
            hasNavArrow={false}
            onPress={() => props.navigation.navigate('Info')}/>
          <SettingsList.Item
            title='Обновление прошивки'
            backgroundColor='#D1D1D1'
            titleStyle={{color:'black'}}
            hasNavArrow={false}
            onPress={() => props.navigation.navigate('Update')}/>
          <SettingsList.Item
            title='Сброс настроек'
            backgroundColor='#D1D1D1'
            titleStyle={{color:'black'}}
            hasNavArrow={false}
            onPress={() => props.navigation.navigate('Reset')}/>
        </SettingsList>
      </View>
    </View>
  );
  else return(
    <ActivityIndicator size="large" color="#fff" />
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#000000",
    },
})

export default Settings;