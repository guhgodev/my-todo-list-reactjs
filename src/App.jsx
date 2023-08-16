import './App.css';
import { useState } from 'react';
import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';



function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar o formulário do sistema X",
      category: "Importante!"
    },
    {
      id: 2,
      text: "Estudar Next Js",
      category: "Secundário"
    },
    {
      id: 3,
      text: "Alterar cores do site Y",
      category: "Importante!"
    },

    
  ]);


  return (
    <div className="App">
      <h1> LISTA DE TAREFAS</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
      <TodoForm /> 
    </div>
  );
}

export default App;
