"use client";

import { useGlobalState } from '@/app/context/globalProvider';
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import styled from 'styled-components';

function CreateContent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [started, setStarted] = useState(false);
  const [important, setImportant] = useState(false);

  const { theme } = useGlobalState();

const handleChange = (name: string) => (e: any) => {
  switch(name) {
    case "title":
      setTitle(e.target.value);
      break;
    case "description":
      setDescription(e.target.value);
      break;
    case "dueDate":
      setDueDate(e.target.value);
      break;
    case "important":
      setImportant(e.target.value);
      break;
    case "started":
      setStarted(e.target.value);
      break;
    case "completed":
      setCompleted(e.target.value);
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
    const res = await axios.post("/api/tasks", task);

    if (res.data.error) {
      toast.error(res.data.error)
    }

    if (!res.data.error) {
      toast.success("Task created successfully.");
      // allTasks();
      // closeModal();
    }

  } catch (error) {
    toast.error("Something went wrong.");
    console.log(error)
  }

};


  return (
    <CreateContentStyled theme={theme}>
      <form onSubmit={handleSubmit}>
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
    </CreateContentStyled>
  )
}

const CreateContentStyled = styled.form`
  > h1 {
    font-size: clamp(1.2rem, 5vw, 1.6rem);
    font-weight: 600;
  }

  color: ${(props) => props.theme.colorGrey1};

  .input-control {
    position: relative;
    margin: 1.6rem 0;
    font-weight: 500;

    @media screen and (max-width: 450px) {
      margin: 1rem 0;
    }

    label {
      margin-bottom: 0.5rem;
      display: inline-block;
      font-size: clamp(0.9rem, 5vw, 1.2rem);

      span {
        color: ${(props) => props.theme.colorGrey3};
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;

      resize: none;
      background-color: ${(props) => props.theme.colorGreyDark};
      color: ${(props) => props.theme.colorGrey2};
      border-radius: 0.5rem;
    }
  }

  .submit-btn button {
    transition: all 0.35s ease-in-out;

    @media screen and (max-width: 500px) {
      font-size: 0.9rem !important;
      padding: 0.6rem 1rem !important;

      i {
        font-size: 1.2rem !important;
        margin-right: 0.5rem !important;
      }
    }

    i {
      color: ${(props) => props.theme.colorGrey0};
    }

    &:hover {
      background: ${(props) => props.theme.colorPrimaryGreen} !important;
      color: ${(props) => props.theme.colorWhite} !important;
    }
  }

  .toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    label {
      flex: 1;
    }

    input {
      width: initial;
    }
  }
`;

export default CreateContent