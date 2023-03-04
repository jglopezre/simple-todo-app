import { useEffect, useReducer } from 'react'
import { todoReducer } from '../helper/todoReducer'

const init = () => {
  return JSON.parse( localStorage.getItem( 'todos' )) || [];
}

export const useTodo = () => {
  const [ todos, dispatch ] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos])

  const handleTodoDataFromForm = (data) => {
    dispatch({
      type: '[TODO] Add Todo',
      payload: data
    });
  };
  
  const handleDeleteTodo = (todoId) => {
    dispatch({
      type: '[TODO] Delete Todo',
      payload: todoId
    });
  };
  
  const handleToggleDoneTodo = (todoId) => {
    dispatch({
      type: '[TODO] Toggle Done',
      payload: todoId
    });
  }

  const todosCount = () => {
    return todos.length
  }

  const pendingTodosCount = () => {
    return todos.filter(todo => !todo.done).length
  }

  return {
    todos,
    handleTodoDataFromForm,
    handleDeleteTodo,
    handleToggleDoneTodo,
    todosCount,
    pendingTodosCount
  }
}
