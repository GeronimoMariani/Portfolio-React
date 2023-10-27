import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './components/Home'
import Success from './components/Success'
import HomeEn from './components/HomeEn'
import SuccessEn from './components/SuccessEn'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<HomeEn />} />
          <Route exact path='/exito' element={<Success />} />
          <Route exact path='/success' element={<SuccessEn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
