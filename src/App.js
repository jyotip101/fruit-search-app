import './App.css'

import { Routes, Route } from 'react-router-dom'

import Header from './component/Header'
import Home from './pages/Home'
import About from './pages/About'
import FruitDetails from './pages/FruitDetails'
import Error from './pages/Error'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index path='/fruit-search-app' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/fruit/:id' element={<FruitDetails />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App
