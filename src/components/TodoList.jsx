
const listItemStyle = {
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    width: '100%',
    paddingLeft: '2rem',
    paddingRight: '2rem'
  },
  buttonDone: {
    backgroundColor: '#cda6e5',
    borderColor: '#cda6e5'
  },
  textDone: {
    textDecoration: 'line-through',
    color: 'lightgrey'
  },
  buttonBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
  }
  
}

export const TodoList = ({onDeleteTodo, onTogleDoneTodo, todos}) => {
  return (
    <ul>
      {
        todos.map( todo => (
          <li key={ todo.id } style={ listItemStyle.list }>
            <p style={ todo.done ? listItemStyle.textDone : null }>{todo.description}</p>
            <div style={ listItemStyle.buttonBox }>
              <button className="button" style={ todo.done ? listItemStyle.buttonDone : null }
                onClick={() => onTogleDoneTodo(todo.id)}>
                Hecho
              </button>
              <button className="button button-outline"
                onClick={() => onDeleteTodo(todo.id)}>
                Eliminar
              </button>  
            </div>
          </li>
        ))
      }
    </ul>
  )
}
