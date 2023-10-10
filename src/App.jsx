import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './components/Home'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
