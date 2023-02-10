import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BatteryItem from '../components/BatteryItem'
import '../styles/powerbank.css'

function Powerbank() {
  const [powerbankInfo, setPowerbankInfo] = useState({})
  const {id} = useParams()
  const [uid, setUid] = useState("");
  const [upw, setUpw] = useState("");


  useEffect(() => {
    // getPlace(id).then(place => setCafe(place))
    const testData = [{id:"001", cap:"3000", battery:"80", borrow_mai:"0", yu_mai:"0"},
      {id:"002", cap:"3000", battery:"80", borrow_mai:"0", yu_mai:"1"},
      {id:"003", cap:"3000", battery:"80", borrow_mai:"1", yu_mai:"0"},
      {id:"004", cap:"3000", battery:"80", borrow_mai:"1", yu_mai:"1"}
    ]
    setPowerbankInfo(testData[id])
  }, [])

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
                type="text"
                value={upw}
                onChange={e => setUpw(e.target.value)}
              />
            </div>
        </form>
        <button id='borrow-button' onClick={() => this.borrow_laew(uid, upw,0 )} >BORROW NOW !</button>
      </div>
    </div>
  )
}

export default Powerbank