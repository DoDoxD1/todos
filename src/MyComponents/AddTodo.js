import React from 'react';

export default function AddTodo() {
  let formStyle = {
    maxWidth: '20rem',
  };
  return (
    <>
      <form style={formStyle} className="m-3">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="exampleInputEmail1" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Submit
        </button>
      </form>
    </>
  );
}
