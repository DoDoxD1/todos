import './App.css';
import Header from './MyComponents/header';
import Footer from './MyComponents/Footer';
import Todo from './MyComponents/Todo';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Item1',
      desc: 'Lorem Ipsum is a placeholder text used in design when creating content. It helps designers plan out where the content will sit without needing to wait for the content to be written and approved.',
    },
    {
      sno: 2,
      title: 'Item2',
      desc: 'It helps designers plan out where the content will sit without needing to wait for the content to be written and approved.',
    },
    {
      sno: 3,
      title: 'Item3',
      desc: 'Lorem Ipsum is a placeholder text used in design when creating content. for the content to be written and approved.',
    },
  ]);

  const addTodo = (title, desc) => {
    const newTodo = {
      sno: todos.length + 1,
      title: title,
      desc: desc,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (todoitem) => {
    // console.log('Im delete', todoitem);
    setTodos(
      todos.filter((todo) => {
        return todo !== todoitem;
      })
    );
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
