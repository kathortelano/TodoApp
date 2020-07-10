const Todolist = ({ children }) => {
  const list = {
    display: 'flex',
    flexFlow: 'column nowrap',
  }

  return (
    <div className="list-container" style={list}>
      {children}
    </div>
  )
}

export default Todolist
