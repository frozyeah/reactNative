import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import MainHeader from './MainHeader';

const Settings = (props: any) => {
  const [modalVisible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <MainHeader nav={props.navigation}/>
      <View style={{flex:8.7}}/>
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