import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


const SettingsButton = (props: any) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPressOut={() => props.nav.navigate('Settings')}>
            <View style={styles.button}>
                <Image source={require("../../assets/img/settings.png")} style={{marginTop: "25%",height:"50%", width:"50%", alignSelf:"center"}} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: "4%"
    },
    button: {
        backgroundColor: "#212121",
        height: 55,
        width: 55,
        borderRadius: 27.5,
    }
});

export default SettingsButton;