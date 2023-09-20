import React from 'react';

export default function TodoItem({ todo, deleteTodo }) {
  let style = {
    width: '40rem',
  };
  return (
    <>
      <div className="card m-3 " style={style}>
        <div className="card-body text-center">
          <h5 className="card-title">{todo.title}</h5>
          <p className="card-text">{todo.desc}</p>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              deleteTodo(todo);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

// TodoItem.defaultProps = {
//   title: 'Title',
//   desc: "Lorem Ipsum is a placeholder text used in design when creating content. It helps designers plan out where the content will sit without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberish.",
// };

// TodoItem.prototype = {
//   title: PropTypes.String,
// };
