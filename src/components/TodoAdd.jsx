import { useState } from "react"



export const TodoAdd = ({onNewTodo}) => {
  const [textFieldValue, setTextFieldValue] = useState('');
  
  const handleOnChangeInputField = (event) => {
    setTextFieldValue(() => event.target.value);
  }

  const handleOnSubmitData = (event) => {
    event.preventDefault();

    const todoData = {
      id: new Date().getTime(),
      description: textFieldValue,
      done: false
    };
    
    onNewTodo(todoData);
    setTextFieldValue('');
  }

  return (
    <form onSubmit={handleOnSubmitData}>
      <fieldset>
        <label htmlFor="todo-todo-field">¿Qué hay que hacer?</label>
        <input 
          type="text"
          id="input-todo-field"
          value={textFieldValue}
          onChange={handleOnChangeInputField} />
      </fieldset>
      <button className="button">Agregar</button>
    </form>
  )
}
