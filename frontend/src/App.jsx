import './output.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App