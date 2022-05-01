import React, { useContext, useState } from 'react';
import { Todo } from '../components/todo/todo';
import { ToastContext } from './toastContext';

export const TodoContext = React.createContext(null);

export default function TodoContextProvider({ children }) {
  const [allTodos, setAllTodos] = useState([]);
  const { createToast } = useContext(ToastContext);

  function addTodo(todo) {
    setAllTodos([...allTodos, todo]);
  }

  function delTodo(id) {
    setAllTodos(allTodos.filter((todo) => todo.id !== id));
    createToast('del', 'red');
  }

  const showTodo = allTodos.map((todo) => <Todo todo={todo} key={todo.id} />);

  return (
    <TodoContext.Provider
      value={{
        allTodos,
        addTodo,
        delTodo,
        showTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
