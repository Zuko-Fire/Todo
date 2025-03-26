import { Stack, Typography } from "@mui/material";
import { ITodo } from "../../shared/store/Todo";
import { Todo } from "./components/Todo";
import styles from "./TodoList.module.scss";

interface Props {
  todos: ITodo[]
}
export const TodoList = ({todos}:Props) => {

  return(
    <Stack className={styles.container} >
      {todos.length === 0 && <Typography color="textSecondary" variant="body1">Список пуст</Typography>}
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} name={todo.name} isDone={todo.isDone} />
      ))}
    </Stack>
  );
}