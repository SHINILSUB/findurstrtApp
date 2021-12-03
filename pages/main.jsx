import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Main = ({route}) => {
    return(
    <View style={styles.container}>
        <Text>this is home</Text>
        <Text>{route.params.title}</Text>
    </View>
    )};
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      });

export default Main;