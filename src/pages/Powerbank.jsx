import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BatteryItem from '../components/BatteryItem'
import '../styles/powerbank.css'
import { get_powerbank_status, borrow_laew } from '../services/pw_data'

function Powerbank() {

  const navigate = useNavigate();

  const [powerbankInfo, setPowerbankInfo] = useState({})
  const {id} = useParams()
  const [uid, setUid] = useState("");
  const [upw, setUpw] = useState("");
  const [loginStatus, setLoginStatus] = useState(0);
  /// state 0 = not loged in
  /// state 1 = success
  /// state 2 = incorrect password
  /// state 3 = blacklisted


  useEffect(() => {
    // getPlace(id).then(place => setCafe(place))
    get_powerbank_status(id).then(data => setPowerbankInfo(data))


    return () => {}
  }, [])

  const borrowHandler = async () => {
    try {
      console.log()
      await borrow_laew(uid, upw, powerbankInfo.powerbank_ID).then(data => console.log(data))
      // return redirect(`inuse/${powerbankInfo.powerbank_ID}`)
      navigate(`inuse/${powerbankInfo.powerbank_ID}`)
    } catch(err) {
      console.log(err)
      // redirect(`inuse/${powerbankInfo.powerbank_ID}`)
      navigate('/')
    }
  }

  return (
    <div>
      <Link to='/'>
        <h5>Back</h5>
      </Link>

      <div className='powerbank-info-container'>
        <BatteryItem {...powerbankInfo}/>
        <form className='user-login'>
            <div className='inputbar'>
              <label>Username</label>
              <input
                type="text"
                value={uid}
                onChange={e => setUid(e.target.value)}
              />
            </div>
            <div className='inputbar'>
              <label>Password</label>
              <input
                type="password"
                value={upw}
                onChange={e => setUpw(e.target.value)}
              />
            </div>
        </form>
        <button id='borrow-button' onClick={borrowHandler} >BORROW NOW !</button>
      </div>
    </div>
  )
}

export default Powerbank