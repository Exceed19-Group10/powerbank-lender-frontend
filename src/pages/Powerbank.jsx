import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BatteryItem from '../components/BatteryItem'
import '../styles/powerbank.css'
import { get_powerbank_status } from '../services/pw_data'

function Powerbank() {

  const [powerbankInfo, setPowerbankInfo] = useState({})
  const {id} = useParams()
  const [uid, setUid] = useState("");
  const [upw, setUpw] = useState("");

  ////////////
  function randomWarning() {
    return Math.random() < 0.5 ? 'ฮ่า ๆ! ผิด ไอ้โง่ ( INCORRECT USERNAME OR PASSWORD )' : 'ฮั่นแน่ ของเก่ายังไม่ได้จ่ายน้า (THIS USER CAN’T BORROW RIGHT NOW PLEASE CONTACT OUR STAFF)';
  }
  /////////

  useEffect(() => {
    // getPlace(id).then(place => setCafe(place))
    get_powerbank_status(id).then(data => setPowerbankInfo(data))


    return () => {}
  }, [])

  return (
    <div>

      <div className='powerbank-info-container'>
        <Link to='/' className='back-button'>
          <h5>Back</h5>
        </Link>
        <BatteryItem {...powerbankInfo}/>
        <form className='user-login'>
            <div className='inputtext'>
              <label>Username</label>
              <input
                type="text"
                value={uid}
                onChange={e => setUid(e.target.value)}
              />
            </div>
            <div className='inputtext'>
              <label>Password</label>
              <input
                type="text"
                value={upw}
                onChange={e => setUpw(e.target.value)}
              />
            </div>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">FORGOT PASSWORD ?</a>
        </form>
        <p className='warning-text'>{randomWarning()}</p>
        
        <button id='borrow-button' onClick={() => this.borrow_laew(uid, upw,0 )} >BORROW NOW !</button>
      </div>
    </div>
  )
}

export default Powerbank