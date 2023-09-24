import './App.css';
import Header from './MyComponents/header';
import Footer from './MyComponents/Footer';
import Todo from './MyComponents/TodosList';
import { useState } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem('Todos') === null) {
    initTodo = [
      // {
      //   sno: 1,
      //   title: 'Example Todo',
      //   describe: 'Example Desc',
      // },
    ];
  } else {
    initTodo = JSON.parse(localStorage.getItem('Todos'));
  }

  const [todos, setTodos] = useState(initTodo);

  const addTodo = (title, desc) => {
    const newTodo = {
      sno: todos.length + 1,
      title: title,
      desc: desc,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    localStorage.setItem('Todos', JSON.stringify(todos));
  };
  const deleteTodo = (todoitem) => {
    // console.log('Im delete', todoitem);
    setTodos(
      todos.filter((todo) => {
        return todo !== todoitem;
      })
    );
    localStorage.setItem('Todos', JSON.stringify(todos));
  };
  const myStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  return (
    <>
      <Header />
      <Todo
        style={myStyle}
        todos={todos}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
      />
      <Footer />
    </>
  );
}

export default App;
