import React, { Component } from 'react';
import { Container, Header } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';

const profile = require("../assets/default.png");

const Card = ({ cards }) => {
  return (
    <Container style={styles.card}>
        <Header/>
        <Grid>
          <Col
            size={1}
            style={styles.right}
          ></Col>
          <Col
            size={1}
            style={styles.left}
          ></Col>
        </Grid>
      </Container>
  );
};
const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        alignSelf: "center",
        width: 336,
        height: 159,
        padding: 20
    },
    right: {
        alignItems: "center",
        backgroundColor: '#635DB7', 
        height: 150

    },
    profile: {
        width: 90,
        height: 90
    },
    name: {fontSize: 20},
    
    left: {
      alignItems: "center",
      backgroundColor: '#00CE9F', 
      height: 150},
    li: {fontSize: 20}

});

export default Card;
