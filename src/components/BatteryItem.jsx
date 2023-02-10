import '../styles/card.css'
import batteryInUse from '../assets/battery-in-use-img.png'
import batteryAvailable from '../assets/battery-available.png'
import batteryNotAvailable from '../assets/battery-not-available.png'


function BatteryItem( props ) {
  const {powerbank_ID, borrow_mai, yu_mai, user_ID, username, user_dept, start_time, end_time, late_mai} = props

  ////////////random cap and batt%/////////////////
  const cap = Math.floor(Math.random() * 10) * 1000
  const battery = Math.floor(Math.random() * 100)
  ///////////////////////////////////////////////


  const batteryImgSelector = (borrow_mai, yu_mai) => {
    if (borrow_mai) {
      return batteryInUse
    } else if (yu_mai) {
      return batteryAvailable
    } else {
      return batteryNotAvailable
    }
  }

  const batteryTextSelector = (borrow_mai, yu_mai) => {
    if (borrow_mai ) {
      return "IN USE"
    } else if (yu_mai ) {
      return "AVAILABLE"
    } else {
      return "UNAVAILABLE"
    }
  }

  const batteryStatusSelector = (borrow_mai, yu_mai) => {
    if (borrow_mai ) {
      return "status-in-use"
    } else if (yu_mai ) {
      return "status-available"
    } else {
      return "status-not-available"
    }
  }

  const blobSelector = (borrow_mai, yu_mai) => {
    if (borrow_mai ) {
      return "yellow-blob"
    } else if (yu_mai ) {
      return "green-blob"
    } else {
      return "red-blob"
    }
  }

  return (
    <div className="card-component">
      <div className="status">
        <div className={blobSelector(borrow_mai, yu_mai)}></div>
        <p className={batteryStatusSelector(borrow_mai, yu_mai)}>{batteryTextSelector(borrow_mai, yu_mai)}</p>
      </div>

      <img src={batteryImgSelector(borrow_mai, yu_mai)} alt="battery" className="battery-img"/>
      <div className="battery-info">
        <p className='info'>ID: {powerbank_ID}</p>
        <p className='info'>CAP: {cap} mA</p>
        <p className='info'>Battery: {battery}%</p>
      </div>
    </div>
  )
}

export default BatteryItem
