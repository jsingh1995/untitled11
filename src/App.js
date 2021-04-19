import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import UploadImage from './components/UploadImage';

export default function App() {
  return (
    <div className="App">
      <h1>Firebase Reading/Writing/Editing/Deleting</h1>
        <h1>FOR EXAMPLE KOBE BRYANT, 24</h1>
      <Form />
      <TodoList />
    </div>
  );
}
// // <UploadImage/>
