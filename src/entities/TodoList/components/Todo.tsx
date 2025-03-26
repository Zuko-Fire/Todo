import { Box, Button, Checkbox, Typography } from "@mui/material"
import { useTodoStore } from "../../../shared/store/Todo"
import { DeleteOutlineOutlined } from "@mui/icons-material"
import styles from "./Todo.module.scss"

interface Props{
  id: string,
  name: string,
  isDone: boolean

}
export const Todo = ({id, name, isDone}:Props) => {
  const updateTodo = useTodoStore((state)=> state.updateTodo)
  const deleteTodo = useTodoStore((state)=> state.deleteTodo)
  const handleUpdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo({id, name, isDone: event.target.checked})
  }
  const handleDelete = () => {
    deleteTodo({id, name, isDone})
  }


return (
  <Box className={styles.container}>
    <Checkbox  onChange={handleUpdateChange} checked={isDone} />
    <Typography sx={{
          textDecoration: isDone ? 'line-through' : 'none',
          overflow: "hidden", 
          textOverflow: "ellipsis",
          whiteSpace: "nowrap", 
          color: "black",}} 
          style={{color: 'black'}} 
          variant="body1"
          title={name}
          >{name}</Typography>
    <Button 
    onClick={handleDelete} 
    variant="text" 
    startIcon={<DeleteOutlineOutlined />} />
  </Box>
)
}