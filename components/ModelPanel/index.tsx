import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const ModelPanel = (props: any) => {
    return (
      <View style={styles.container}>
        <View style={styles.modelName}>
          <Text style={[props.text, styles.text]}>
            Robot cleaner
          </Text>
          <Text style={[props.text, styles.text]}>
            Valiron E34
          </Text>
        </View>
        <View style={styles.left}>
          <View style={styles.rect} />
          <Image source={require("../../assets/img/cleaner.png")} style={styles.cleaner}/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#3F8EEC",
      flex: 2.3,
      flexDirection: "row",
      borderRadius: 20,
    },
    text: {
      fontSize: 24,
      color: "white"
    },
    modelName:{
      top:"25%",
      left:"15%"
    },
    cleaner:{
      // right:"%"
    },
    left:{
      
    },
    rect:{
      position: "absolute",
      width:"32%",
      height: "38%",
      backgroundColor: "#59A1F6",
      borderTopEndRadius: 20,
    },
});

export default ModelPanel;