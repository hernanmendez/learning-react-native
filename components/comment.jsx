import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Comment({ name, body }) {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Text style={{ fontSize: 16, color: "white" }}>{name}</Text>
      </View>
      <Text style={styles.comment}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#303030",
    borderColor: "#404040",
    borderWidth: 1,
  },
  user: {
    backgroundColor: "#404040",
    padding: 5,
    borderColor: "#404040",
    borderBottomWidth: 1,
  },
  comment: {
    padding: 10,
    color: "white",
  },
});
