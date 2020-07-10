import { useState } from 'react'

import TodoCount from './TodoCount'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Todo from './Todo'

const TodoApp = () => {
  const [todos, setTodos] = useState({
    todolist: [],
  })

  const addTodo = (todoItem) => {
    setTodos({
      todolist: [todoItem, ...todos.todolist],
    })
  }

  const handleComplete = (id) => {
    setTodos({
      todolist: todos.todolist.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: !todo.status,
          }
        } else {
          return todo
        }
      }),
    })
  }

  const handleDelete = (id) => {
    setTodos({
      todolist: todos.todolist.filter((deleteTodo) => {
        return deleteTodo.id !== id
      }),
    })
  }

  const app = {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'space-between',
    justifyContent: 'center',
  }

  return (
    <div style={app} className="app-container">
      <TodoCount
        count={todos.todolist.filter((task) => task.status === false).length}
      />
      <TodoForm onSubmit={addTodo} />
      <TodoList>
        {todos.todolist.map((oneTodo) => (
          <Todo
            key={oneTodo.id}
            status={oneTodo.status}
            text={oneTodo.text}
            toggleComplete={() => handleComplete(oneTodo.id)}
            onDelete={() => handleDelete(oneTodo.id)}
          />
        ))}
      </TodoList>
    </div>
  )
}

export default TodoApp
