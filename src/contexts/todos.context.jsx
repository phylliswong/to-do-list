import { createContext, useState, useEffect } from "react";
import TODO_DATA from '../to-do-data.json';


export const TodosContext = createContext({
  todos: null,
  setTodos: () => null,
});

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(TODO_DATA);
  const value = { todos };

  useEffect(() => {
    console.log(TODO_DATA);
    setTodos(TODO_DATA);
  }, []);

  return <TodosContext.Provider value={value}> {children} </TodosContext.Provider>
};
