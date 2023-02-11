import  React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { get_powerbank_status, force_yu_mai, confirm, get_fee } from '../services/pw_data'
import BatteryItem from '../components/BatteryItem'
import '../styles/inuse.css'
import back from "../assets/back.png"

function InUse() {
  const [usingInfo, setUsingInfo] = useState({})
  const [timeLeft, setTimeLeft] = useState(9999999)
  const [fines, setFines] = useState(0)
  const {id} = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await get_powerbank_status(id).then(data => {
        setUsingInfo(data)
        setTimeLeft(getTimeLeft(data.end_time))
        
        if (data.borrow_mai == 0) {
          navigate(`../../powerbank/${data.powerbank_ID}`)
        }
        
      })
      await get_fee(id).then(data => setFines(data.user_fee))
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
    // const d = new Date()
    // const s = new Date(endTime)
    // console.log(d.getHours(), d.getMinutes())
    // console.log(s.getHours(), s.getMinutes())
    return timeLeft
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
        {/* <h2>back</h2> */}
        <img src={back} alt="back-button" className='back-arrow'/>
      </Link>
      <BatteryItem {...usingInfo}/>

      { timeLeft > 0 ?
        <div className="time-container">
          <p className="time-text">Time remaining</p>
          <p className="time">{msToHMS(timeLeft)}</p>
        </div> : 

        <div className='times-up-container'>
          <h2>TIME'S UP</h2>
          <p>You have {fines}$ unpaid fines please contact our staff</p>
        </div>
      }

      <p className="username">USERNAME: {usingInfo.username}</p>
      <button onClick={forceReturnHandler} >FORCE RETURN</button>
      <button 
        className={usingInfo.yu_mai ? 'return-button orange-button' : 'return-button grey-button'} 
        onClick={usingInfo.yu_mai ? returnHandler : ()=>{}} 
      >
        RETURN
      </button>

    </div>
  )
}

export default InUse