import React, { createContext, useState } from "react";
import generateUUID from "../functions/generateUUID";

const defaultTasksValue = {
  tasks: [
    {
      title: "create another task",
      id: generateUUID(),
    },
  ],
};

export const tasksContext = createContext(defaultTasksValue);

export default function TasksProvider({ children }) {
  let [tasks, setTasks] = useState(defaultTasksValue.tasks);

  const addTask = (title) =>
    setTasks([...tasks, { title, id: generateUUID() }]);

  const removeTask = (id) =>
    setTasks((prevTasks) => prevTasks.filter((item) => item.id != id));

  return (
    <tasksContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </tasksContext.Provider>
  );
}
