import './App.css';
import Header from './MyComponents/header';
import Footer from './MyComponents/Footer';
import Todo from './MyComponents/TodosList';
import About from './MyComponents/About';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem('Todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('Todos'));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, desc) => {
    const newTodo = {
      sno: todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1,
      title: title,
      desc: desc,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (todoitem) => {
    setTodos(
      todos.filter((todo) => {
        return todo !== todoitem;
      })
    );
  };

  return (
    <Router>
      <Header />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Todo todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
          }
        />

        <Route exact path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
