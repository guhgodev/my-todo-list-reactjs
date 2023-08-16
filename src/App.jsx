import './App.css';
import { useState } from 'react';

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
          <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p className="category">({todo.category}) </p>
            </div>
            <div>
            <button>Finalizar</button>
            <button>x</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
