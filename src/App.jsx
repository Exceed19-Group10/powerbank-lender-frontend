import './App.css'
import Home from './pages/Home'
import {Route, Routes} from "react-router-dom"
import Powerbank from './pages/Powerbank'
import InUse from './pages/InUse'


function App() {

  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/powerbank/:id" element={<Powerbank/>} />
      <Route path="/inuse/:id" element={<InUse/>} />
    </Routes>
   </>
  )
}

export default App
