import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";

const logo = require("../assets/logo.png");
const vector = require("../assets/vector.png");

const Login = ({ navigation }) => {
  const gomain = () => {
    navigation.navigate("Main", { title: "로그인완료" });
  };
  return (
    <View style={styles.container}>
      <Image source={vector} style={styles.vector} />
      <Image source={logo} style={styles.logo} />
      <View style={styles.loginbox}>
        <Text style={styles.login}>Login</Text>
        <TouchableHighlight onPress={gomain} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.google}>google</Text>
          </View>
        </TouchableHighlight>
      </View>
      <Text style={styles.prove}>Prove your strength</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  vector: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  logo: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 165,
    marginBottom: 10
  },
  loginbox: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 224,
    borderWidth: 0.5,
    borderColor: "#808080",
    borderRadius: 50,  
    marginBottom: 4 
  },
  login:{
    fontSize: 25,
    color: "#808080",
    marginBottom: 20
  },
  button: {
    width: 260,
    height: 57,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B1B1B1",
    marginBottom: 30
  },
  google: {
    fontSize: 20,
    color: "white"
  },
  prove: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#808080"
  
  }
});

export default Login;
