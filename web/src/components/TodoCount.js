import { ChecklistIcon } from '@primer/octicons-react'

const TodoCount = ({ count }) => {
  const countContainer = {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, Helvetica, sans-serif',
  }
  return (
    <div className="count" style={countContainer}>
      <h1 style={{ fontSize: '2rem' }}>Todo</h1>
      <p style={{ fontSize: '1.2rem' }}>
        <span style={{ marginRight: '0.4em' }}>
          <ChecklistIcon size={20} />
        </span>
        You have{' '}
        <span style={{ color: count > 0 ? 'red' : 'green' }}>{count}</span>{' '}
        tasks to do:
      </p>
    </div>
  )
}

export default TodoCount
