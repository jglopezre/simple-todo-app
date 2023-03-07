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
    <div className='web-view'>
      <header className="header-app">
        <h1>{`Lista de Tareas: ${todosCount()}`}</h1>
        <WarningPill count={pendingTodosCount()} />
      </header>
      
      
      <div className="task-list">
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onTogleDoneTodo={handleToggleDoneTodo}/>
      </div>
      <div className="add-task-field">
        <h2>Agregar Tarea</h2>
        <hr />
        <TodoAdd onNewTodo={handleTodoDataFromForm} />
      </div>
    </div>
  )
}

export default TodoApp
