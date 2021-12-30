import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './component/Header'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/' element={<About />} />
        <Route exact path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
