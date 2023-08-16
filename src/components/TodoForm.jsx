import React from "react";

const TodoForm = ({ todo }) => {
  return (
    <div className="todo">
      <form>
        <input type="text" placeholder="Digite o titulo da tarefa"/>
        <select>
            <option value="">Selecione uma categoria</option>
            <option value="importante">Importante!</option>
            <option value="secundario">Secundário</option>
        </select>
        <button type="submit"> Criar tarefa</button>
      </form>
       
    </div>
  );
};

export default TodoForm;
