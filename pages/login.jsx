import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

const Login = ({ navigation }) => {
  const gomain = () => {
    navigation.navigate("Main", { title: "로그인완료" });
  };
  return (
    <View style={styles.container}>
      <Text>signin</Text>
      <TouchableHighlight onPress={gomain} underlayColor="white">
        <View style={styles.button}>
          <Text>login</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
});

export default Login;
