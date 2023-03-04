import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'
import { useTodo } from './hooks/useTodo'
import { WarningPill } from './components/WarningPill'

import 'milligram'
import './TodoApp.css'

function TodoApp() {
  
  const {
    todos,
    handleTodoDataFromForm,
    handleDeleteTodo,
    handleToggleDoneTodo,
    todosCount,
    pendingTodosCount
  } = useTodo();
    
  return (
    <>
      <div className="row top-bar">
        <h1>{`Lista de Tareas: ${todosCount()}`}</h1>
        <WarningPill count={pendingTodosCount()} />
      </div>
      
      <div className="row">
        <div className="column column-50">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onTogleDoneTodo={handleToggleDoneTodo}/>
        </div>
        <div className="column column-50 static-right">
          <h2>Agregar Tarea</h2>
          <hr />
          <TodoAdd onNewTodo={handleTodoDataFromForm} />
        </div>
      </div>
    </>
  )
}

export default TodoApp
