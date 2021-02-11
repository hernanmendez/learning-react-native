import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { DarkTheme } from '@react-navigation/native';

import TasksProvider from "./context/tasksContext"
import CommentsProvider from "./context/commentsContext"

import Tasks from './screens/tasks';
import Comments from "./screens/comments"

const Tab = createMaterialTopTabNavigator();

const MyTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    card: "#141414",
    primary: '#404040',
    background: '#292929',
    border: '#525252',
    notification: '#525252',
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "#141414" }}></SafeAreaView>
      <TasksProvider>
        <CommentsProvider>
          <NavigationContainer theme={MyTheme}>
            <Tab.Navigator>
              <Tab.Screen name="Tasks" component={Tasks} />
              <Tab.Screen name="Comments" component={Comments} />
            </Tab.Navigator>
          </NavigationContainer>
        </CommentsProvider>
      </TasksProvider>
    </SafeAreaProvider>
  );
}

