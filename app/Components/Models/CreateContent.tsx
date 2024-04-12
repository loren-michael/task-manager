"use client";

import React, { useState } from 'react'

function CreateContent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [started, setStarted] = useState(false);
  const [important, setImportant] = useState(false);
  const [assignedUser, setAssignedUser] = useState(null);

const handleChange = (name: string) => (e: any) => {
  switch(name) {
    case "title":
      setTitle(e.target.value);
      break;
    case "description":
      setDescription(e.target.value);
      break;
    case "dueDate":
      setDueDate(e.target.value)
      break;
    case "important":
      setImportant(e.target.value)
      break;
    case "started":
      setStarted(e.target.value)
      break;
    case "completed":
      setCompleted(e.target.value)
      break;
    default:
      break;
  }
};

const handleSubmit = async (e:any) => {
  e.preventDefault();

  const task = {
    title,
    description,
    dueDate,
    important,
    started,
    completed
  };

  try {
    const res = await 
  } catch (error) {

  }

};


  return (
    <form onSbumit={handleSubmit}>
      <h1>Create a task</h1>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title"
          value={title}
          name="title"
          onChange={handleChange("title")}
          placeholder='Task title'
        />
      </div>
      <div className="input-control">
        <label htmlFor="title">Description</label>
        <textarea 
          id="description"
          value={description}
          name="description"
          rows={4}
          onChange={handleChange("description")}
          placeholder='Task description'
        />
      </div>
      <div className="input-control">
        <label htmlFor="dueDate">Due Date</label>
        <input 
          type="date" 
          id="duedate"
          value={dueDate}
          name="title"
          onChange={handleChange("duedate")}
        />
      </div>
      <div className="input-control">
        <label htmlFor='completed'>Important</label>
        <input
          value={important.toString()}
          onChange={handleChange("important")}
          type="checkbox"
          name="important"
          id="important"
        />
      </div>
      <div className="input-control">
        <label htmlFor='started'>Started</label>
        <input
          value={started.toString()}
          onChange={handleChange("started")}
          type="checkbox"
          name="started"
          id="started"
        />
      </div>
      <div className="input-control">
        <label htmlFor='completed'>Completed</label>
        <input
          value={completed.toString()}
          onChange={handleChange("completed")}
          type="checkbox"
          name="completed"
          id="completed"
        />
      </div>
      <div className="submit-btn">
        <button type="submit"> Submit </button>
      </div>
    </form>
  )
}

export default CreateContent