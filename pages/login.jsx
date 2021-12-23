import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";

const logo = require("../assets/logo.png");

const Login = ({ navigation }) => {
  const gomain = () => {
    navigation.navigate("Main");
  };
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.loginbox}>
        <Text style={styles.login}>LOGIN</Text>
        <TouchableHighlight onPress={gomain} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.google}>GOOGLE</Text>
          </View>
        </TouchableHighlight>
      </View>
      <Text style={styles.bottomText}>Prove your strength</Text>
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
    width: 270,
    marginBottom: 40
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
    fontWeight: 'bold',
    color: "white"
  },
  bottomText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#808080",
    marginTop: 10
  
  }
});

export default Login;
