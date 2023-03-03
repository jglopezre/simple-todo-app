import { useReducer } from 'react'
import { todoReducer } from './helper/todoReducer'
import 'milligram'
import './TodoApp.css'

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Buscar libros',
    done: false
  },
  {
    id: new Date().getTime() + 1,
    description: 'Botar la basura',
    done: false
  }
]


function TodoApp() {
  const [ todos, dispatch ] = useReducer(todoReducer, initialState)
  console.log(todos)
  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <div className="row">
        <div className="column column-50">
          <ul>
            {
              todos.map( todo => (
                <li key={ todo.id } className="list-items">
                  <span>Item-1</span>
                  <div>
                    <button className="button mr-1">Hecho</button>
                    <button className="button button-outline">Eliminar</button>  
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="column column-50">
          <h4>Add Todo</h4>
          <hr />
          <form>
            <fieldset>
              <label htmlFor="todo-todo-field">¿Qué hay que hacer?</label>
              <input type="text" id="input-todo-field" />
            </fieldset>
            <button className="button">Agregar</button>
          </form>
        </div>
      </div>
      
    </>
  )
}

export default TodoApp
