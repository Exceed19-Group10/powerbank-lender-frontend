import { useState } from 'react'
import './App.css'
import BatteryItem from './components/Battery'
import logo from './assets/logo.png'

function App() {

  return (
    <div className="App">
      <div className="banner-container">
        <img src={logo} alt="banner-logo" />
        <div className="logo-text">
          <h2 className='first-line-banner-text'>Power Bank</h2>
          <h2 className='second-line-banner-text'>Lender</h2>
        </div>
      </div>

      <div className="card-container">
        <BatteryItem id="001" cap="3000" battery="80" borrow_mai="0" yu_mai="0"/>
        <BatteryItem id="002" cap="3000" battery="80" borrow_mai="0" yu_mai="1"/>
        <BatteryItem id="003" cap="3000" battery="80" borrow_mai="1" yu_mai="0"/>
        <BatteryItem id="004" cap="3000" battery="80" borrow_mai="1" yu_mai="1"/>
        <BatteryItem id="001" cap="3000" battery="80" borrow_mai="0" yu_mai="0"/>
        <BatteryItem id="002" cap="3000" battery="80" borrow_mai="0" yu_mai="1"/>
        <BatteryItem id="003" cap="3000" battery="80" borrow_mai="1" yu_mai="0"/>
        <BatteryItem id="004" cap="3000" battery="80" borrow_mai="1" yu_mai="1"/>
      </div>
    </div>
  )
}

export default App
