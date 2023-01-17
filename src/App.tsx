import { Heading } from './components/Heading'
import { ToDoList } from './components/ToDoList'

const App = () => {
  return (
    <div className="App font-Poppins container py-16 px-6 min-h-screen mx-auto">
      <Heading />
      <ToDoList />
    </div>
  )
}

export default App
