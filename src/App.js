import './App.css';
import Header from './MyComponents/header';
import Footer from './MyComponents/Footer';
import TodoItem from './MyComponents/TodoItem';
import Todo from './MyComponents/Todo';

function App() {
  // let todos = {};
  return (
    <>
      <Header />
      <Todo />
      <TodoItem title="Item1" />
      <TodoItem />
      <Footer />
    </>
  );
}

export default App;
