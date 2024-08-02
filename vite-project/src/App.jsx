
import React, { useState } from 'react';
import { Input, Button, List } from 'antd';


const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo App</h1>
      <div style={{ marginBottom: '20px', display: 'flex' }}>
        <Input 
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a new todo"
          style={{ width: '300px', marginRight: '10px' }}
        />
        <Button type="primary" onClick={addTodo}>
          Add Todo
        </Button>
      </div>
      <List
        bordered
        dataSource={todos}
        renderItem={(item, index) => (
          <List.Item key={index}>{item}</List.Item>
        )}
      />
    </div>
  );
};

export default App;
