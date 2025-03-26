import { Input } from "@mui/material"
import { useState } from "react"
import { useTodoStore } from "../../shared/store/Todo"

export const TodoLine = () => {
  const [state, setState] = useState('')
  const addTodo = useTodoStore(state => state.addTodo)
  const handleEnter = (e: React.KeyboardEvent) => {
    if(e.key !== 'Enter') return
    if(state) addTodo({id: String(Date.now()), name: state, isDone: false})
  }

  return(
  <Input 
    type="text" 
    onKeyDown={handleEnter} 
    placeholder="Что нового ?" 
    value={state} 
    onChange={(e) => setState(e.target.value)} />
  )
}