import { Box, Typography } from "@mui/material"
import { TodoList } from "../../entities/TodoList"
import { TodoLine } from "../../entities/TodoLine"
import styles from "./TodoWidget.module.scss"
import { useTodoStore } from "../../shared/store/Todo"
import { BottomPanel, useFilteredTodos } from "../../entities/BottomPanel"

export const TodoWidget = () => {
  const todos = useTodoStore(state => state.todos)
  const filteredTodos = useFilteredTodos(todos)
  return (
  <Box className={styles.container}>
    <Typography variant="h3" color="textPrimary">Todo</Typography>
    <TodoLine />
    <TodoList todos={filteredTodos} />
    <BottomPanel  />
  </Box>
  )
}