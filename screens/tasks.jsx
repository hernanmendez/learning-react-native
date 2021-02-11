import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useTasksContext } from "../context/hooks";
import TasksList from "../components/tasksList";

export default function Tasks() {
  const [taskTitle, setTitle] = useState("");
  const { tasks, addTask, removeTask } = useTasksContext();

  return (
    <View style={styles.fullView}>
      <TasksList tasks={tasks} removeTask={removeTask} />
      <TextInput
        value={taskTitle}
        onChangeText={(text) => setTitle(text)}
        style={styles.form}
        placeholder="type the title of the task"
        placeholderTextColor="#aaa"
      />
      <Button
        title="Press this to add a task"
        color="#303030"
        onPress={() => {
          if (taskTitle !== "") {
            addTask(taskTitle);
            setTitle("");
          }
        }}
        styles={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fullView: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  form: {
    color: "white",
    fontSize: 20,
    padding: 10,
    borderBottomColor: "#525252",
    borderBottomWidth: 1,
    marginBottom: 10,
    marginHorizontal: "auto",
  },
});
