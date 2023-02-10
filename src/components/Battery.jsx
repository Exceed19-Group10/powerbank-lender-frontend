import '../styles/card.css'
import batteryInUse from '../assets/battery-in-use-img.png'
import batteryAvailable from '../assets/battery-available.png'
import batteryNotAvailable from '../assets/battery-not-available.png'


function BatteryItem( { id, cap, battery, borrow_mai, yu_mai } ) {

  const batteryImgSelector = (borrow_mai, yu_mai) => {
    if (borrow_mai === "1") {
      return batteryInUse
    } else if (yu_mai === "1") {
      return batteryAvailable
    } else {
      return batteryNotAvailable
    }
  }

  const batteryTextSelector = (borrow_mai, yu_mai) => {
    if (borrow_mai === "1") {
      return "IN USE"
    } else if (yu_mai === "1") {
      return "AVAILABLE"
    } else {
      return "NOT AVAILABLE"
    }
  }

  const batteryStatusSelector = (borrow_mai, yu_mai) => {
    if (borrow_mai === "1") {
      return "status-in-use"
    } else if (yu_mai === "1") {
      return "status-available"
    } else {
      return "status-not-available"
    }
  }

  const blobSelector = (borrow_mai, yu_mai) => {
    if (borrow_mai === "1") {
      return "yellow-blob"
    } else if (yu_mai === "1") {
      return "green-blob"
    } else {
      return "red-blob"
    }
  }

  return (
    <div className="card-component">
      <div className="status">
        <div class={blobSelector(borrow_mai, yu_mai)}></div>
        <p className={batteryStatusSelector(borrow_mai, yu_mai)}>{batteryTextSelector(borrow_mai, yu_mai)}</p>
      </div>

      <img src={batteryImgSelector(borrow_mai, yu_mai)} alt="battery" className="battery-img"/>
      <div className="battery-info">
        <p className='info'>ID: {id}</p>
        <p className='info'>CAP: {cap} mA</p>
        <p className='info'>Battery: {battery}%</p>
      </div>
    </div>
  )
}

export default BatteryItem
