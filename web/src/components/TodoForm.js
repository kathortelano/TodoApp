import { useState } from 'react'
import shortid from 'shortid'
import { PencilIcon } from '@primer/octicons-react'

const TodoForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState({
    text: '',
  })

  const handleChange = (event) => {
    let input = event.target.value
    setInputValue({
      text: input,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputValue.text !== '') {
      onSubmit({
        id: shortid.generate(),
        text: inputValue.text,
        status: false,
      })
      setInputValue({
        text: '',
      })
    } else {
      return null
    }
  }

  const form = {
    display: 'flex',
    justifyContent: 'center',
  }

  return (
    <form onSubmit={handleSubmit} className="form" style={form}>
      <input
        type="text"
        value={inputValue.text}
        onChange={handleChange}
        style={{
          width: '75%',
          marginLeft: '1rem',
          border: 'none',
          borderBottom: '1px solid gray',
          outline: 'none',
          fontSize: '1rem',
          ':focus': {
            transition: 'border-bottom 0.3s ease',
            borderBottom: '1px solid gray',
          },
        }}
      />
      <span
        onClick={handleSubmit}
        disabled={inputValue.text === ''}
        style={{ marginLeft: ' 0.3em' }}
      >
        <PencilIcon size={20} />
      </span>
    </form>
  )
}

export default TodoForm
