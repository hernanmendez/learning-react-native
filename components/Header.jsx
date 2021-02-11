import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Elevations from "react-native-elevation";

export default function Header({ text, backgroundColor = "#343434" }) {
  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 7,
    paddingLeft: 13,
    marginBottom: 10,
    ...Elevations[12],
  },
  text: {
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
  },
});
