export const TodoList = ({onDeleteTodo, onTogleDoneTodo, todos}) => {
  return (
    <ul>
      {
        todos.map( todo => (
          <li key={ todo.id } className="list-items">
            <span className={ todo.done ? 'line-through' : '' }>{todo.description}</span>
            <span>
              <button className={`button mr-1 ${ todo.done ? 'button-done' : ''}`}
                onClick={() => onTogleDoneTodo(todo.id)}>
                Hecho
              </button>
              <button className="button button-outline"
                onClick={() => onDeleteTodo(todo.id)}>
                Eliminar
              </button>  
            </span>
          </li>
        ))
      }
    </ul>
  )
}
