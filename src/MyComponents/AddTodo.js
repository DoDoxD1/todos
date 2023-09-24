import React from 'react';
import { useState } from 'react';

export default function AddTodo(props) {
  let formStyle = {
    maxWidth: '20rem',
  };
  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      window.alert("Title/Desc can't be left empty");
    }
    props.addTodo(title, desc);
  };
  return (
    <>
      <h3>Add a Todo</h3>
      <form style={formStyle} className="m-3 " onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="InputTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            id="InputTitle"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputDesc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            id="InputDesc"
            value={desc}
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Submit
        </button>
      </form>
    </>
  );
}
