import React from 'react'
import Cards from './components/Cards'
import Chart from './components/Chart'
import CountryPicker from './components/CountryPicker'
import './scss/app.scss'

function App() {
   
  return (
    <div className="app">
      <h1 className='app__title'>Corona Tracker</h1>
      <Cards/>
      <CountryPicker/>
      <Chart/>
    </div>
  );
}

export default App;
