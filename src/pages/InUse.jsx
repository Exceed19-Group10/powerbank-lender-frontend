import  React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { get_powerbank_status } from '../services/pw_data'
import BatteryItem from '../components/BatteryItem'
import { Link } from 'react-router-dom'

function InUse() {
  const [usingInfo, setUsingInfo] = useState({})
  const [timeLeft, setTimeLeft] = useState(999999999)
  const {id} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      get_powerbank_status(id).then(data => {
        setUsingInfo(data)
        setTimeLeft(getTimeLeft(data.end_time))
      })
    };

    const intervalId = setInterval(fetchData, 400);
    return () => clearInterval(intervalId);
  }, [])

  const msToHMS = (ms) => {
    let seconds = ms / 1000
    const hours = parseInt( seconds / 3600 )
    seconds = seconds % 3600
    const minutes = parseInt( seconds / 60 )
    seconds = seconds % 60;
    return ( hours+":"+minutes+":"+ Math.floor(seconds) )
  }

  const getTimeLeft = (endTime) => {
    const timeLeft = endTime - Date.now()
    return msToHMS(timeLeft)
  }

  return (
    <div className="inuse-container">
      <Link to="/">
        <h2>back</h2>
      </Link>
      <BatteryItem {...usingInfo}/>
      <div className="time-container">
        <h5>Time remaining</h5>
        <p>{timeLeft}</p>
      </div>
      <p className="username">USERNAME: {usingInfo.username}</p>

      <div>return</div>
    </div>
  )
}

export default InUse