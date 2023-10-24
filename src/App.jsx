import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './components/Home'
import En from './components/En'
import Success from './components/Success'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/en' element={<En />} />
        <Route exact path='/success' element={<Success />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
