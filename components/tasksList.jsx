import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Elevations from "react-native-elevation";
import { Ionicons } from "@expo/vector-icons";

const Touchable =
  Platform.OS === "android" ? TouchableNativeFeedback : TouchableHighlight;

function Task({ title, removeTask }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{title}</Text>
      <Touchable onPress={removeTask}>
        <View style={styles.itemButton}>
          <Ionicons name="checkmark" size={30} color="white" />
        </View>
      </Touchable>
    </View>
  );
}

export default function TasksList({ tasks, removeTask }) {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={tasks}
      renderItem={({ item }) => (
        <Task title={item.title} removeTask={() => removeTask(item.id)} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: "stretch",
  },
  item: {
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: "#303030",
    paddingLeft: 20,
    paddingRight: 0,
    marginBottom: 4,
    ...Elevations[6],
  },
  itemText: {
    alignSelf: "center",
    flex: 4,
    color: "white",
    paddingVertical: 10,
    letterSpacing: 0,
    fontSize: 20,
  },
  itemButton: {
    backgroundColor: "#404040",
    padding: 10,
    justifyContent: "center",
  },
});
