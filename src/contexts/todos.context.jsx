import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase-utils";


export const TodosContext = createContext({
  todos: null,
  setTodos: () => null,
});

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const value = { todos };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    }

    getCategoriesMap();
  }, []);

  return <TodosContext.Provider value={value}> {children} </TodosContext.Provider>
};
