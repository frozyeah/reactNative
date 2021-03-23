import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';

const Options = (props: any) => {
  const [modalVisible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
        <Text>
            Test
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#252525",
    },
})

export default Options;