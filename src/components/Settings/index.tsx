import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import MainHeader from './MainHeader';
import SettingsList from 'react-native-settings-list';
import { getData, storeData } from "../../storage";

const Settings = (props: any) => {
  const [switchValue, setSwitch] = useState(true);

  const saveSwitch = () => {
    storeData(switchValue.toString());
  }

  useEffect(()=>{
    getData().then((value) => {
      setSwitch(value);
    })
    return function cleanup(){
      storeData(switchValue.toString());
    }
  }, []);
  return (
    <View style={styles.container}>
      <MainHeader nav={props.navigation}/>
      <View style={{flex:8.7}}>
      <SettingsList>
        <SettingsList.Item
          hasNavArrow={false}
          switchState={switchValue}
          switchOnValueChange={() => {
            setSwitch(!switchValue);
            saveSwitch();
          }}
          hasSwitch={true}
          title='Dark theme'/>
      </SettingsList>
      </View>
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