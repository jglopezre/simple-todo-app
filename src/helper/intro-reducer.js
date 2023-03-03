const initialState = [{
  id: 1,
  todo: 'Recolectar las piedras',
  done: false
}];


const myReducer = (state = initialState, action = {}) => {
  let buffer

  switch (action.type) {
    case '[TODO] add todo':
      buffer = [ ...state, action.payload ]    
      break;
    case '[TODO] delete all todos':
      buffer = []
      break;
    default:
      buffer = state
      break;
  }
  return buffer
}

let todos = myReducer()

  console.log(todos)

const newTodo = {
  id: 2,
  todo: 'botar la basura',
  done: false
}

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo
}

const deleteTodosAction = {
  type: '[TODO] delete all todos'
}

todos = myReducer(todos, addTodoAction)

console.log(todos)

todos = myReducer(todos, deleteTodosAction)

console.log(todos)


export {myReducer}