import './App.css'
import Home from './pages/Home'
import {Route, Routes} from "react-router-dom"
import Powerbank from './pages/Powerbank'
import InUse from './pages/InUse'
import History from './pages/History'


function App() {

  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/powerbank/:id" element={<Powerbank/>} />
      <Route path="/inuse/:id" element={<InUse/>} />
      <Route path="/history" element={<History/>} />
    </Routes>
   </>
  )
}

export default App
