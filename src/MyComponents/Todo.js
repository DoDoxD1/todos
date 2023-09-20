import React from 'react';
import TodoItem from './TodoItem';

export default function Todo({ todos, deleteTodo }) {
  return (
    <>
      <div className="text-center mt-3">
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
