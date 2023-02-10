import './App.css'
import Home from './pages/Home'
import {Route, Routes} from "react-router-dom"
import Powerbank from './pages/Powerbank'

function App() {

  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/powerbank/:id" element={<Powerbank/>} />
    </Routes>
   </>
  )
}

export default App
