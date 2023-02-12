import React from 'react'
import '../styles/history.css'
import battery_img from '../assets/battery-available.png'

function HistoryItem( props ) {

  const {borrow_time, late_mai, powerbank_ID, time, user_ID, username} = props  

  const sToHMS = (seconds) => {
    const hours = parseInt( seconds / 3600 )
    seconds = seconds % 3600
    const minutes = parseInt( seconds / 60 )
    seconds = seconds % 60;
    return ( hours+":"+minutes+":"+ Math.floor(seconds) )
  }

  const redStyle = {
    color : "red"
  }

  return (
    <div className="history-item-container">
      <div className="img-section">
        <img src={battery_img} className="battery-img" />
        <h5>Power bank ID: {powerbank_ID}</h5>
      </div>
      <div className="history-info">
        <p>Borrower : {username}</p>
        <p>Borrower ID: {user_ID}</p>
        <p style={late_mai == "1" ? {...redStyle} : {}}>Borrow time: {sToHMS(borrow_time)} {late_mai == "1" ? "LATE" : ""}</p>
      </div>
    </div>
  )
}

export default HistoryItem