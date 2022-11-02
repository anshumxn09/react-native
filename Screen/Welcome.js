import React from "react";
import { Text, StyleSheet } from "react-native";

const Welcome = () => {
  return (
    <>
      <Text style={styles.welcome}>Welcome to the thapa technical</Text>
    </>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontWeight: "bold",
    color: "blue",
    fontSize: 40,
  },
})


export default Welcome;
