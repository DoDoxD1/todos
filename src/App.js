import './App.css';
import Header from './MyComponents/header';
import Footer from './MyComponents/Footer';
import Todo from './MyComponents/TodosList';
import { useState } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem('Todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('Todos'));
  }

  const [todos, setTodos] = useState(initTodo);

  const addTodo = (title, desc) => {
    const newTodo = {
      sno: todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1,
      title: title,
      desc: desc,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    localStorage.setItem('Todos', JSON.stringify(todos));
  };
  const deleteTodo = (todoitem) => {
    setTodos(
      todos.filter((todo) => {
        return todo !== todoitem;
      })
    );
    localStorage.setItem('Todos', JSON.stringify(todos));
  };

  return (
    <>
      <Header />
      <Todo todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
      <Footer />
    </>
  );
}

export default App;
