import React from 'react'
import {useSelector} from 'react-redux'
import CountUp from 'react-countup'
import '../scss/cards.scss'
const Cards = () => {
  const values = useSelector(state => state.data)
  return (
    <div className="cards">
      {Object.keys(values).length
      &&
      <>
        <div className="cards__item">
          <h1 className="cards__item-title">Infected</h1>
          <CountUp 
            start={0} 
            end={values.confirmed.value} 
            duration={1} 
            separator="," 
            className="cards__item-value"/>
            <p className="cards__item-date">{new Date(values.lastUpdate).toDateString()}</p>
            <p className="cards__item-text">Number of active cases of COVID-19</p>
        </div>
        <div className="cards__item">
          <h1 className="cards__item-title">Recovered</h1>
          <CountUp 
            start={0} 
            end={values.recovered.value} 
            duration={1} 
            separator="," 
            className="cards__item-value"/>
            <p className="cards__item-date">{new Date(values.lastUpdate).toDateString()}</p>
            <p className="cards__item-text">Number of recovered people of COVID-19</p>
        </div>
        <div className="cards__item">
          <h1 className="cards__item-title">Died</h1>
          <CountUp 
            start={0} 
            end={values.deaths.value} 
            duration={1} 
            separator="," 
            className="cards__item-value"/>
            <p className="cards__item-date">{new Date(values.lastUpdate).toDateString()}</p>
            <p className="cards__item-text">Number of death caused by COVID-19</p>
        </div>
      </>
      }

    </div>
  )
}

export default Cards
