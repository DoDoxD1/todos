import React from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

export default function Todo({ todos, deleteTodo, addTodo }) {
  const myStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  };
  return (
    <>
      <div className="mt-3" style={myStyle}>
        <AddTodo addTodo={addTodo} />
        <h3>Todos Lists</h3>
        {todos.length === 0
          ? 'No Todos to Display'
          : todos.map((todoitem) => {
              return (
                <TodoItem
                  todo={todoitem}
                  key={todoitem.sno}
                  deleteTodo={deleteTodo}
                />
              );
            })}
      </div>
    </>
  );
}
