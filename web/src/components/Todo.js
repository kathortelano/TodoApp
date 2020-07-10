import { TrashcanIcon, CheckIcon, CircleIcon } from '@primer/octicons-react'

const Todo = ({ onDelete, toggleComplete, text, status }) => {
  const todoContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5em 0',
  }

  return (
    <div style={todoContainer} className="task-container">
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          fontFamily: 'Arial, Helvetica, sans-serif',
          color: status ? 'lightgray' : '',
        }}
        onClick={toggleComplete}
      >
        <span
          style={{
            paddingRight: '1rem',
            color: status ? 'green' : '',
          }}
        >
          {status ? <CheckIcon size={20} /> : <CircleIcon size={20} />}
        </span>
        {text}
      </div>
      <span onClick={onDelete} style={{ paddingLeft: '1rem', color: 'red' }}>
        <TrashcanIcon size={20} />
      </span>
    </div>
  )
}

export default Todo
