import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BatteryItem from '../components/BatteryItem'
import '../styles/powerbank.css'

function Powerbank() {
  const [powerbankInfo, setPowerbankInfo] = useState({})
  const {id} = useParams()

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
    <div className='powerbank-info-container'>
      <h5>Back</h5>
      <BatteryItem {...powerbankInfo}/>
    </div>
  )
}

export default Powerbank