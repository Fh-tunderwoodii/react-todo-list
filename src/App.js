import React, { useState, useEffect } from 'react';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  let [list, setList] = useState([]);
  const [todoCount, setTodoCount] = useState('');

  useEffect(() => {
    setList(todos.map((item, index) => {
      return (
        <li
          key={item+index}>
          <Grid container spacing={8}>
            <Grid className="background" item xs={10}>
              <span>{index+1}. {item}</span>
            </Grid>
            <Grid item xs={2}>
                <IconButton color={"secondary"} aria-label="Delete" onClick={() => { setTodos(todos.filter((todo, i) => { if(index !== i) { return todo } })) }}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
            </Grid>
          </Grid>
        </li>
      );
    }))
    setTodoCount(list.length > 0 ? `Todo (${list.length})` : 'Todo');
  }, [todos, list, todoCount]);

  return (
      <div className="todo-list-component">
        <div className="add-todo-container">
          <TextField
            label={todoCount}
            margin="normal"
            variant="filled"
            className="add-todo"
            value={todo}
            onKeyPress={(e) => { if(e.key === 'Enter') { setTodos([e.target.value, ...todos]); setTodo('') } }}
            onChange={(e) => { setTodo(e.target.value)  }}
          />
        </div>
        <div className="todo-list-container">
          <ul className="list">
            {list}
          </ul>
        </div>
      </div>
  );
}

export default App;
