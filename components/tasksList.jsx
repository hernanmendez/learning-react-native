import React, { useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { tasksContext } from "../context/tasksContext";
import { Ionicons } from "@expo/vector-icons";

const Touchable =
  Platform.OS === "android" ? TouchableNativeFeedback : TouchableHighlight;

export default function TasksList() {
  const [taskTitle, setTitle] = useState("");
  const { tasks, addTask, removeTask } = useContext(tasksContext);
  const [color, setColor] = useState("#404040");
  return (
    <View style={styles.fullView}>
      <Text style={styles.title}>Tasks:</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Touchable onPress={() => removeTask(item.id)}>
              <View style={styles.itemButton}>
                <Ionicons name="checkmark" size={30} color="white" />
              </View>
            </Touchable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <TextInput
        value={taskTitle}
        onChangeText={(text) => setTitle(text)}
        style={styles.form}
        placeholder="type the title of the task"
      />
      <Button
        title="Press this to add a task"
        color={color}
        onPress={() => {
          addTask(taskTitle);
          console.log(taskTitle);
          setTitle("");
        }}
        styles={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 10,
    marginBottom: 15,
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
  },
  list: {
    alignItems: "stretch",
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: "#404040",
    paddingLeft: 20,
    paddingRight: 0,
    marginBottom: 4,
  },
  itemText: {
    alignSelf: "center",
    flex: 4,
    color: "white",
    paddingVertical: 10,
    letterSpacing: 0,
    fontSize: 20,
    textTransform: "capitalize",
  },
  itemButton: {
    backgroundColor: "#525252",
    padding: 10,
    justifyContent: "center",
  },
  fullView: {
    flex: 1,
    width: "100%",
  },
  form: {
    backgroundColor: "#525252",
    color: "white",
    fontSize: 20,
    padding: 15,
    marginHorizontal: "auto",
  },
});
