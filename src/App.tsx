import React from 'react';
import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from "./model"

const App: React.FC =() => { //FC:Function Components
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd =(e:React.FormEvent) => {
    e.preventDefault();
  };

  if (todo){
    setTodos([...todos,{ id:Date.now(),todo:todo,isDone:false}]);
    setTodo("")
  }
  console.log(todo)

  return(
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
// last time double check
export default App;