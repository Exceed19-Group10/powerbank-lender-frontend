import  React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { get_powerbank_status, force_yu_mai, confirm } from '../services/pw_data'
import BatteryItem from '../components/BatteryItem'
import { Link } from 'react-router-dom'
import '../styles/inuse.css'

function InUse() {
  const [usingInfo, setUsingInfo] = useState({})
  const [timeLeft, setTimeLeft] = useState(999999999)
  const {id} = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      get_powerbank_status(id).then(data => {
        setUsingInfo(data)
        if (data.borrow_mai == 0) {
          navigate("../../")
        }
        setTimeLeft(getTimeLeft(data.end_time))
      })
    };

    const intervalId = setInterval(fetchData, 300);
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
    const timeLeft = endTime*1000 - Date.now()
    return msToHMS(timeLeft)
  }
  const returnHandler = async () => {
    await confirm(usingInfo.powerbank_ID)
    navigate(`../../`)
  }

  const forceReturnHandler = async () => {
    force_yu_mai(usingInfo.powerbank_ID).then(console.log("done!"))
  }

  return (
    <div className="inuse-container">
      <Link to="/" className='back-button'>
        <h2>back</h2>
      </Link>
      <BatteryItem {...usingInfo}/>

      <div className="time-container">
        <p className="time-text">Time remaining</p>
        <p className="time">{timeLeft}</p>
      </div>

      <p className="username">USERNAME: {usingInfo.username}</p>
      <button onClick={forceReturnHandler} >FORCE RETURN</button>
      {usingInfo.yu_mai &&
        <button className='return-button' onClick={returnHandler} >RETURN</button>
      }

    </div>
  )
}

export default InUse