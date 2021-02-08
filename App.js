import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import TasksList from './components/tasksList';
import TasksProvider from "./context/tasksContext"
import { SafeAreaView } from "react-native-safe-area-context"

export default function App() {
  return (
    <TasksProvider>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <TasksList />
      </SafeAreaView>
    </TasksProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    color: "white",
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
});
