import '../App.css'
import BatteryItem from '../components/BatteryItem'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { all_powerbank_status } from '../services/pw_data'
import { useEffect, useState } from 'react'
import '../styles/home.css'

function Home() {

  // const testData = [{id:"001", cap:"3000", battery:"80", borrow_mai:"0", yu_mai:"0"},
  //   {id:"002", cap:"3000", battery:"80", borrow_mai:"0", yu_mai:"1"},
  //   {id:"003", cap:"3000", battery:"80", borrow_mai:"1", yu_mai:"0"},
  //   {id:"004", cap:"3000", battery:"80", borrow_mai:"1", yu_mai:"1"}
  // ]

  const [powerbanks, setPowerbanks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      all_powerbank_status().then(data => setPowerbanks(data.all_powerbank)) //for ku server
      // all_powerbank_status().then(data => setPowerbanks(data)) //for localhost
    };

    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, [])

  const linkSelector = (yu_mai, borrow_mai, powerbank_ID) => {
    if (yu_mai) {
      if (borrow_mai) {
        return `/inuse/${powerbank_ID}`
      } else {
        return `/powerbank/${powerbank_ID}`
      }
    } else {
      if (borrow_mai) {
        return `/inuse/${powerbank_ID}`
      } else {
        return "/"
      }
    }
  }
  

  return (
    <div className="App">
      <Link to="/history" className="banner-container">
        <img src={logo} alt="banner-logo" />
        <div className="logo-text">
          <h2 className='first-line-banner-text'>Power Bank</h2>
          <h2 className='second-line-banner-text'>Lender</h2>
        </div>
      </Link>

      <div className="card-container">
        {powerbanks.map((data) => {
          // console.log(data)
          return (
            <Link className='batter-grid' to={linkSelector(data.yu_mai, data.borrow_mai, data.powerbank_ID)}>
                <BatteryItem {...data}/>
              
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Home
