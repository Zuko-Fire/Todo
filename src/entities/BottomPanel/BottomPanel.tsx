import { Box, Button } from "@mui/material"
import { TodoFilter, useTodoStore } from "../../shared/store/Todo"
import { DeleteOutlineOutlined } from "@mui/icons-material";

export const BottomPanel = () => {
  const {setFilter, clearDoneTodos, filter } = useTodoStore((state) => state) 

  const filterButtons = [
    { label: "Все", type: TodoFilter.ALL },
    { label: "Активные", type: TodoFilter.ACTIVE },
    { label: "Выполненные", type: TodoFilter.DONE },
  ];

  return (
    <Box>
      <Box display="flex" justifyContent="flex-start">
      {filterButtons.map(({ label, type }) => (
        <Button 
        style={{color: filter === type ? 'black': "#D4D4D4"}} 
        key={type} 
        onClick={() => setFilter(type)}>
          {label}
        </Button>
      ))}
      </Box>
      <Box display="flex" justifyContent="flex-end">
      <Button 
      variant="text" 
      endIcon={<DeleteOutlineOutlined />} 
      onClick={clearDoneTodos}>
        Удалить выполненные
        </Button>
        </Box>
    </Box>
  );
};