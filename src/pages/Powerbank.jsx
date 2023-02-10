import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BatteryItem from '../components/BatteryItem'
import '../styles/powerbank.css'
import { get_powerbank_status } from '../services/pw_data'

function Powerbank() {

  const [powerbankInfo, setPowerbankInfo] = useState({})
  const {id} = useParams()

  useEffect(() => {
    // getPlace(id).then(place => setCafe(place))
    get_powerbank_status(id).then(data => setPowerbankInfo(data))


    return () => {}
  }, [])

  return (
    <div className='powerbank-info-container'>
      <h5>Back</h5>
      <BatteryItem {...powerbankInfo}/>
    </div>
  )
}

export default Powerbank