import './App.css'
import router from './router'
import {useRoutes,useNavigate} from 'react-router-dom'

function App() {

  const navigate=useNavigate()

  return (
    <div className='main'>
      {useRoutes(router)}
    </div>
  )
}

export default App
