import React from "react";
import { StyleSheet, Image } from "react-native";
import { Header, Left, Button, Icon } from "native-base";

const logo = require("../assets/logo.png");

const Header_C = () => {
  return (
    <Header transparent>
      <Left>
        <Button transparent>
          <Image source={logo} style={styles.logoImage} />
        </Button>
      </Left>
      <Right>
        <Icon name="ellipsis-horizontal" style={{ color: "deeppink" }} />
      </Right>
    </Header>
  );
};
const styles = StyleSheet.create({
  logoImage: { width: 100, resizeMode: "contain", marginLeft: 10 },
});

export default Header_C;
