export const todoReducer = (initialState = [], action = {}) => {
  let stateBuffer;
  switch (action.type) {
    case '[TODO] Add Todo':
      stateBuffer = [ ...initialState, action.payload]
      break;
    
    case '[TODO] Delete Todo':
      stateBuffer = initialState.filter(todo => todo.id !== action.payload)
      break;

    case '[TODO] Toggle Done':
      stateBuffer = initialState.map(todo => {
        return todo.id === action.payload
          ? {...todo, done: !todo.done}
          : todo
      });
      break;

    default:
      stateBuffer = initialState;
      break;
  }
  return stateBuffer
}