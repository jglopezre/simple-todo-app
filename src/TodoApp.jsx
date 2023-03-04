import { useEffect, useReducer } from 'react'
import { todoReducer } from './helper/todoReducer'
import 'milligram'
import './TodoApp.css'
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'

const initialState = [
  /* {
    id: new Date().getTime(),
    description: 'Buscar libros',
    done: false
  }, */
]

const init = () => {
  return JSON.parse( localStorage.getItem( 'todos' )) || [];
}


function TodoApp() {
  const [ todos, dispatch ] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos])
  
  
  const handleTodoDataFromForm = (data) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: data
    };

    dispatch(action);
  }

  const handleDeleteTodo = (todoId) => {
    const action = {
      type: '[TODO] Delete Todo',
      payload: todoId
    };

    dispatch(action)
  }

  const handleToggleDoneTodo = (todoId) => {
    const action = {
      type: '[TODO] Toggle Done',
      payload: todoId
    }
    dispatch(action);
  }

  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <div className="row">
        <div className="column column-50">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onTogleDoneTodo={handleToggleDoneTodo}/>
        </div>
        <div className="column column-50">
          <h4>Add Todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleTodoDataFromForm} />
        </div>
      </div>
      
    </>
  )
}

export default TodoApp
