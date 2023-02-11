import React, {useState, useEffect} from 'react'
import back from "../assets/back.png"
import { useNavigate, Link } from 'react-router-dom'
import {  get_history } from "../services/pw_data"
import HistoryItem from "../components/HistoryItem"
import '../styles/history.css'

function History(){

  const [history, setHistory] = useState([])
  
  useEffect(() => {
    get_history().then(data => setHistory(data.user_history.reverse()))
    return () => {}
  }, [])
  

  return (
    <div className='history-container'>
      <Link to="/" className='back-button'>
        <img src={back} alt="back-button" className='back-arrow'/>
      </Link>
      <p className='topic'>History</p>
      <div className="history-components-container">
        {history.map(data => <HistoryItem {...data}/> )}
      </div>
    </div>
  )
}

export default History