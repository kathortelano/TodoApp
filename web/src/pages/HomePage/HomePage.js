import TodoApp from 'src/components/TodoApp'

const homepage = {
  width: '100%',
  height: '50vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const HomePage = () => {
  return (
    <div style={homepage} className="homepage">
      <TodoApp />
    </div>
  )
}

export default HomePage
