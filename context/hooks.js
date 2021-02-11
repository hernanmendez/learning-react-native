import { useContext } from "react"
import { tasksContext } from "./tasksContext"
import { commentsContext } from "./commentsContext"

export function useTasksContext() {
  return useContext(tasksContext)
}

export function useCommentsContext() {
  return useContext(commentsContext)
}