import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import SubHeader from '../SubHeader';

const Reset = (props: any) => {
    return(
        <View style={styles.container}>
            <SubHeader nav={props.navigation} />
            <View style={{flex:8.7}}>
                
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

export default Reset;